// server.js
// This file is the heart of our backend, now with MongoDB caching.

// 1. Import Dependencies
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// 2. Initialize Environment Variables
dotenv.config();

// 3. Define a Mongoose Schema
const weatherSchema = new mongoose.Schema({
  city: { type: String, required: true, lowercase: true, trim: true },
  data: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now, expires: '10m' } // Cache expires after 10 minutes
});
weatherSchema.index({ city: 1 });

// 4. Create a Mongoose Model
const Weather = mongoose.model('Weather', weatherSchema);

// 5. Connect to MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error("FATAL ERROR: MONGO_URI is not defined in .env file.");
    process.exit(1);
}
mongoose.connect(mongoUri)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// --- Express App Setup ---
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());

// 6. Define the Main API Route with Caching Logic
app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ message: 'City is required' });
    }
    const normalizedCity = city.toLowerCase().trim();

    // Check the database first
    const cachedData = await Weather.findOne({ city: normalizedCity });
    if (cachedData) {
      console.log(`Cache HIT for city: ${normalizedCity}`);
      return res.json(cachedData.data);
    }
    
    console.log(`Cache MISS for city: ${normalizedCity}. Fetching from API.`);

    // If not in cache, fetch from API
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ message: 'Weather API key not configured' });
    }
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    // Save the new data to the database
    const newWeatherData = new Weather({
        city: normalizedCity,
        data: weatherData
    });
    await newWeatherData.save();
    console.log(`Saved new weather data for ${normalizedCity} to cache.`);

    res.json(weatherData);

  } catch (error) {
    console.error('Error in /api/weather route:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ 
        message: 'Failed to fetch weather data. Please check the city name.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
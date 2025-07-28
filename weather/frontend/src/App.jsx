import React, { useState, useEffect } from 'react';
import axios from 'axios';

// --- SVG Icons (for better visuals and performance) ---
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>;
const ThermometerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM12 18.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM12 12.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" /></svg>;
const WindIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" /></svg>;

// --- Helper Components ---

const InfoCard = ({ title, value, icon }) => (
    <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center justify-center gap-2 text-center">
        <div className="text-slate-300 text-sm">{title}</div>
        <div className="text-xl font-bold flex items-center gap-2">
            {icon && <span>{icon}</span>}
            {value}
        </div>
    </div>
);

const HourlyForecastCard = ({ time, icon, temp }) => (
    <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-white/10 p-4 rounded-lg w-24">
        <p className="text-sm">{time}</p>
        <img src={icon} alt="" className="w-10 h-10" />
        <p className="font-bold">{temp}°</p>
    </div>
);

const DailyForecastCard = ({ day, icon, high, low }) => (
    <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
        <p className="w-1/4 font-medium">{day}</p>
        <img src={icon} alt="" className="w-10 h-10" />
        <div className="flex items-center gap-2">
            <p className="font-medium">{high}°</p>
            <p className="text-slate-400">{low}°</p>
        </div>
    </div>
);

// --- Main App Component ---

function App() {
    const [city, setCity] = useState('Delhi');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (e) => {
        if (e) e.preventDefault();
        if (!city) {
            setError("Please enter a city name.");
            return;
        }
        setError(null);
        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:5001/api/weather?city=${city}`);
            setWeatherData(response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while fetching data.');
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    // Fetch weather for the default city on initial load
    useEffect(() => {
        fetchWeather();
    }, []);

    const getDayName = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <div className="min-h-screen w-full bg-slate-900 text-white font-sans flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-6">
                
                {/* Search Bar */}
                <form onSubmit={fetchWeather} className="flex mb-6">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Search for a city..."
                        className="w-full px-4 py-3 bg-slate-700/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <button type="submit" disabled={loading} className="px-5 py-3 bg-blue-600 rounded-r-lg hover:bg-blue-700 disabled:bg-blue-400 transition">
                        {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <SearchIcon />}
                    </button>
                </form>

                {/* Main Content Area */}
                {error && <p className="text-center text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</p>}

                {weatherData && !error && (
                    <div className="animate-fade-in">
                        {/* Current Weather */}
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold">{weatherData.location.name}, {weatherData.location.country}</h2>
                            <p className="text-slate-400">{weatherData.location.localtime.split(' ')[1]} - {getDayName(weatherData.location.localtime)}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <img src={weatherData.current.condition.icon} alt="" className="w-24 h-24" />
                            <div>
                                <p className="text-7xl font-extrabold">{Math.round(weatherData.current.temp_c)}°C</p>
                                <p className="text-lg font-medium text-slate-300">{weatherData.current.condition.text}</p>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <InfoCard title="Feels Like" value={`${Math.round(weatherData.current.feelslike_c)}°C`} />
                            <InfoCard title="Wind" value={`${weatherData.current.wind_kph} km/h`} />
                            <InfoCard title="Humidity" value={`${weatherData.current.humidity}%`} />
                            <InfoCard title="UV Index" value={weatherData.current.uv} />
                        </div>

                        {/* Hourly Forecast */}
                        <h3 className="text-xl font-semibold mb-4">Hourly Forecast</h3>
                        <div className="flex gap-4 overflow-x-auto pb-4">
                            {weatherData.forecast.forecastday[0].hour
                                .filter(hour => new Date(hour.time) > new Date()) // Only show future hours
                                .map(hour => (
                                    <HourlyForecastCard 
                                        key={hour.time_epoch}
                                        time={hour.time.split(' ')[1]}
                                        icon={hour.condition.icon}
                                        temp={Math.round(hour.temp_c)}
                                    />
                                ))}
                        </div>

                        {/* Daily Forecast */}
                        <h3 className="text-xl font-semibold mt-6 mb-4">3-Day Forecast</h3>
                        <div className="space-y-3">
                            {weatherData.forecast.forecastday.map(day => (
                                <DailyForecastCard 
                                    key={day.date_epoch}
                                    day={getDayName(day.date)}
                                    icon={day.day.condition.icon}
                                    high={Math.round(day.day.maxtemp_c)}
                                    low={Math.round(day.day.mintemp_c)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
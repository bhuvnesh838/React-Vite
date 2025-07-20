import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency = "usd",
    currencyOptions = [],
    amountDisabled = false,
    currencyDisabled = false,
}) {
    const amountInputId = useId();

    return (
        <div className="bg-white p-4 rounded-xl shadow-md text-sm flex items-center">
            <div className="w-1/2 pr-3">
                <label htmlFor={amountInputId} className="text-gray-500 mb-2 block font-medium">{label}</label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-black text-3xl font-semibold"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-col items-end">
                <p className="text-gray-500 mb-2 w-full text-right font-medium">Currency Type</p>
                <select
                    className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none appearance-none font-medium text-gray-800"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;

import React from 'react'

const CurrencyRow = ({currencyOptions, selectedCurrency,
    onChangeCurrency, amount, onChangeAmount}) => {
    return (
        <div>
            <input
            type="number" className="input"
            value={amount} onChange={onChangeAmount}
            />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencyRow
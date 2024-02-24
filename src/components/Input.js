import React from 'react'

const Input = ({ value, onChange }) => {
    return (
        <input
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="number"
            value={value}
            onChange={onChange}
            placeholder="Enter a number"
        />
    )
}

export default Input

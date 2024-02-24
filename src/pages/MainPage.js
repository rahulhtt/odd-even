import React, { useState } from 'react'
import Input from '../components/Input';
import isEven from '../util/Oddeven';


const MainPage = () => {

    const [ number, setNumber ] = useState('');
    const [ result, setResult ] = useState('');

    const handleChange = (e) => {
        setNumber( e.target.value );
    };

    const handleCheck = () => {
        if ( number !== '' ) {
            setResult( isEven( number ) ? 'Even' : 'Odd');
        } else {
            setResult('');
        }
    };
    return (
        <>
            <div className="flex justify-center bg-blue-300 items-center h-screen">
                <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-xl font-semibold mb-4">Odd/Even Checker</h2>
                    <Input value={number} onChange={handleChange} />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors"
                        onClick={handleCheck}
                    >
                        Check
                    </button>
                    <div className="mt-4">{result && `Result: ${result}`}</div>
                </div>
            </div></>

    )
}

export default MainPage

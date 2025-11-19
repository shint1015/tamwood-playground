import { useState, useEffect, useContext } from 'react';
import { MediumContext } from './MediumContext.jsx';

export default function Medium() {
    const { oddCount, evenCount, setOddCount, setEvenCount } = useContext(MediumContext);
    useEffect(() => {
        // Reset counts on component mount
        setOddCount(0);
        setEvenCount(0);
    }, []);
    const [inputText, setInputText] = useState('');
    const [numArrays, setNumArrays] = useState({ even: [], odd: [] });
    // Function to analyze the input text and categorize numbers into even and odd arrays
    const analyzeNumbers = text => {
        const evenNumbers = [];
        const oddNumbers = [];

        const inputNumbers = text.trim().split(',');
        for (let num of inputNumbers) {
            // if number is invalid, skip
            if (isNaN(num) || num.trim() === '') continue;

            // Convert string to number
            num = parseInt(num.trim(), 10);
            if (num % 2 === 0) {
                // Even number
                evenNumbers.push(num);
            } else {
                // Odd number
                oddNumbers.push(num);
            }
        }

        setNumArrays({ even: evenNumbers, odd: oddNumbers });
        setEvenCount(evenNumbers.length);
        setOddCount(oddNumbers.length);
    };

    return (
        <div>
            <h2>Medium Page</h2>
            <textarea
                placeholder='Type numbers here...'
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value);
                    analyzeNumbers(e.target.value);
                }}
                rows={10}
                cols={50}
            ></textarea>
            <div>
                <p>List of numbers: {inputText}</p>
                <p>List of even Numbers: {numArrays.even.join(', ')}</p>
                <p>List of odd Numbers: {numArrays.odd.join(', ')}</p>
                <p>Count of Evens: {evenCount}</p>
                <p>Count of Odds: {oddCount}</p>
                <p>
                    Dominant:
                    {evenCount > oddCount ? 'Evens' : oddCount > evenCount ? 'Odds' : 'Equal'}
                </p>
            </div>
        </div>
    );
}

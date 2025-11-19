import { useState, useContext } from 'react';
import { MediumContext } from './MediumContext.jsx';
export default function Hard() {
    // Accessing oddCount and evenCount from MediumContext
    const { oddCount, evenCount } = useContext(MediumContext);
    // State to store user input
    const [inputText, setInputText] = useState('');
    // State to store results of palindrome checks
    const [results, setResults] = useState({
        isSequencePalindrome: false,
        isSumPalindrome: false,
    });

    const analyseNumbers = text => {
        // Split input text into an array of numbers
        const inputNumbers = text.trim().split(',');
        // Create a reversed copy of the input numbers array
        const reverseArray = inputNumbers.slice().reverse();

        let sum = 0;
        let reverseSum = 0;
        let isSequencePalindrome = true;
        for (let i = 0; i < inputNumbers.length; i++) {
            // if number is invalid, skip
            if (isNaN(inputNumbers[i]) || inputNumbers[i].trim() === '') continue;
            const num = parseInt(inputNumbers[i].trim(), 10);
            // compute sum
            sum += num;
            // compute reverse sum
            reverseSum += parseInt(reverseArray[i].trim(), 10);
            // check palindrome for sequence
            if (inputNumbers[i].trim() !== reverseArray[i].trim()) {
                isSequencePalindrome = false;
            }
        }
        // check palindrome for sum
        let isSumPalindrome = sum === reverseSum;
        setResults({
            isSequencePalindrome,
            isSumPalindrome,
        });
    };

    return (
        <div>
            <h2>Hard Page</h2>
            <textarea
                placeholder='Type your Number here...'
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value);
                    analyseNumbers(e.target.value);
                }}
                rows={10}
                cols={50}
            ></textarea>
            <div>
                <p>List of numbers: {inputText}</p>
                <p>Stored OddCount from Medium: {oddCount}</p>
                <p>Stored EvenCount from Medium: {evenCount}</p>
                <p>
                    Palindromes Check:{' '}
                    {results.isSequencePalindrome && results.isSumPalindrome
                        ? 'Perfect Palindrome Set!'
                        : ''}
                </p>
            </div>
        </div>
    );
}

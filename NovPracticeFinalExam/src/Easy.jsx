import { useEffect, useState, useContext } from 'react';
import { EasyContext } from './EasyContext.jsx';
export default function Easy() {
    const { easyCompleted, setEasyCompleted } = useContext(EasyContext);
    useEffect(() => {
        setEasyCompleted(0);
    }, []);
    const [inputText, setInputText] = useState('');
    const [displayTxtObj, setDisplayTextObj] = useState({
        vowelNums: 0,
        consonantNums: 0,
        digits: 0,
        specialCharNums: 0,
    });
    // Helper function to check if a character is a vowel
    const isVowel = char => 'aeiouAEIOU'.indexOf(char) !== -1;

    // Function to analyze the text
    const analyzeText = () => {
        let vowelCount = 0;
        let consonantCount = 0;
        let digitCount = 0;
        let specialCharCount = 0;

        for (let char of inputText) {
            if (isVowel(char)) {
                vowelCount++; // Increment vowel count
            } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
                consonantCount++; // Increment consonant count
            } else if (char >= '0' && char <= '9') {
                digitCount++; // Increment digit count
            } else if (char.trim() !== '') {
                specialCharCount++; // Increment special character count
            }
        }

        setDisplayTextObj({
            vowelNums: vowelCount,
            consonantNums: consonantCount,
            digits: digitCount,
            specialCharNums: specialCharCount,
        });
        setEasyCompleted(1);
    };

    return (
        <div>
            <h2>Easy Page</h2>
            <h3>Easy completed: {easyCompleted}</h3>
            <textarea
                placeholder='Type your text here...'
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value);
                    analyzeText(e);
                }}
                rows={10}
                cols={50}
            ></textarea>
            <div>
                <p>Vowels: {displayTxtObj.vowelNums}</p>
                <p>Consonants: {displayTxtObj.consonantNums}</p>
                <p>Digits: {displayTxtObj.digits}</p>
                <p>Special Characters: {displayTxtObj.specialCharNums}</p>
            </div>
        </div>
    );
}

import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    // click event
    const onClickEvent = () => {
        // add 1 to previous number
        setCount(prev => ++prev);
    };
    return (
        <>
            <button onClick={onClickEvent}>add</button>
            <p>{count}</p>
        </>
    );
}

export default Counter;

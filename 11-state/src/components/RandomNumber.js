import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

function RandomNumber({ maxNum }) {
    const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(maxNum));
    }
    return (
        <>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random Number</button>
        </>
    )
}

export default RandomNumber;
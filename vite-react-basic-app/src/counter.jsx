import { useState } from "react";

function Counter(props) {

    const { username, designation } = props.user;
    const [counter, setCounter] = useState(props.counter);

    function addCounter() {
        setCounter(counter + 1);
        console.log(`The value of counter is ${counter}`);
    }

    function reduceCounter() {
        setCounter(counter - 1);
        console.log(`The value of counter is ${counter}`);
    }

    return (
        <>
            <h2>Username: {username}, Designation: {designation}</h2>
            <button type="button" onClick={addCounter}>Add Counter</button>
            <button type="button" onClick={reduceCounter}>Reduce Counter</button>
            <h1>Value of counter is: {counter} </h1>
        </>
    )
}
export default Counter;
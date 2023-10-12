// import React, { Component } from 'react';

// class Counter extends Component {
//     constructor() {
//         super();
//         this.state = { count: 0 };
//     }

//     render() {
//         return <h1>Count: {this.state.count + 1}</h1>;
//     }
// }

// export default Counter;


import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
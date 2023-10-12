import React, { useState } from 'react';

function Button() {
    const [buttonText, setButtonText] = useState('Click me');

    const handleClick = () => {
        setButtonText('Button clicked');
    };

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    );
}

export default Button;

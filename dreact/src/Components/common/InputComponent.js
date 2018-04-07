import React from 'react';

const InputComponent = ({ id, label, type, isRequired, placeHolder, value, onChange }) => {
    return (
        <div>
            <label
                htmlFor={id}>{label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                require={isRequired}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputComponent;
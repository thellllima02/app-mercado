import React from 'react';

interface ButtonProps {
    label: any;
    type?: "button" | "submit" | "reset";
}


export default function Button({ label, type = "button" }: ButtonProps) {
    return (
        <button type={type}>
            {label}
        </button>
    );
}

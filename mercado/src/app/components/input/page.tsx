import styles from './input.module.css'
import React from 'react'

interface InputProps{
    type?: string;
    placeholder?: string;
    name?:string;
    id?:string;
}

export default function Input({type="text", placeholder = "", name, id}: InputProps) {
    return (
        <div className={styles.container}>
            <input 
            className={styles.input} 
            type={type} 
            placeholder={placeholder} 
            name={name} 
            id={id||name} 
            />
        </div>
    );
}

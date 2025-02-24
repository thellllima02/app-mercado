'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import styles from "./styles.module.css"
import Input from '../components/input/page';
import Button from '../components/button/page';

export default function Page() {
    const [formData, setFormData] = useState({nome:"",endereco:"",cidade:""})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{setFormData({...formData, [event.target.name]: event.target.value});
};
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log("Dados do Cliente", formData);

    }
    return (
        <>
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.text}>Página de Clientes</h1>
            
            <Input placeholder="Digite o nome do cliente" name="nome" />
            <Input placeholder="Digite o endereço do cliente" name="endereco" />
            <Input placeholder="Digite a cidade do cliente" name="cidade" />
            
            <Button type="submit" label="Salvar" />
            <Link href="./"><button className={styles.button}>Voltar</button></Link>
        </form>

        </div>
        </>
    );
}
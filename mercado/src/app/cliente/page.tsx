'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./styles.module.css";
import Input from '../components/input/page';
import Button from '../components/button/page';

export default function Page() {
    const [formData, setFormData] = useState({ nome: "", endereco: "", cidade: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('/api/cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log(result.message);
    };

    return (
        <body className={styles.body}>
            <div className={styles.div}>
                <header className={styles.header}>
                <h1 >Página de Clientes</h1>
                </header>
                <section className={styles.section}>
                    <form onSubmit={(event) => handleSubmit(event, formData)} >
                        <Input placeholder="Nome do cliente" name="nome" value={formData.nome} onChange={handleChange} />
                        <Input placeholder="Endereço do cliente" name="endereco" value={formData.endereco} onChange={handleChange} />
                        <Input placeholder="Cidade do cliente" name="cidade" value={formData.cidade} onChange={handleChange} />
                        
                        <Button type="submit" label="Salvar" />
                        <Link href="./"><Button type="submit" label="Voltar" /></Link>
                    </form>
                </section>
                <footer className={styles.footer}>
                    <p>© 2025 Hércules Silva. Todos os direitos reservados.</p>
                </footer>
            </div>
        </body>
    );
}
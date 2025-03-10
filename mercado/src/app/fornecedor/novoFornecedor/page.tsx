'use client'
import React, { useState } from "react";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"
import Input from "../../components/input/page";
import Button from "../../components/button/page";

export default function Fornecedor() {
    const [formData, setFormData] = useState({ nome: "", endereco: "", cidade: "", empresa: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        if (!formData.nome || !formData.endereco || !formData.cidade || !formData.empresa) {
            alert('Preencha todos os campos!')
            return;
        }
        const response = await fetch('http://localhost:3030/api/fornecedor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (response.ok) {
            alert('Dados salvos com sucesso!')
            setFormData({ nome: "", endereco: "", cidade: "", empresa: "" })
        } else {
            alert('Erro ao salvar os dados!')
        }
        console.log(result.message);
    };
    return (
        <body className={styles.body}>
            <div className={styles.div}>
                <header className={styles.header}>
                    <h1 >Página de Fornecedor</h1>
                </header>
                <section className={styles.section}>
                    <form onSubmit={(event) => handleSubmit(event)} >
                        <Input placeholder="Nome do Fornecedor " name="nome" value={formData.nome} onChange={handleChange} />
                        <Input placeholder="Endereço" name="endereco" value={formData.endereco} onChange={handleChange} />
                        <Input placeholder="Cidade " name="cidade" value={formData.cidade} onChange={handleChange} />
                        <Input placeholder="Empresa" name="empresa" value={formData.empresa} onChange={handleChange} />
                        <Button type="submit" label="Salvar" />
                        <CustonLink href="./" label="Voltar"></CustonLink>
                    </form>
                </section>
                <footer className={styles.footer}>
                    <p>© 2025 Hércules Silva. Todos os direitos reservados.</p>
                </footer>
            </div>
        </body>
    );

}
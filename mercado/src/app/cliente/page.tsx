
import React from 'react';

export default function Page() {
    return (
        <>
        <form action="" >
        <div>
            <h1>Página de Clientes</h1>
            <input type="text" placeholder="Digite o nome do cliente" name="nome" id="nome"/>
            <input type="text" placeholder="Digite o endereço do cliente" name="endereco" id="endereco"/>
            <input type="text" placeholder="Digite a cidade do cliente" name="cidade" id="cidade" />
            
            <button>Salvar</button>
        </div>
        </form>
        </>
    );
}
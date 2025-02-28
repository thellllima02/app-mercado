import Link from "next/link";

export default async function ViewCliente() {
    const receberAPI = await fetch('http://localhost:3030/api/cliente');
    const convertejson = await receberAPI.json();

    return(
        <>
        <ul>{
            convertejson.map((cliente) => (
                <li key={cliente.id}>
                    <label > {cliente.nome} </label>
                    <label> {cliente.endereço} </label>
                    <label> {cliente.cidade} </label>
                    
                </li>
            ))}
            <Link href="./">Voltar</Link>
        </ul>
        </>
    )
    
}


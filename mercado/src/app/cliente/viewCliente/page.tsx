import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";

export default async function ViewCliente() {
    try {
        const receberAPI = await fetch('http://localhost:3030/api/cliente');
        const convertejson = await receberAPI.json();
        return (
            <>
                <ul>{
                    convertejson.map((cliente) => (
                        <li key={cliente.id}>
                            <label> {cliente.nome} </label>
                            <label> {cliente.endereço} </label>
                            <label> {cliente.cidade} </label>
                        </li>
                    ))}
                    <CustonLink href="./" label="Voltar"></CustonLink>
                </ul>
            </>
        )
    } catch (error) {
        notFound();
    }
}


import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";

export default async function ViewCliente() {
    try {
        const receberAPI = await fetch('http://localhost:3030/api/cliente');
        const convertejson = await receberAPI.json();
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {convertejson.map((cliente) => (
                            <tr key={cliente.id}>
                                <td> {cliente.nome} </td>
                                <td> {cliente.endereco} </td>
                                <td> {cliente.cidade} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <CustonLink href="./" label="Voltar"></CustonLink>
            </>
        )
    } catch (error) {
        notFound();
    }
}


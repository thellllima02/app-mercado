import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";

export default async function ViewVenda() {
    try {
        const receberAPI = await fetch('http://localhost:3030/api/venda');
        const converterJson = await receberAPI.json();
        return (
            <>
                <ul>{
                    converterJson.map((venda) => (
                        <li key={venda.id}>
                            <label> {venda.valor} </label>

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


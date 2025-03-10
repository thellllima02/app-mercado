import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";

export default async function ViewCompra() {
    try {
        const receberAPI = await fetch('http://localhost:3030/api/compra')
        const convertejson = await receberAPI.json();
        return (
            <>
                <ul>{
                    convertejson.map((compra) => (
                        <li key={compra.id}>
                            <label> {compra.nome} </label>
                        </li>
                    ))}
                    <CustonLink href="./" label="Voltar "></CustonLink>
                </ul>
            </>
        )
    } catch (error) {
        notFound();
    }
}
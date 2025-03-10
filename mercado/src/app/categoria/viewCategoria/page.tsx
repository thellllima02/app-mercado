import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";

export default async function ViewCategoria() {
    try {
        const receberAPI = await fetch('http://localhost:3030/api/categoria')
        const converterJson = await receberAPI.json();
        return(
            <>
            <ul>{
                converterJson.map((categoria) =>(
                    <li key={categoria.id}>
                        <label> {categoria.nome} </label>
                    </li>
                ))}
                <CustonLink href="./" label="Voltar"></CustonLink>
            </ul>
            </>
        );
    } catch (error) {
        notFound();        
    }
}
import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";

export default async function ViewProduto() {
    try {
        const receberAPI = await fetch('http://localhost:3030/api/produto')
        const convertejson = await receberAPI.json();
        return (
            <>
                <ul>{
                    convertejson.map((produto) => (
                        <li key={produto.id}>
                            <label> {produto.nome} </label>
                            <label> {produto.preco} </label>
                            <label> {produto.quantidade} </label>
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
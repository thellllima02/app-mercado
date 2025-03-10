import CustonLink from "../../components/link/page";

export default async function ViewFornecedor() {
    const receberAPI = await fetch('http://localhost:3030/api/fornecedor')
    const convertejson = await receberAPI.json();

    return(
        <>
        <ul>{
            convertejson.map((fornecedor) =>(
                <li key={fornecedor}>
                    <label> {fornecedor.nome} </label>
                    <label> {fornecedor.endereco} </label>
                    <label> {fornecedor.cidade} </label>
                    <label> {fornecedor.empresa} </label>

                </li>
            ))}
            <CustonLink href="./" label="Voltar"></CustonLink>
        </ul>
        </>

    )
    
}
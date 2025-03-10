import CustonLink from "./../components/link/page";

export default function Fornecedor() {
    return(
        <div>
            <h1>Categoria</h1>
            <CustonLink href="/fornecedor/novoFornecedor" label="Novo Fornecedor"></CustonLink>
            <CustonLink href="/fornecedor/novoFornecedor" label="Visulizar Fornecedor"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
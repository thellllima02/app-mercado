import CustonLink from "./../components/link/page";

export default function Fornecedor() {
    return (
        <div>
            <h1>Fornecedor</h1>
            <CustonLink href="/fornecedor/viewFornecedor" label="Visulizar Fornecedor"></CustonLink>
            <CustonLink href="/fornecedor/novoFornecedor" label="Novo Fornecedor"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
import CustonLink from "./../components/link/page";

export default function Venda() {
    return(
        <div>
            <h1>Venda</h1>
            <CustonLink href="/venda/viewVenda" label="Visualizar Vendas"></CustonLink>
            <CustonLink href="/venda/novaVenda" label="Adicionar Venda"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
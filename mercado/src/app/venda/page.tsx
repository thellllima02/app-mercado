import CustonLink from "./../components/link/page";

export default function Venda() {
    return(
        <div>
            <h1>Categoria</h1>
            <CustonLink href="/venda/viewCompra" label="Visualizar Vendas"></CustonLink>
            <CustonLink href="/venda/novaCompra" label="Adicionar Venda"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
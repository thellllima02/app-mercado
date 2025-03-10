import CustonLink from "./../components/link/page";

export default function Compra() {
    return(
        <div>
            <h1>Categoria</h1>
            <CustonLink href="/compra/viewCompra" label="Visualizar Compras"></CustonLink>
            <CustonLink href="/compra/novaCompra" label="Adicionar Compra"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
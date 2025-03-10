import CustonLink from "./../components/link/page";

export default function Produto() {
    return(
        <div>
            <h1>Categoria</h1>
            <CustonLink href="/produto/viewProduto" label="Visualizar Produtos"></CustonLink>
            <CustonLink href="/produto/novaProduto" label="Adicionar Produto"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
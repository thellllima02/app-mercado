import CustonLink from "./../components/link/page";

export default function Categoria() {
    return(
        <div>
            <h1>Categoria</h1>
            <CustonLink href="/categoria/viewCategoria" label="Visualizar Categorias"></CustonLink>
            <CustonLink href="/categoria/novaCategoria" label="Adicionar Categorias"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
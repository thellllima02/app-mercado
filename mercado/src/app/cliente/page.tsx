import CustonLink from "./../components/link/page";

export default function Cliente() {
    return(
        <div>
            <h1>Categoria</h1>
            <CustonLink href="/cliente/viewCliente" label="Visualizar Cliente"></CustonLink>
            <CustonLink href="/cliente/novoCliente" label="Adicionar Cliente"></CustonLink>
            <CustonLink href="./" label="Voltar"></CustonLink>
        </div>
    )
}
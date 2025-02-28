import Link from "next/link"
export default function Cliente(){
    return(
        <div>
            <h1>Cliente</h1>
            <Link href="/cliente/viewCliente"> Visualizar Cliente</Link>
            <Link href="cliente/novoCliente"> Novo Cliente</Link>
            <Link href="./"> Voltar</Link>
            
        </div>

    )
}
import Link from 'next/link'
export default function NotFound() {
    return (
      <div>
        <h1>Página não encontrada</h1>
        <p>Oops! A página que você procura não existe.</p>
        <div>
            <Link href="./"><button>Voltar para pagina inicial.</button></Link>
          </div>
      </div>
    );
  }
  
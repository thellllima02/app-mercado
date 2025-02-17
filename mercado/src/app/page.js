import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className={styles.h}>Página Principal</h1>
      <nav className={styles.lins}>
      <Link href="./cliente"> Cadastrar cliente </Link>
      <Link href="./cliente"> Cadastrar Fornecedores </Link>
      <Link href="./cliente"> Cadastrar Produto </Link>

      </nav>
    
    </div>
    
  )
}
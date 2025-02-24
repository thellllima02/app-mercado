import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <h1 className={styles.h}>Página Principal</h1>
      <h2 className={styles.sub}>Cadastro </h2>
      <nav className={styles.lins}>
      <Link href="./cliente"> Cliente </Link>
      <Link href="./fornecedores"> Fornecedores </Link>
      <Link href="./produtos"> Produto </Link>

      </nav>
    
    </div>
    
  )
}
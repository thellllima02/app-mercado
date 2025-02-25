import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <body>
    <div className={styles.div}>
      <header>
      <h1 className={styles.header}>Página Principal</h1>
      <h2 className={styles.sub}>Cadastro </h2>
      </header>
      <section>
        <div className={styles.section}>
          <ul>
            <li>
            <Link href="./cliente"> Cliente </Link>
            </li>
            <li>
            <Link href="./fornecedores"> Fornecedores </Link>
            </li>
            <li>
            <Link href="./produtos"> Produto </Link>
            </li>
            <li></li>
            <li></li>
          </ul>
       
        
        
      
        </div>
      </section>

      <footer className={styles.footer}>
                    <p>© 2025 Hércules Silva. Todos os direitos reservados.</p>
                </footer>
    
    </div>
    </body>
    
  )
}
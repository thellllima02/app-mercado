import { notFound } from "next/navigation";
import CustonLink from "../../components/link/page";
import styles from "../styles.module.css"

export default async function ViewCategoria() {
    try {
        const receberAPI = await fetch('http://localhost:3030/api/categoria')
        const converterJson = await receberAPI.json();
        return(
            <>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Nome</th>
                    </tr>
                </thead>
                <tbody>
                {
                converterJson.map((categoria) =>(
                    <tr key={categoria.id} className={styles.tr}>
                        <td className={styles.td}> {categoria.nome} </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <CustonLink href="./" label="Voltar"></CustonLink>
            </>
        );
    } catch (error) {
        notFound();        
    }
}
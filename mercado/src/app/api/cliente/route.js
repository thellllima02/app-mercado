import pool from './db';

export async function POST(req) {
    const { nome, endereco, cidade } = await req.json();

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'INSERT INTO cliente (nome, endereco, cidade) VALUES (?, ?, ?)',
            [nome, endereco, cidade]
        );
        connection.release();

        console.log("Dados salvos no banco de dados:", { nome, endereco, cidade });
        return new Response(JSON.stringify({ message: 'Dados salvos com sucesso!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Erro ao salvar os dados no banco de dados:", error);
        return new Response(JSON.stringify({ message: 'Erro ao salvar os dados' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
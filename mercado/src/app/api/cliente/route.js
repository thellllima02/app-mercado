export async function POST(req) {
    const { nome, endereco, cidade } = await req.json();
    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
    console.log("Dados recebidos:", { nome, endereco, cidade });
    return new Response(JSON.stringify({ message: 'Dados salvos com sucesso!' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
// Exemplo de como o controller pode responder ao adicionar um imóvel
function adicionarImovel(req, res) {
    const novoImovel = req.body;
    imoveis.push(novoImovel);
    res.json({ mensagem: 'Imóvel adicionado com sucesso!', imovel: novoImovel });
}

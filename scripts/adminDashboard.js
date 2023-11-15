document.addEventListener('DOMContentLoaded', function () {
    carregarImoveis();
});

function carregarImoveis() {
    fetch('/api/imoveis')
        .then(response => response.json())
        .then(imoveis => exibirImoveis(imoveis))
        .catch(error => console.error('Erro ao carregar imóveis:', error));
}

function exibirImoveis(imoveis) {
    const imoveisContainer = document.getElementById('imoveis-container');
    imoveisContainer.innerHTML = '';

    imoveis.forEach(imovel => {
        const divImovel = document.createElement('div');
        divImovel.innerHTML = `
            <p>ID: ${imovel.id}</p>
            <p>Nome: ${imovel.nome}</p>
            <p>Endereço: ${imovel.endereco}</p>
            <p>Preço: ${imovel.preco}</p>
            <button onclick="removerImovel(${imovel.id})">Remover</button>
            <hr>
        `;
        imoveisContainer.appendChild(divImovel);
    });
}

function adicionarImovel() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const preco = document.getElementById('preco').value;
    const imagemInput = document.getElementById('imagem');

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('endereco', endereco);
    formData.append('preco', preco);
    formData.append('imagem', imagemInput.files[0]);

    fetch('/api/imoveis', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
            carregarImoveis();
        })
        .catch(error => console.error('Erro ao adicionar imóvel:', error));
}

function removerImovel(id) {
    fetch(`/api/imoveis/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            alert(data.mensagem);
            carregarImoveis();
        })
        .catch(error => console.error('Erro ao remover imóvel:', error));
}

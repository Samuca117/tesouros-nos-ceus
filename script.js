// Seleciona todos os botões que avançam a história
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona um evento de clique a cada botão
avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Encontra o passo atual (aquele que está ativo)
        const atual = document.querySelector('.ativo');
        // Define o próximo passo com base no valor do atributo data-proximo do botão
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a classe 'ativo' do passo atual
        atual.classList.remove('ativo');
        // Adiciona a classe 'ativo' ao próximo passo
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});

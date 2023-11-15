function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifique o nome de usuário e a senha (isso é apenas um exemplo simples)
    if (username === 'admin' && password === 'senhaAdmin') {
        window.location.href = '/paginas/adminDashboard.html'; // Redireciona para o painel de administração
    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
}

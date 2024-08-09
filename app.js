document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginLink = document.getElementById('login-link');
    const userInfo = document.getElementById('user-info');
    const userNameDisplay = document.getElementById('user-name-display');
    const userBalanceDisplay = document.getElementById('user-balance-display');
    const userSection = document.getElementById('user-section');
    const loginSection = document.getElementById('login-section');
    const logoutLink = document.getElementById('logout-link');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simulação de login bem-sucedido
        const userName = 'Usuário';  // Substitua com o nome do usuário real
        const userBalance = 'R$1000';  // Substitua com o saldo real

        // Ocultar o formulário de login e mostrar as informações do usuário
        loginSection.classList.add('d-none');
        userSection.classList.remove('d-none');
        loginLink.classList.add('d-none');
        userInfo.classList.remove('d-none');

        // Atualizar informações do usuário
        userNameDisplay.textContent = userName;
        userBalanceDisplay.textContent = userBalance;
    });

    logoutLink.addEventListener('click', (event) => {
        event.preventDefault();

        // Ocultar informações do usuário e mostrar o formulário de login
        userSection.classList.add('d-none');
        loginSection.classList.remove('d-none');
        loginLink.classList.remove('d-none');
        userInfo.classList.add('d-none');
    });
});

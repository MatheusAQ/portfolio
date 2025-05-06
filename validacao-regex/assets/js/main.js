const form = document.getElementById('valida-form');

const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const inputs = [
    { id: 'nome', regex: regexNome, msgId: 'nome-msg' },
    { id: 'email', regex: regexEmail, msgId: 'email-msg' },
    { id: 'cpf', regex: regexCPF, msgId: 'cpf-msg' },
];

form.addEventListener('submit', e => {
    e.preventDefault();

    let allValid = true;

    inputs.forEach(({ id, regex, msgId }) => {
        const input = document.getElementById(id);
        const message = document.getElementById(msgId);
        const isValid = regex.test(input.value.trim());

        input.className = isValid ? 'valid' : 'invalid';
        message.textContent = isValid ? 'Válido ✅' : 'Inválido ❌';
        message.className = `message ${isValid ? 'valid-msg' : 'invalid-msg'}`;

        if (!isValid) {
            allValid = false;
        }
    });

    if (allValid) {
        alert('Todos os dados estão válidos! ✅');
    }
});
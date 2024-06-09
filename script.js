document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    let cpf = document.getElementById('cpf').value.replace(/\D/g, ''); // Remove tudo que não é dígito
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const status = "Agendada";  // Status inicial de consulta agendada

    // Formatar o CPF para adicionar as pontuações
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    const appointment = {
        name: name,
        cpf: cpf,
        email: email,
        date: date,
        time: time,
        status: status
    };

    // Exibir mensagem de confirmação
    const confirmationMessage = `Consulta agendada com sucesso para ${name} (${cpf}), no dia ${date}, às ${time}.`;
    alert(confirmationMessage);

    // Limpar formulário após o envio
    document.getElementById('appointment-form').reset();
});

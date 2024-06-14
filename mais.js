$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#form').validate({
        messages: {
            nome: "Por favor, insira seu nome completo",
            email: "Por favor, insira um e-mail válido",
            telefone: "Por favor, insira um telefone válido",
            cpf: "Por favor, insira um CPF válido",
            endereco: "Por favor, insira seu endereço completo",
            cep: "Por favor, insira um CEP válido"
        }
    });
});
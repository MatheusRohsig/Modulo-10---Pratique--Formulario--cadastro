$(document).ready(function() {

    $('.menu-hamburguer').click(function() {
        $('form').slideToggle();
    })


    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');


    $('form').validate ({
        rules: {
            nome: {
                required: true
        },
    
            email: {
                required: true,
                email: true
            },

            cpf: {
                required: true
            },

            cep: {
                required: true
            },

            endereco: {
                required: true
            },

            telefone: {
                required: true
            },
    },
    
    messages: {
        nome: 'Por favor insira seu nome!'
    },

    

})




})
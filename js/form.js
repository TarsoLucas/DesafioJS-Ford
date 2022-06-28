//class contato

class contato  { 
    constructor(nome, cpf, email, telefone, contato, mensagem) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.tipo_contato = tipo_contato;
        this.mensagem = mensagem;
        this.contato = contato;
    }
}

function Post(form) {
    let data = new contato(form.elements.namedItem("nome").value,
                           form.elements.namedItem("cpf").value, 
                           form.elements.namedItem("email").value, 
                           form.elements.namedItem("telefone").value, 
                           form.elements.namedItem("tipo_contato").value,
                           form.elements.namedItem("mensagem").value,
                           form.elements.namedItem("contato").value);
}

function Enviar() {
    var nome = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}
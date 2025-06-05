
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if ( document.getElementByID("nome").value != ""  && document.getElementByID("email").value != "" && document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por e-mail.")
    }
    else {
        alert("Por favor, preencha os campos Nome, E-mail e Telefone!")
    }
}


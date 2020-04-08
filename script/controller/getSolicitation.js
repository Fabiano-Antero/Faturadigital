function keyNull() {

    let keyApi = keyParam.chave

    if (keyApi === null || keyApi === undefined ) {
        
        
        document.getElementById('icon').className = "erros";
        document.getElementById('tituloC').innerHTML = "404";
        document.getElementById('tituloC').className = "notfound-title";
        document.getElementById('notfound').innerHTML = "  Oops! Página não encontrada";
        document.getElementById('notfound').className = "notfound"
        
    }else{
        getApiSolicitation();
    }
}

console.log( keyParam.chave);
function getApiSolicitation() {


    const url = host + keyParam.chave;

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

 

    xhttp.onreadystatechange = function () {//Função a ser chamada quando a requisição retornar do servidor
        if (xhttp.readyState == 4 && xhttp.status == 200) {//Verifica se o retorno do servidor deu certo
            const objeto = xhttp.responseText ;
            const resposta = JSON.parse(objeto)
            
            document.getElementById('tituloC').innerHTML = ("Operação realizada com sucesso!"); // essa resposta pode ser tratada em uma dive, ou pode nem aparecer.
            document.getElementById('protocolo').innerHTML = ("Esse é seu protocolo: " + resposta.protocolo);
            document.getElementById('mensagem').innerHTML = ("A partir de agora você receberá as faturas através do email informado. Lembre-se de colocar o nosso com email " + emailFatura +" na sua lista de contatos."); // essa resposta pode ser tratada em uma dive, ou pode nem aparecer.
            // no html deve ser chamada a função requisicaoApiEnergisa com o evento 'onclick' -> requisicaoApiEnergisa();

        }
        else if (xhttp.status == 412) {
            const resposta = xhttp.responseText;
            
            document.getElementById('protocolo').style.display = "none";
            document.getElementById('icon').className = "checkN";
            document.getElementById('tituloC').className = "tituloConteudo2";
            document.getElementById('tituloC').innerHTML = ("Ocorreu um erro na verificação!"); // essa resposta pode ser tratada em uma dive, ou pode nem aparecer.
            document.getElementById('mensagem').innerHTML = ("Caso esteja com problemas para solicitar o envio da fatura digital, por favor entre em contato conosco. Estaremos prontos para ajudar você.");


        }


        else if (xhttp.status == 400 || xhttp.status == 401 || xhttp.status == 403) {

            document.getElementById('erro412').innerHTML = " Ocorreu um erro em sua solicitação, tente novamente.";
        }
        else if (xhttp.status == 500) {
            document.getElementById('erro412').innerHTML = "Ocorreu um erro inesperado, tente nomante em breve.";
        }

    }
    xhttp.send(); // a execução do script para aqui até o servidor responder 

}



keyNull();


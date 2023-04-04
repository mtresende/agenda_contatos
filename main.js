const form = document.getElementById('form-contato');
const nome = [];
const numero = [];

let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if (nome.includes(nomeContato.value)){
        document.querySelector('.error-nome').style.display = 'block'
        document.querySelector('.error-numero').style.display = 'none'

    } else if (numero.includes(numeroContato.value)) {
        document.querySelector('.error-numero').style.display = 'block'
        document.querySelector('.error-nome').style.display = 'none'

    } else{
        nome.push(nomeContato.value);
        numero.push(numeroContato.value);

        let linha = `<tr>`;
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `<tr>`;

        linhas += linha;

        document.querySelector('.error-numero').style.display = 'none'
        document.querySelector('.error-nome').style.display = 'none'
    }
    
}

function atualizaTabela(){
    const corpoTabla = document.querySelector('tbody');
    corpoTabla.innerHTML = linhas;
}
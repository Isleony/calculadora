const form = document.getElementById('form-atividade');
const imgAprovado = '<img scr="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img scr="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class= "resultado aprovado"> Aprovado</span>';
const spanReprovado = '<span class= "resultado reprovado"> Reprovado</span>';
const notMinima = parseFloat(prompt("Digite anota miníma:"));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert('A atividade: ${inputNomeAtividade.value} já foi incluida');
    } else {

        atividades.push(imputNomeAtividade.value);
        notas.push(parseFloat.imputNotatividade.value);

        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFina();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notMinima ? spanAprovado : spanReprovado;


}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; 1 < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return media = somaDasNotas / notas.length;

}
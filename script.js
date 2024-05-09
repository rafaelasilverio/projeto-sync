const form = document.getElementById('form-atualizar');
const nomeInput = document.getElementById('nome-input');
const idadeInput = document.getElementById('idade-input');
const ruaInput = document.getElementById('rua-input');
const bairroInput = document.getElementById('bairro-input');
const estadoInput = document.getElementById('estado-input');
const biografiaInput = document.getElementById('biografia-input');
const nomeElement = document.getElementById('nome');
const idadeElement = document.getElementById('idade');
const enderecoElement = document.getElementById('endereco');
const biografiaElement = document.getElementById('biografia');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const rua = ruaInput.value;
    const bairro = bairroInput.value;
    const estado = estadoInput.options[estadoInput.selectedIndex].value;
    const biografia = biografiaInput.value;

    nomeElement.textContent = nome;
    idadeElement.textContent = `Idade: ${idade}`;
    enderecoElement.textContent = `Endereço: ${rua}, ${bairro}, ${estado}.`;
    biografiaElement.textContent = biografia;
});
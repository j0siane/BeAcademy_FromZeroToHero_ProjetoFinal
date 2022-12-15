// ----------MENU----------------
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click',() => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// ----------Title efect---------------
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(() => elemento.innerHTML += letra, 75 * i);

    });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);

// -----------Button CEP-----------

const myButton = document.querySelector('.my-button')
const getCep = document.querySelector('.get-cep')


myButton.addEventListener('click', () => {
    let value = getCep.value
    getAdress(value)
})

async function getAdress(cep){
    try{
        let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let data = await response.json()
        const rua = document.querySelector(".rua")
        const bairro = document.querySelector(".bairro")
        const cidade = document.querySelector(".cidade")
        const estado = document.querySelector(".estado")
        rua.value = data.logradouro
        bairro.value = data.bairro
        cidade.value = data.localidade
        estado.value = data.uf
    } catch(error){
        // throw new Error('Houve algum erro na requisição')
        alert('Endereço não encontrado!')
    }

}


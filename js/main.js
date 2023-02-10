// ACCEDI A LOS BOTONES, A LA NOTA Y AL FORMULARIO.

let buttom = document.querySelector('#result');
let note   = document.querySelector('#note');
let delite = document.querySelector('#delite');
let form   = document.querySelector('#form');

// ------RESULTADO AL CLICK
const result = () => {

    let oneNote = parseInt(document.querySelector('#one').value);
    let twoNote = parseInt(document.querySelector('#two').value);
    let treeNote = parseInt(document.querySelector('#tree').value);
    let fourNote = parseInt(document.querySelector('#four').value);

    const finalResult = (oneNote + twoNote + treeNote + fourNote) / 4 || 'Nota Indefinida';

    note.value = finalResult;
    note.classList.add('active');
    delite.classList.add('active');
}

buttom.addEventListener('click', result)

// ELIMINAR RESULTADO

const eliminate = () => {
    note.classList.remove('active');
    delite.classList.remove('active');
    form.reset();
};

delite.addEventListener('click', eliminate)

// PREVENIR ERRORES DE RECARGA

form.addEventListener('submit', function(event){
    event.preventDefault();
});



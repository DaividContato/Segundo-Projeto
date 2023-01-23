/*
const element = document.querySelector('h1')

element.innerHTML= "Hello World <i> My paragraph </i>" 

*/


// com o innerhtml ele adiciona um paragrafo , pode colocar italico, strong, etc..


// podemos tambem trocar os estilos no nosso JS ex: body, color vejamos a seguir


/*
const element = document.querySelector('body')

element.style.backgroundColor = 'red'

*/

//EVENTOS----> percorrendo os eventos 

const element = document.querySelector('input')

element.onkeypress = (event) => {
    console.log(event.target.value)

}

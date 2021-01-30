window.addEventListener('load', function () {

    const foto = document.querySelector('.foto1');
    const nombre = document.querySelector('.nombre');
    const ataque = document.querySelector('.ataque');
    const ataqEsp = document.querySelector('.ataqueEsp');
    const defensa = document.querySelector('.defensa');
    const boton = document.querySelector('.bot');
    const buscador = document.querySelector('.form-control')

 

    const fetchData = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            const pokemon = {
                nombre: data.name,
                foto: data.sprites.other.dream_world.front_default,
                vida: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat
            }

            foto.setAttribute('src', pokemon.foto);
            nombre.innerHTML = `${pokemon.nombre} <span>${pokemon.vida} HP<span>`;
            ataque.innerHTML = `<h2>${pokemon.attack}</h2> <h3>Ataque</h3>`;
            ataqEsp.innerHTML = `<h2>${pokemon.especial}</h2> <h3>Ataque Especial</h3>`;
            defensa.innerHTML = `<h2>${pokemon.defensa}</h2> <h3>Defensa</h3>`;

        } catch(error){
            console.log(error)
        }
 }
 

 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const random = getRandomInt(1, 151)
 fetchData(random)


 boton.addEventListener('click', function(){

        fetchData(getRandomInt(1,151))
        
 })
 

buscador.addEventListener('change', function(){
    fetchData(buscador.value)
})



})
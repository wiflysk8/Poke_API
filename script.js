const pokemons = [];
const gallery$$ = document.querySelector(".gallery");

const getPokemons = async () => {
  //Crear pokemons
  if (pokemons.length === 0) {
    for (let i = 1; i <= 151; i++) {
      const baseDatos = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const rawPokemons = await fetch(baseDatos);
      const formattedPokemons = await rawPokemons.json();
      pokemons.push(formattedPokemons);
    }
  }
  printPokemons(pokemons);
};

const printPokemons = (pokemons) => {
  //funcion para pintar los pokemons
  gallery$$.innerHTML = '';
  for (let pokemon of pokemons) {
    if(pokemon.name.toLowerCase().includes(input$$.value.toLowerCase()) ||  pokemon.types[0].type.name.toLowerCase().includes(input$$.value.toLowerCase())){
    const figure$$ = document.createElement("figure");
    const titulo$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const stats$$ = document.createElement("div");
    const type$$ = document.createElement("span");
    const height$$ = document.createElement("span");
    const weight$$ = document.createElement("span");

    titulo$$.textContent = pokemon.name.toUpperCase();
    image$$.src = pokemon.sprites.other.home.front_default;
    type$$.textContent = "Type: " + pokemon.types[0].type.name;
    height$$.textContent = "Height: " + pokemon.height * 10 + "cm";
    weight$$.textContent = "Weight: " + pokemon.weight / 10 + "kg";

    switch (pokemon.types[0].type.name) {
      case 'water':
      figure$$.className = 'water';
      break;
      case 'fire':
      figure$$.className = 'fire';
      break;
      case 'grass':
      figure$$.className = 'grass';
      break;
      case 'bug':
      figure$$.className = 'bug';
      break;
      case 'poison':
      figure$$.className = 'poison';
      break;
      case 'electric':
      figure$$.className = 'electric';
      break;
      case 'fighting':
      figure$$.className = 'fighting';
      break;
      case 'psychic':
      figure$$.className = 'psychic';
      break;
      case 'fairy':
      figure$$.className = 'fairy';
      break;
      case 'rock':
      figure$$.className = 'rock';
      break;
      case 'ground':
      figure$$.className = 'ground';
      break;
      case 'normal':
      figure$$.className = 'normal';
      break;
      case 'ghost':
      figure$$.className = 'ghost';
      break;
      case 'ice':
      figure$$.className = 'ice';
      break;
      case 'dragon':
      figure$$.className = 'dragon';
      break;
    }

    figure$$.appendChild(titulo$$);
    figure$$.appendChild(image$$);
    stats$$.appendChild(type$$);
    stats$$.appendChild(height$$);
    stats$$.appendChild(weight$$);
    figure$$.appendChild(stats$$);
    gallery$$.appendChild(figure$$);
  }
}console.log(input$$.value);
};

const input$$ = document.querySelector('input');
input$$.addEventListener('input', () => printPokemons(pokemons))
console.log(input$$.value);



getPokemons();


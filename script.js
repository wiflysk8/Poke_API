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
  gallery$$.innerHTML = "";
  for (let pokemon of pokemons) {
    if (
      pokemon.name.toLowerCase().includes(input$$.value.toLowerCase()) ||
      pokemon.types[0].type.name
        .toLowerCase()
        .includes(input$$.value.toLowerCase())
    ) {
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
        case "water":
          figure$$.className = "b-card b-card__water";
          break;
        case "fire":
          figure$$.className = "b-card b-card__fire";
          break;
        case "grass":
          figure$$.className = "b-card b-card__grass";
          break;
        case "bug":
          figure$$.className = "b-card b-card__bug";
          break;
        case "poison":
          figure$$.className = "b-card b-card__poison";
          break;
        case "electric":
          figure$$.className = "b-card b-card__electric";
          break;
        case "fighting":
          figure$$.className = "b-card b-card__fighting";
          break;
        case "psychic":
          figure$$.className = "b-card b-card__psychic";
          break;
        case "fairy":
          figure$$.className = "b-card b-card__fairy";
          break;
        case "rock":
          figure$$.className = "b-card b-card__rock";
          break;
        case "ground":
          figure$$.className = "b-card b-card__ground";
          break;
        case "normal":
          figure$$.className = "b-card b-card__normal";
          break;
        case "ghost":
          figure$$.className = "b-card b-card__ghost";
          break;
        case "ice":
          figure$$.className = "b-card b-card__ice";
          break;
        case "dragon":
          figure$$.className = "b-card b-card__dragon";
          break;
      }

      figure$$.appendChild(titulo$$);
      figure$$.appendChild(image$$);
      stats$$.appendChild(type$$);
      stats$$.appendChild(height$$);
      stats$$.appendChild(weight$$);
      figure$$.appendChild(stats$$);
      gallery$$.appendChild(figure$$);

      image$$.addEventListener("click", () => pokemonDetail(pokemon));
    }
  }
  console.log(input$$.value);
};

const input$$ = document.querySelector("input");
input$$.addEventListener("input", () => printPokemons(pokemons));
console.log(input$$.value);

const pokemonDetail = (pokemon) => {
  gallery$$.innerHTML = "";

  const figure$$ = document.createElement("figure");
  figure$$.className = ('b-card');
  const h2Div$$ = document.createElement('div');
  h2Div$$.className = ('b-card-title')
  const titulo$$ = document.createElement("h2");
  const image$$ = document.createElement("img");
  const stats$$ = document.createElement("div");
  const type$$ = document.createElement("span");
  const height$$ = document.createElement("span");
  const weight$$ = document.createElement("span");
  const move$$ = document.createElement("span");
  const baseXP$$ = document.createElement("span");
 
  

  titulo$$.textContent = pokemon.name.toUpperCase();
  image$$.src = pokemon.sprites.other.dream_world.front_default;
  type$$.textContent = "Type: " + pokemon.types[0].type.name;
  height$$.textContent = "Ability: " + pokemon.abilities[0].ability.name;
  weight$$.textContent = "Move: " + pokemon.moves[0].move.name;
  move$$.textContent = "Move 1: " + pokemon.moves[1].move.name;
  baseXP$$.textContent = "Base XP: " + pokemon.base_experience;

  h2Div$$.appendChild(titulo$$);
  figure$$.appendChild(h2Div$$);
  figure$$.appendChild(image$$);
  stats$$.appendChild(type$$);
  stats$$.appendChild(height$$);
  stats$$.appendChild(weight$$);
  stats$$.append(move$$);
  stats$$.appendChild(baseXP$$);
  figure$$.appendChild(stats$$);
  
  const backBtn$$ = document.createElement('button');
  backBtn$$.className = ('b-btn-back')
  backBtn$$.textContent = "Go Back";
  backBtn$$.addEventListener("click", function (event) {
    location.reload();
  });

  figure$$.appendChild(backBtn$$);
  gallery$$.appendChild(figure$$);

  switch (pokemon.types[0].type.name) {
    case "water":
      figure$$.className = "b-card-detail b-card-detail__water";
      break;
    case "fire":
      figure$$.className = "b-card-detail b-card-detail__fire";
      break;
    case "grass":
      figure$$.className = "b-card-detail b-card-detail__grass";
      break;
    case "bug":
      figure$$.className = "b-card-detail b-card-detail__bug";
      break;
    case "poison":
      figure$$.className = "b-card-detail b-card-detail__poison";
      break;
    case "electric":
      figure$$.className = "b-card-detail b-card-detail__electric";
      break;
    case "fighting":
      figure$$.className = "b-card-detail b-card-detail__fighting";
      break;
    case "psychic":
      figure$$.className = "b-card-detail b-card-detail__psychic";
      break;
    case "fairy":
      figure$$.className = "b-card-detail b-card-detail__fairy";
      break;
    case "rock":
      figure$$.className = "b-card-detail b-card-detail__rock";
      break;
    case "ground":
      figure$$.className = "b-card-detail b-card-detail__ground";
      break;
    case "normal":
      figure$$.className = "b-card-detail b-card-detail__normal";
      break;
    case "ghost":
      figure$$.className = "b-card-detail b-card-detail__ghost";
      break;
    case "ice":
      figure$$.className = "b-card-detail b-card-detail__ice";
      break;
    case "dragon":
      figure$$.className = "b-card-detail b-card-detail__dragon";
      break;
  }

  console.log(pokemon.name);
};

getPokemons();

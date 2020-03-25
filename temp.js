var pokemon = 
[
    {
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": ["Grass","Poison"],
      "height": "0.71 m",
      "weight": "6.9 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 25,
      "egg": "2 km",
      "spawn_chance": 0.69,
      "avg_spawns": 69,
      "spawn_time": "20:00",
      "multipliers": [1.58],
      "weaknesses": ["Fire","Ice","Flying","Psychic"],
      "next_evolution": [{"num": "002","name": "Ivysaur" }, {"num": "003","name": "Venusaur"}]
    }, 
    {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
      "type": ["Grass","Poison"],
      "height": "0.99 m",
      "weight": "13.0 kg",
      "candy": "Bulbasaur Candy",
      "candy_count": 100,
      "egg": "Not in Eggs",
      "spawn_chance": 0.042,
      "avg_spawns": 4.2,
      "spawn_time": "07:00",
      "multipliers": [ 1.2,1.6],
      "weaknesses": ["Fire","Ice","Flying","Psychic"],
      "prev_evolution": [{"num": "001","name": "Bulbasaur"}],
      "next_evolution": [{"num": "003","name": "Venusaur"}]
    }, 
    {
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
      "type": ["Grass","Poison"],
      "height": "2.01 m",
      "weight": "100.0 kg",
      "candy": "Bulbasaur Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.017,
      "avg_spawns": 1.7,
      "spawn_time": "11:30",
      "multipliers": null,
      "weaknesses": ["Fire","Ice","Flying","Psychic" ],
      "prev_evolution": [{ "num": "001","name": "Bulbasaur"}, {"num": "002","name": "Ivysaur"}]
    },
    {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": ["Fire"],
        "height": "0.61 m",
        "weight": "8.5 kg",
        "candy": "Charmander Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.253,
        "avg_spawns": 25.3,
        "spawn_time": "08:45",
        "multipliers": [1.65],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ],
        "next_evolution": [{"num": "005","name": "Charmeleon"}, { "num": "006","name": "Charizard"}]
        }, 
        {
        "id": 5,
        "num": "005",
        "name": "Charmeleon",
        "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
          "Fire"
        ],
        "height": "1.09 m",
        "weight": "19.0 kg",
        "candy": "Charmander Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.012,
        "avg_spawns": 1.2,
        "spawn_time": "19:00",
        "multipliers": [1.79],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ],
        "prev_evolution": [{
          "num": "004",
          "name": "Charmander"
        }],
        "next_evolution": [{"num": "006","name": "Charizard"}]
        }, 
        {
        "id": 6,
        "num": "006",
        "name": "Charizard",
        "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
        "type": [
          "Fire",
          "Flying"
        ],
        "height": "1.70 m",
        "weight": "90.5 kg",
        "candy": "Charmander Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0031,
        "avg_spawns": 0.31,
        "spawn_time": "13:34",
        "multipliers": null,
        "weaknesses": [
          "Water",
          "Electric",
          "Rock"
        ],
        "prev_evolution": [{
          "num": "004",
          "name": "Charmander"
        }, {
          "num": "005",
          "name": "Charmeleon"
        }]
      }
]

// var checkNextEvolution = function(nameCheck, allPokemon){
i=0; k=0; m=0; p=0;
var pokemonSearch = window.prompt('Write next evolution name that you want to know which pokemon contains:')
for(i=0;i<pokemon.length;i++){
  if("next_evolution" in pokemon[i]){
    for(j=0;j<pokemon[i].next_evolution.length;j++){
      if(pokemonSearch == pokemon[i].next_evolution[j].name)
      {
        m++;
        console.log("Pokemon Name:", m , pokemon[i].name)
      }
      // console.log(i, j)   
    }
  }
  // else{
  //   i++
  // }
}   
// }


// checkNextEvolution(pokemonSearch, pokemon)
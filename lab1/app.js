function getUserInput() {
    let userInput = document.getElementById("inputPokemon")
    let response = await fetch('https://pokeapi.co/api/v2/ability/${name}/')
    console.log("User input:", userInput);
    
}

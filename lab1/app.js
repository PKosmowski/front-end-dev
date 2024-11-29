// function getUserInput() {
//     let userInput = document.getElementById("inputPokemon")
//     let userInputValue = userInput.value
//     let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     let responseValue = response.value
//     console.log(userInputValue);
    
//     document.getElementById("searchedPokemon").innerHTML = responseValue
// }

// let pokemon_list = [];
// const container = document.getElementById("container");

// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         } else {
//             throw new Error("Nie znaleziono.")
//         }
//     })
//     .then(data => {
//         pokemon_list = data.message;
//         for (pokemon in pokemon_list) {
//             let li = document.createElement("li")
//             let node = document.createTextNode(pokemon)
//             li.appendChild(node)
//             container.appendChild(li)
//         }
//     })

// function getUserInput() {
    // let pokemon_list = [];
    // const container = document.getElementById("container");
    
    // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json()
    //         } else {
    //             throw new Error("Nie znaleziono.")
    //         }
    //     })
    //     .then(data => {
    //         pokemon_list = data.message;
    //         for (pokemon in pokemon_list) {
    //             let li = document.createElement("li")
    //             let node = document.createTextNode(pokemon)
    //             li.appendChild(node)
    //             container.appendChild(li)
    //         }
    //     })


const container = document.getElementById("container")

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        if (response.ok) {
            return response.json()             
        } else {
            throw new Error("Not working!")
        }
    })
    .then((data) => {
        pokemon_list = data.results
        
        for (pokemon in pokemon_list) {
            let li = document.createElement("li")
            let node = document.createTextNode(data.results[pokemon].name +  ` id${pokemon}`)
            li.appendChild(node)
            container.appendChild(li)
            
        }

        
    })
    
// }

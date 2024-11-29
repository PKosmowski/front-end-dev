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
            let node = document.createTextNode(data.results[pokemon].name + `, numer: ${pokemon}`)
            

            fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[pokemon].name}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then(data => {
                    let img = document.createElement("IMG")
                    
                    const imgSRC = data.sprites.front_default
                    img.src = imgSRC
                    img.width = 300
                    img.height = 300
                    img.onclick = () => {
                        let types_list = data.types
                        let typesArr = [];

                        for (typeName in types_list) {
                            typesArr += `${data.types[typeName].type.name}, `          
                        }
                        

                        let nodeTypes = document.createTextNode(`typ: ${typesArr}`)
                        // let nodeHP = document.createTextNode(`HP: ${data.stats[0]}`)




                        li.appendChild(nodeTypes)
                        // li.appendChild(nodeHP)
                    }
                        
                    li.appendChild(img)

                    
                })


            li.appendChild(node)

            container.appendChild(li)



            
            // console.log(data.results[pokemon].sprites);
            // console.log(data.sprites.front_default);
            
            
            
        }

        
    })
    

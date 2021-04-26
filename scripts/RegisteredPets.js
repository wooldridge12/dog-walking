import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pet")) {
//             const [, petId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if (pet.id === parseInt(petId)) {
//                     const petWalker = walkers.filter(
//                         (walker) => {
//                             if (walker.petId === pet.id) {
//                                 return true
//                             }
//                         }
//                     )
//                     window.alert(` ${pet.name} is being walked by ${petWalker.length}`)
//                 }
//             }
//         }
//     }
// )

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    
                    let assignedWalker = {name: ""};

                    for (const walker of walkers) {
                        if (walker.id === parseInt(walker.id)) {
                            
                        }
                    }
                    window.alert(`${pet.name} is being walked by ${assignedWalker.name}`)
                }
            }
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()




document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("pet")) {
            const [, petId] = clickEvent.target.id.split("--")
            const petIdNumber = parseInt(petId)

            const walkers = getWalkers()
            const pets = getPets()

            const foundPet = pets.find(
                (pet) => {
                    return pet.id === petIdNumber
                }
            )

            const foundWalker = walkers.find(
                (walker) => {
                    return walker.id === foundPet.walkerId
                }
            ) 

            window.alert(`${foundPet.name} is being walked by ${foundWalker.name}`)
        }
    }
)









    // intial attempt

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pet")) {
//             const [, petId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if (pet.id === parseInt(petId)) {
//                     // let assignedWalker = {name:" "}
                    

//                     for (const walker of walkers) {
//                         if (walker.id === parseInt(walkerId)) {

                            
//                             window.alert(`${pet.name} is being walked by ${walker.name}`)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// )



    //Filter method

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pet")) {
//             const[, petId] = itemClicked.id.split("--")

//             for (const pet of pets) {
//                 if (Pet.id === parseInt(petId)) {
//                     const walkingWhom = walkers.filter(
//                         (walker) => {
//                             if(walker.petId === pet.id) {
//                                 return true
//                             }
//                         }
//                     )
//                     window.alert(`${pet.name} is being walked by ${walkingWhom}`)
//                 }
//             }
//         }
//     }
// )




export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }
    // for (const walker of walkers) {
    //     petHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    // }


    petHTML += "</ul>"
    return petHTML
}


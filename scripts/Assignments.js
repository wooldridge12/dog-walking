import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}
const findCity = (pet, allCities) => {
    let petCity = null

    for (const city of cities) {
        if (city.id === pet.cityId) {
            petCity = city
        }
    }

    return petCity
}

export const Assignments = () => {
    let assignmentHTML = ""
     assignmentHTML = "<ul>"


    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentCity = findCity(currentPetWalker, cities)
    // for (const city of cities) {
        // assignmentHTML += `<li>${city.name}</li>`
    // }
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}
// }
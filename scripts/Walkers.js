import { getWalkers, getCities} from "./database.js"

const walkers = getWalkers()
const cities = getCities()


document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("walker")) {
            const [, walkerId] = clickEvent.target.id.split("--")
            const walkerIdNumber = parseInt(walkerId)
        
            
            const walkers = getWalkers()
            const cities = getCities()
            
            const walkerName = walkers.find(
                (walker) => {
                    return walker.id === walkerIdNumber
                }
                )
            const cityName = cities.find(
                (city) => {
                    return city.id === walkerName.cityId
                }
            )
            window.alert(`${walkerName.name} services ${cityName.name}`)
        }
    }
)






            //Old code
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("walker")) {
//             const [,walkerId] = itemClicked.id.split("--")

//             for (const walker of walkers) {
//                 if (walker.id === parseInt(walkerId)) {
//                     window.alert(`${walker.name} services ${walker.city}`)
//                 }
//             }
//         }
//     }
// )



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        // walkerHTML += `<li>${walker.name}</li>`
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}


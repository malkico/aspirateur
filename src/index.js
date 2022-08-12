const {rotation, deplacer, checkDimension} = require("./functions")
const cases = require("../assets/cases.json")

const aspirateur = (dimension, positionInit, instructions) => {
    
    let {orientation} = {...positionInit}
    let coords = {x,y} = {...positionInit}
    for(let i=0; i < instructions.length; i++){
        switch(instructions[i]) {
            case "D" || "G" :
                orientation = rotation(orientation,instructions[i])
                break
            case "A" :
                coords= {...deplacer(coords, orientation)}
                if(!checkDimension(coords,{initX : dimension.x, initY : dimension.y}))
                    throw new Error("Les dimensions de la piéce se sont dépassées !")
                break
        }
    }

    return {...coords,orientation}
}

exports.aspirateur = aspirateur
console.log(aspirateur(cases[0].dimension, cases[0].positionInit, cases[0].instructions))
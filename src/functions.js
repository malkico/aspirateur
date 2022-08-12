
exports.rotation = (orientationInit, pivoter) => {
    const ptsCardinaux = "NESW"
    const indexCardinal = ptsCardinaux.indexOf(orientationInit)

    let newIndexCardinal

    switch(pivoter){
        case "G" : 
            newIndexCardinal = indexCardinal == 0 ? 3 : indexCardinal - 1 
            break
        case "D" : 
            newIndexCardinal = indexCardinal == 3 ? 0 : indexCardinal + 1
            break
        default : 
            throw new Error("Instruction non définie !")
    }

    const newOrientation = ptsCardinaux[newIndexCardinal]
    return newOrientation
}

exports.deplacer = (coords, orientation) => {
    let {x, y} = {...coords}
    switch(orientation){
        case "N" :
            y = y+1
            break
        case "E" :
            x = x+1
            break
        case "S" :
            y = y-1
            break
        case "W" :
            x = x-1
            break
        default : 
            throw new Error("Erreur s'est produit")
    }

    return {x, y}
}

exports.checkDimension = (coords, dimension)=>{ 
    const {x, y} = {...coords}
    const {initX, initY} = {...dimension}
    return x < initX && y < initY && x > 0 && y > 0
}


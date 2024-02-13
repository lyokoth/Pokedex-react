export function RemoveAspas(val) {
    if (val != null) return val.replace(/[\\],/g,"");
} 

export function GetImageById(id) {
    id = id.toString().padStart(3, "0");
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png` // <--- change later cause ik that link dont work
}


const calculaNota = (val) => {
    if (val < 5) {
        return "Deficiente"
    } else if (val < 7) {
        return "Aprobado"
    } else if (val < 10) {
        return "Notable"
    } else if (val === 10) {
        return "Sobresaliente"
    } else {
        return "ERROR"
    }
}

const calculaNotaGuarda = (val) => {
    if (val > 10) return
    if (val < 5) return "Deficiente"
}

function duplicaAntiguo(val) {
    return val * 2
}

const duplicaNuevo = val => val * 2

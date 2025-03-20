let dolar = 5.8

let usdinput = document.querySelector("#usd");
let realinput = document.querySelector("#real");

usdinput.addEventListener("keyup", () => {
    convert("usd-to-real")
}
)

realinput.addEventListener("keyup", () => {
    convert("real-to-usd")
}
)

usdinput.addEventListener("blur", () => {
    usdinput.value = formatCurrency(usdinput.value)
})

realinput.addEventListener("blur", () => {
    realinput.value = formatCurrency(realinput.value)
})

usdinput.value = "1000,00"
convert("usd-to-real")
//funcões

function formatCurrency(value) {
    //ajsutar valor
    let fixedValue = fixValue(value)
    //ultilizar função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }

    let formatter = new Intl.NumberFormat("pt-BR", options)

    return formatter.format(fixedValue)
    //retorna o valorr formataado
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)

    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}
function convert(type) {
    if (type == "usd-to-real") {//ajustar o valor 
        let fixedValue = fixValue(usdinput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)

        realinput.value = formatCurrency(result)
        //mostra no campo de real
    }

    if (type == "real-to-usd") {
        let fixedValue = fixValue(realinput.value)

        let result = fixedValue / dolar

        result = result.toFixed(2)

        usdinput.value = formatCurrency(result)
        // converte o valor
        //mostra no campo de real
    }
};
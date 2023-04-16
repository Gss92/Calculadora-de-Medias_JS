const form = document.getElementById("formulary")
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgDisapproved = '<img src="./images/reprovado.png" alt="Emoji decepcionado">'
const spanApproved = '<span class="result approved">Aprovado</span>'
const spanDisapproved = '<span class="result disapproved">Reprovado</span>'
const minimumAverage = parseFloat(prompt("Digite a média mínima para ser aprovado:"))
const activities = []
const grades = []

let linhas = ""

form.addEventListener("submit", function(e) {
    e.preventDefault()

    addLine()
    updateTable()
    updateAverage()
})

function addLine() {
    const inputActivity = document.getElementById("activityName")
    const inputNote = document.getElementById("activityNote")

    if (activities.includes(inputActivity.value)) {
        alert(`A atividade ${inputActivity.value} já foi inserida`)
    } else {
        activities.push(inputActivity.value)
        grades.push(parseFloat(inputNote.value))

        let linha = "<tr>"
        linha += `<td>${inputActivity.value}</td>`
        linha += `<td>${inputNote.value}</td>`
        linha += `<td>${inputNote.value >= minimumAverage ? imgApproved : imgDisapproved}</td>`
        linha += "</tr>"

        linhas += linha
    }
    
    inputActivity.value = ""
    inputNote.value = ""
}

function updateTable() {
    const bodyTable = document.querySelector("tbody")
    bodyTable.innerHTML = linhas
}

function updateAverage() {
    const average = calculatorAverage()
    
    document.getElementById("averageValue").innerHTML = average
    document.getElementById("averageResult").innerHTML = average >= minimumAverage ? spanApproved : spanDisapproved
}

function calculatorAverage() {
    let calculator = 0

    for (let i = 0; i < grades.length; i++) {
        calculator += grades[i]
    }

    return calculator / grades.length
}
const grigliaHtml = document.getElementById('grid')




document.getElementById('start').addEventListener("click", function () {
    
    let difficulty = document.getElementById("userSel").value
    let numeriBomba = []
    let punteggio = 0

    
    grigliaHtml.innerHTML = ""
    grigliaHtml.style += "border: 2px solid black;"

        
    do {

        let randNum = randomNumber(1, difficulty)
        
        if (!numeriBomba.includes(randNum)) {
        
            numeriBomba.push(randNum)
        }
        
        
    } while (numeriBomba.length <16)

    console.log(numeriBomba)



    for (let i = 0; i < difficulty; i++) {

        let square = document.createElement("div")
        square.classList.add("square")
        switch (difficulty){
            case "81":
                square.classList.add("medium")
                break;
    
            case "49":
                square.classList.add("hard")
                break;
    
            default:
                square.classList.add("easy")
        }
        square.innerHTML = `<span>${ i+1 }</span>`

        square.addEventListener('click', function () {

            if(numeriBomba.includes(parseInt(this.querySelector( "span" ).innerText)))
            {
                this.classList.add("bomb")
                alert(`Hai trovato una bomba! Hai totalizzato ${punteggio} punti.`)
                
                grigliaHtml.style.setProperty("pointer-events", "none")

            } else {
                this.classList.add("active")
                this.style.setProperty("pointer-events", "none")
                punteggio++
                if (punteggio == (difficulty-16)){
                    alert(`Complimenti, hai vinto! Hai totalizzato ${punteggio} punti.`)
                
                    grigliaHtml.style.setProperty("pointer-events", "none")
                }
            } 
        })

        grigliaHtml.append(square)
    }
})

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}



/*Bonus


Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/
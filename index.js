let kontostand = 100;
document.querySelector("#platzhalter").innerHTML = kontostand;
let lost = "du hast leider verloren"
function run(){
    
    let wette = Math.round(Math.random()*5+1);
    
    if(wette == 6){
        
        kontostand += 5;

        document.querySelector("#lost").innerHTML = "Du hast gewonnen!";
    } else{
        kontostand -= 1;
        document.querySelector("#lost").innerHTML = lost;
    }

    document.querySelector("#platzhalter").innerHTML = kontostand;

    if(wette == 1){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one"; 
    } else if(wette == 2){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-two"; 
    } else if(wette == 3){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-three"; 
    } else if(wette == 4){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-four"; 
    } else if(wette == 5){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-five"; 
    } else if(wette == 6){
        document.querySelector(".fa-solid").classList = "fa-solid fa-dice-six"; 
    }
    document.querySelector("#zahl").innerHTML = wette;
    console.log(wette);

}

function revert(){
    kontostand = 100;
    document.querySelector('#platzhalter').innerHTML = kontostand;
    document.querySelector("#lost").innerHTML = "";document.querySelector("#zahl").innerHTML = "";
}


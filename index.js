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

    
    document.querySelector("#zahl").innerHTML = wette;
    console.log(wette);

}

function revert(){
    kontostand = 100;
    document.querySelector('#platzhalter').innerHTML = kontostand;
    document.querySelector("#lost").innerHTML = "";document.querySelector("#zahl").innerHTML = "";
}


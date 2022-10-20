let number = Math.floor(Math.random() * 5) + 1;
let timer1 = 0;
let timer2 = 0;

function ustawSlajd(numerSlajdu) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = numerSlajdu - 1;

    schowaj();
    setTimeout("zmienSlajd()", 500);
}

function schowaj() {
    $("#slider").fadeOut(500);
}

function zmienSlajd() {
    number++;
    if (number > 5) {
        number = 1;
    }

    let plik = "<img src=Images/" + number + ".jpg>";
    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("zmienSlajd()", 5000);
    timer2 = setTimeout("schowaj()", 4500);
}
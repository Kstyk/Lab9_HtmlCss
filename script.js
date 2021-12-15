let btn = document.querySelector("#porownaj");

btn.addEventListener("click", function() {
    let tablica1 = document.querySelector("#tablica1").value;
    let tablica2 = document.querySelector("#tablica2").value;

    var ciag1 = tablica1.split(",");
    var ciag2 = tablica2.split(",");

    var dlugosc1 = tablica1.length;
    var dlugosc2 = tablica2.length;

    

    for (let i = 0; i < dlugosc1; i++) {
        for (let j = 0; j < dlugosc2; j++) {
            if(ciag2[j] == ciag1[i]) {
                ciag1.splice(i,1);
                break;
            }            
        }
    }

    let wypisz = document.querySelector(".wypisz");
    wypisz.innerHTML = "";
    ciag1.forEach(element => {
        wypisz.innerHTML += element + " ";
    });
})
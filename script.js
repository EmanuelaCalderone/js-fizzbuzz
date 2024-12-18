/* Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

 */

//OUTPUT:

/* - Creo un ciclo che iteri i numeri da 1 a 100
- Creo condizione per stampare Fizz solo per i multipli di 3
- Creo condizione per stampare Buzz solo per i multipli di 5
- Creo condizione per stampare FizzBuzz ai multipli sia di 3 che di 5
- In tutti gli altri casi, stampo i numeri normalmente (i) */



for (let i = 1; i <= 100; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }
        
    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}

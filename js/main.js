const boxContainer = document.querySelector(".box-container")
const totalBox = 100;

for (let i = 1; i <= totalBox; i++) {
    let singleBox = document.createElement("div");
    singleBox.classList.add("box", "m-3");
    singleBox.innerHTML = i.toString()

    if ((i % 3 === 0) && (i % 5 === 0)) {
        singleBox.classList.add("bg-red");
        singleBox.innerHTML = (`FizzBuzz`);
    } else if (i % 5 === 0) {
        singleBox.classList.add("bg-gray");
        singleBox.innerHTML = (`Buzz`);
    } else if (i % 3 === 0) {
        singleBox.classList.add("bg-gold");
        singleBox.innerHTML = (`Fizz`);
    }

    boxContainer.append(singleBox);
}


for (let i = 1; i <= 100; i++) {
    console.log(i)
    // per far funzionare questo if ho dovuto bambiare l'ordine di 
    // scrittura e mettere "if ((i % 3 === 0) && (i % 5 === 0))" per 
    // primo e non come avevo pensato inzialmente, cioe` che andasse alla fine

    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    }
}
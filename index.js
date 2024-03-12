 console.log("Hello World.");

function generateRamdomNumber() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if(randomNum >= 5){
        console.log(`Random Number is > = to 5`);
    } else {
        console.log(`Random Number is < = to 5`);
    }
    return console.log(randomNum); 
}
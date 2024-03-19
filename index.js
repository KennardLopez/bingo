 console.log("Hello World.");
 let B = false,
 I = false,
 N = false,
 G = false,
 O = false;
 generateRamdomNumber(100)
 
function generateRamdomNumber(max) {

    let randomNum = Math.floor(Math.random() * max) + 1;


    if(randomNum <= 15) {
        B = true;
        console.log(`Random Number ${randomNum} is in B. 1 - 15`);
        I =true
    } else if (randomNum >= 16 && randomNum<= 30) {
        N = true;
        console.log(`Random Number ${randomNum} is in I. 16 - 30`)
    } else if (randomNum >= 31 && randomNum<= 45) {
        G = true;
        console.log(`Random Number ${randomNum} is in N. 31 - 45`)
    } else if (randomNum >= 46 && randomNum<= 60) {
        O = true;
        console.log(`Random Number ${randomNum} is in G. 46 - 61`)
    } else if (randomNum >= 61 && randomNum<= 75) {
        console.log(`Random Number ${randomNum} is in O. 62 - 75`)
    }   
    if (B == true && I == true && N == true && G == true && O == true) {
        console.log('BINGOOO!!!');
    }

     console.log(`random number is invalid.`); 
}
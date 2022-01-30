//psedocode #3
        //  do... while 
        // do - return a number
        // use parseInt return a value that is a number
        // and also between biggest and smallest nums
        //let guess | placeholder
        //return nan if prompt is NaN

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function() {
    let guess;
    do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }
    while (
      guess <= this.biggestNum || guess >= this.smallestNum);
      return guess
    }
    } 

    console.log(game.getGuess())



//   play: function() {
//     this.secretNum = Math.floor(Math.random() * 
//       (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
//       let theplayersGuess = ""
//       while(theplayersGuess !== this.getGuess){
//         this.prevGuesses.push([])
//         console.log(`Your guess was incorrect. Try again!`)
//       }
//   },
//   weRend: function(){
//     render()
//   if(theplayerGuess === this.getGuess){
//     console.log(`Congrats! You have guessed the number in ${this.prevGuesses.length} guesses!`)
//   } else {
//     console.log(`Your guess is too [high|low]. Your previous guesses are ${this.prevGuesses.join(', ')}.`)
//   }
// }

// game.play()

//high/low
//console log frequently
//prompt the user to enter something (alert)
//render()
//a prompt will return the vaule that tjhe user will type in
//ptompt is equal to var so it can store what the user will put in
// const user age = prompt("how old are you?")

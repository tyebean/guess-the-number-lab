//psedocode #3
        //  do... while 
        // do - return a number
        // use parseInt return a value that is a number
        // and also between biggest and smallest nums
        //let guess | placeholder
        //return nan if prompt is NaN
//peudocode #4
      // the guess will be put into the prevGuesses array if the guess is not equal to secretNum 
      // do (push getGuess into prevGuesses)
      //while getGuess !-- (is not equal to) secretNum
      // invoke game.getGuess() by saying something like: console.log(`${game.getGuess} was not the correct number. guess again!')
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
      isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum);
      console.log(game.getGuess())
    },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.prevGuesses.push(this.getGuess)
          console.log(this.prevGuesses)
      } while (
        this.getGuess !== this.secretNum
      )
      console.log(`The number ${this.getGuess} isn't quite right. Try again!`)
    } 
} 

//   },
//   weRend: function(){
//     render()
//   if(theplayerGuess === this.getGuess){
//     console.log(`Congrats! You have guessed the number in ${this.prevGuesses.length} guesses!`)
//   } else {
//     console.log(`Your guess is too [high|low]. Your previous guesses are ${this.prevGuesses.join(', ')}.`)
//   }
// }

game.play()

//high/low
//console log frequently
//prompt the user to enter something (alert)
//render()
//a prompt will return the vaule that tjhe user will type in
//ptompt is equal to var so it can store what the user will put in
// const user age = prompt("how old are you?")

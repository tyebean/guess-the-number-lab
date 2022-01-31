//adding something here.
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
      isNaN(guess) || guess <= this.biggestNum || guess >= this.smallestNum);
    },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.prevGuesses.push(this.getGuess())
        this.render()
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
      //get explanation about the above while loop?
    },
    highOrLow: function(){
      if (this.getGuess > this.secretNum) {
        return "high"
      } else if (this.getGuess < this.secretNum) {
        return "low"
      }
    },
  render: function(){
    if(this.secretNum === this.getGuess){
      alert(`Congrats! You have guessed the number in ${this.prevGuesses.length} guesses!`)
    } else {
      alert(`Your guess is too ${this.highOrLow}. Your previous guesses are ${this.prevGuesses.join(", ")}.`)
    }
  }
}

game.play()

//still need to
//add high/low
//render()
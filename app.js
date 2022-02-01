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
      guess = parseInt(prompt(`Welcome to ${this.title} Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }
    while ( 
      isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum)

      return guess 
      // looked at solution to find position of return geuss**
    },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum)
      do {
        this.prevGuesses.push(this.getGuess())
        this.render()
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
      //get explanation about the above while loop? **looked at solution for help with line 35**
    },
  render: function(){
    if(this.secretNum === this.prevGuesses[this.prevGuesses.length - 1]){
      alert(`Congrats! You have guessed the number in ${this.prevGuesses.length} guesses!`)
    } else {
      console.log(this.prevGuesses[this.prevGuesses.length - 1])
      this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? alert('your guess is too high') : alert('your guess is too low')
    }
  }
}

game.play()


//lizz suggested a:
//ternary
//different way for an if else sta
//am i true?yes:no
//first thing happens if it is true
//second happens if false

//for high/low
//take note of the index prevGuesses array
//grab -1 index, have access to the last guess

//still need to
//add high/low
//render()
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
      isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum);
      // console.log(game.getGuess())
    },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        this.prevGuesses.push(this.getGuess())
        //looked at solution and saw i was missing () at the end of this.getGuess() :(
          // console.log(this.prevGuesses)
      } //while (this.getGuess !== this.secretNum
        while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) 
      // console.log(`The number ${this.getGuess} isn't quite right. Try again!`)
    },
  wrongOrRight: function(){
  if(this.secretNum === this.getGuess){
    console.log(`Congrats! You have guessed the number in ${this.prevGuesses.length} guesses!`)
  } else {
    console.log(`Your guess is too [high|low]. Your previous guesses are ${this.prevGuesses.join(', ')}.`)
    }
  },
  weRend: function init(){
    //set variables back to starting point
    this.game.biggestNum = 100
    this.game.smallestNum = 1
    this.game.secretNum = null
    this.game.prevGuesses = []
  }
    function acceptInput(){
      //change variables according to user input 
      render()
    }
      function render(){
        //display the origional state of the variables to the user in a meaningful way
      }
  }

game.play()

//high/low
//console log frequently
//render()
//a prompt will return the vaule that tjhe user will type in
//ptompt is equal to var so it can store what the user will put in
// const user age = prompt("how old are you?")

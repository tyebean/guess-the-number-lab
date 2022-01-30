const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: 
  function(num) {
    let parsed = parseInt(num)
    while (num <= this.biggestNum && num >= this.smallestNum){
      return this.getGuess
    } 
    if (num.isNAN(parsed)) {return console.log('That is not a number.')}
    console.log(`Enter a guess between ${smallestNum} and ${biggestNum}.`)
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
  let theplayersGuess = null
  while(theplayersGuess !== getGuess){
    this.prevGuesses.push([])
  },
  weRender: 
  if(playerGuess === getGuess){
    console.log(`Congrats! You have guessed the number in ${prevGuesses.length}` guesses!)
  } else {
    console.log(`Your guess is too [high|low]. Your previous guesses are ${prevGuesses.join(', ')}.`)
  },
}

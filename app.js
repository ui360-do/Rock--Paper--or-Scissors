// Human Choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if ((userInput === 'rock') || (userInput === 'paper') ||(userInput === 'scissors') || (userInput === 'bomb')) {
    return userInput;
    } else {
    console.log('Choose Rock, Paper or Scissors Only');
    }
    };
    // Computer Choice
    const getComputerChoice = () => {
      let num = Math.floor(Math.random() * 2);
      switch (num) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
      }
    }
    //console.log(getComputerChoice());
    // Determine Winner
    const determineWinner = (userChoice, computerChoice) =>{
      if (userChoice === computerChoice) {
        return console.log('Game Ties');
      }
      if (userChoice === 'rock'){
        if (computerChoice === 'paper') {
          return console.log('Computer Wins');
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return console.log('Computer Wins'); 
        }
        if (computerChoice === 'rock') {
          return console.log('User Wins');
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock'){
          return console.log('Computer Wins');
        }
        if (computerChoice === 'paper'){
          return console.log('User Wins');
        }
      }
      if (userChoice === 'bomb'){
        return console.log('User Wins');
      }
    }
    
    function playGame() {
      let userChoice = getUserChoice('BOMB');
      let computerChoice = getComputerChoice();
      console.log(`user choice is ${userChoice}`);
      console.log(`computer choice is ${computerChoice}`);
      determineWinner(userChoice, computerChoice); 
      
    }
    
    playGame();
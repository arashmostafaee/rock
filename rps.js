function computerPlay(){
  const choices= ['rock', 'paper', 'scissors'];
  const getchoice = Math.floor(Math.random() * choices.length)
  return choices[getchoice];

}

function round(playerSelection, computerSelection){
  if (playerSelection == 'rock'){
    if (computerSelection == 'rock'){
      return 'tie, rock equals rock';
    }
    else if (computerSelection == 'paper'){
      computerscore++;
      return 'lose, rock loses to paper';
    } else {
      playerscore++;
      return 'win, rock beats scissors';
    }
  }
  if (playerSelection == 'paper'){
    if (computerSelection == 'rock'){
      playerscore++;
      return 'win, paper beats rock';
    }
    else if (computerSelection == 'paper'){
      return 'tie, paper equals paper';
    } else {
      computerscore++;
      return 'lose, paper loses to scissors';
    }
  }
  if (playerSelection == 'scissors'){
    if (computerSelection == 'rock'){
      computerscore++;
      return 'lose, scissors loses to rock';
    }
    else if (computerSelection == 'paper'){
      playerscore++;
      return 'win, scissors beats paper';
    } else {
      return 'tie, scissors equals scissors';
    }
  }
}
let playerscore = 0;
let computerscore = 0;

function game(playerchoice){
  for (let i = 1; i<6; i++){
    let player = prompt("enter your choice", "rock");
    const computerSelection = computerPlay();
    console.log(round(player, computerSelection))
    console.log("round: ", i);
  }
  console.log("playerscore: ", playerscore);
  console.log("computerscore: ", computerscore);
}
game();

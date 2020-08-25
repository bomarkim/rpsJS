let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

const content = document.createElement('div');
const result = document.createElement('div');
function game(choice)
    {   

        //computer player
        function computerPlay(){
            var textArray = ['rock', 'paper', 'scissors'];
            var randomNumber = Math.floor(Math.random()*textArray.length);
        
            return(textArray[randomNumber]);
        }

        //dom manip
        const scoreboard = document.querySelector('#scoreboard');

        //human player
        function playRound(playerChoice, computerChoice){

            if(playerChoice == computerChoice){
                console.log("Round draw!!");
            }

            else if(playerChoice == 'rock'){
                if(computerChoice == 'scissors'){
                    console.log("Round Win! Rock beats Scissors!")
                    playerScore++;
                }

                else{
                    console.log("Round Lose! Rock loses to Paper!")
                    computerScore++;
                }
            }

            else if(playerChoice == 'scissors'){
                if(computerChoice == 'paper'){
                    console.log("Round Win! Scissors beats Paper!")
                    playerScore++;
                }

                else{
                    console.log("Round Lose! Scissors loses to Rock!")
                    computerScore++;
                }
            }

            else if(playerChoice == 'paper'){
                if(computerChoice == 'rock'){
                    console.log("Round Win! Paper beats Rock!")
                    playerScore++;
                }

                else{
                    console.log("You Lose! Paper loses to Scissors!")
                    computerScore++;
                }
            }

        }

        //selection recieved from other functions
        const computerChoice = computerPlay();
        const playerChoice = choice;

        //play a round
        playRound(playerChoice, computerChoice);

        
        content.classList.add('content');
        content.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
        scoreboard.appendChild(content);

        result.classList.add('result');
        //kill game once score of 5 is reached
        if(playerScore == 5){
            console.log("Human player wins!"); result.textContent = "HUMAN PLAYER WIN - restarting game in 5 secs..."; scoreboard.appendChild(result);
            setTimeout(function () { location.reload(true); }, 5000);
            return 0;
        }

        else if(computerScore == 5){
            console.log("Computer player wins!"); result.textContent = "CPU PLAYER WIN - restarting game in 5 secs..."; scoreboard.appendChild(result);
            setTimeout(function () { location.reload(true); }, 5000);
            return 0;
        }
    }//end game
let playerScore = 0;
let computerScore = 0;
let rounds = 0;



REMOVE THIS LINE OF CODE 




process.stdout.write("Välj sten, sax eller påse (bäst av 3): ");

process.stdin.on('data', function(input) {
    const playerChoice = input.toString().trim().toLowerCase();
    const validChoices = ['sten', 'sax', 'påse'];

    if (!validChoices.includes(playerChoice)) {
        console.log("Ogiltigt val, försök igen.");
        process.exit();
    }

    const computerChoice = getComputerChoice();
    console.log(`Du valde: ${playerChoice}`);
    console.log(`Datorn valde: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);

    if (result === "You won!") {
        playerScore++;
    } else if (result === "You lost. Try again!") {
        computerScore++;
    }

    rounds++;

    if (rounds < 3) {
        process.stdout.write("Välj sten, sax eller påse: ");
    } else {
        console.log("\n--- Match Resultat ---");
        console.log(`Du: ${playerScore} - Datorn: ${computerScore}`);

        if (playerScore > computerScore) {
            console.log("Grattis! Du vann matchen!");
        } else if (playerScore < computerScore) {
            console.log("Datorn vann matchen. Bättre lycka nästa gång!");
        } else {
            console.log("Matchen slutade oavgjort!");
        }

        process.exit();
    }
});

function getComputerChoice() {
    const choices = ['sten', 'sax', 'påse'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'sten' && computerChoice === 'sax') ||
        (playerChoice === 'sax' && computerChoice === 'påse') ||
        (playerChoice === 'påse' && computerChoice === 'sten')
    ) {
        return "You won!";
    } else {
        return "You lost. Try again!";
    }
}

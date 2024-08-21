process.stdout.write("Välj sten, sax eller påse: ");

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

    process.exit();
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

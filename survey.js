const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is you absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you're amazing at ", (answer7) => {
              console.log(`My name is ${answer1}, and I love ${answer2}, while listening to ${answer3}. If I could choose only one type of meal a day for the rest of my life it would be ${answer4}, specifically ${answer5}.My all time favourite sport is ${answer6}, and my superpower is ${answer7}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
  
          

  // TODO: Log the answer in a database
  
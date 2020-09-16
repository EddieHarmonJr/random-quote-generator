/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {quote: "Hey. Don't ever let somebody tell you you can't do something. Not even me. All right? You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period.", source: "-Chris Gardner:", citation: "Pursuit of Happyness", year: 2006},
  {quote: "Get busy living or get busy dying.", source: "-Andy Dufresne", citation: "Shawshank Redemption", year: 1994},
  {quote: "I think it pisses God off when you walk by the color purple in a field and don't notice it.", source: "-Shug Avery", citation: "The Color Purple", year: 1985},
  {quote: "Let me tell you something you already know. The world ain't all sunshine and rainbows. It's a very mean and nasty place and I don't care how tough you are it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain't about how hard ya hit. It's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That's how winning is done!", source: "-Rocky Balboa", citation: "Rocky V", year: 1990},
  {quote: "Bury me in the ocean, with my ancestors that jumped from the ships, because they knew death was better than bondage.", source: "-Killmonger", citation: "Black Panther", year: 2018 },
];

// console.log(quotes);


/***
 * `getRandomQuote` function
***/


// The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  console.log(quotes[randomNumber]);
  return quotes[randomNumber]; //returns random quote OBJECT
}

// getRandomQuote();

/***
 * `printQuote` function
***/


const printQuote = () => {
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote"> ${randomQuote.quote} </p> <p class="source"> ${randomQuote.source} `;

  if ( Object.keys(randomQuote).includes('citation') ) {
    htmlString += `<span class="citation"> ${randomQuote.citation} </span>`;
    // console.log("This object includes a citation value");
  }

  if (Object.keys(randomQuote).includes('year')) {
    htmlString += `<span class="citation"> ${randomQuote.year} </span>`;
    // console.log("This object includes a year value");
  }

  htmlString += `</p>`

  // console.log(`Here Eddie: ${randomQuote.quote}`);
  // console.log(htmlString);

  return document.getElementById('quote-box').innerHTML = htmlString; 
}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
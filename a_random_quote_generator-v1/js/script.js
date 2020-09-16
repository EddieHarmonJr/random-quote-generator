/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Create an array that holds at least 5 objects, which within the object literals themselves contain at least the quote and source of the quote. In addition, the objects may also potentially contain citation and year values as well.

let quotes = [
  {
    quote: "Hey. Don't ever let somebody tell you you can't do something. Not even me. All right? You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period.",
    source: "Chris Gardner:",
    citation: "Pursuit of Happyness",
    year: 2006,
    tags: "#Movies #WillSmith"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Andy Dufresne",
    citation: "Shawshank Redemption",
    year: 1994,
    tags: "#Movies #TimRobbins"
  },
  {
    quote: "I think it pisses God off when you walk by the color purple in a field and don't notice it.",
    source: "Shug Avery",
    citation: "The Color Purple",
    year: 1985,
    tags: "#Movies #MargaretAvery"
  },
  {
    quote: "Let me tell you something you already know. The world ain't all sunshine and rainbows. It's a very mean and nasty place and I don't care how tough you are it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain't about how hard ya hit. It's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That's how winning is done!",
    source: "Rocky Balboa",
    citation: "Rocky V",
    year: 1990,
    tags: "#Movies #SylvesterStallone"
  },
  {
    quote: "Bury me in the ocean, with my ancestors that jumped from the ships, because they knew death was better than bondage.",
    source: "Killmonger",
    citation: "Black Panther",
    year: 2018,
    tags: "#Movies #MichaelBJordan"
  },
];

// console.log(quotes);

// The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  console.log(quotes[randomNumber]);
  return quotes[randomNumber]; //returns random quote OBJECT
}

// getRandomQuote();

// Program the printQuote function to perform three tasks: (1)call the getRandomQuote function, (2)use the returned quote object to build a string of HTML and quote properties, then (3)use that string to display a random quote in the browser.

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote"> ${randomQuote.quote} </p> <p class="source"> ${randomQuote.source} `;

  if (Object.keys(randomQuote).includes('citation')) {
    htmlString += `<span class="citation"> ${randomQuote.citation} </span>`;
    // console.log("This object includes a citation value");
  }

  if (Object.keys(randomQuote).includes('year')) {
    htmlString += `<span class="citation"> ${randomQuote.year} </span>`;
    // console.log("This object includes a year value");
  }

  if (Object.keys(randomQuote).includes('tags')) {
    htmlString += `<span class="tags"> ${randomQuote.tags} </span>`;
    // console.log("This object includes a year value");
  }

  htmlString += `</p>`

  // console.log(`Here Eddie: ${randomQuote.quote}`);
  // console.log(htmlString);

  return document.getElementById('quote-box').innerHTML = htmlString;
}

printQuote();

//Code below will use a function to change the background color of the page with each new quote.
//First, define the button. Then, add an event listener that waits for a click.
//Then, make the function run when button is clicked, which will change the color.

let button = document.getElementById('load-quote');
let hexValues = "0123456789ABCDEF"

const changeColors = () => {
  let randomColor = "";
  for (let i = 0; i < 6; i++) {
    randomColor += hexValues[Math.floor(Math.random() * 16)]
  }
  // console.log(randomColor); Allows me to see what color is being "picked"
document.body.style.backgroundColor = `#${randomColor}`;
}

button.addEventListener("click", changeColors()); //This needed to be added after the function declaration

//The code below will load a new quote each time the "show new quote" button is pressed.

document.getElementById('load-quote').addEventListener("click", printQuote, false);
// let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

newQuote();

// Get Quotes From API
// async function getQuotes() {
//     const API_URL='https://type.fit/api/quotes';

//     try {
//         const response = await fetch(API_URL);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         alert(error);
//     }
// }

// On load
// getQuotes();
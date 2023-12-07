const quotes = [
    {
        quote: "1AAAAAA",
        author: "1JJJJJ",
    },
    {
        quote: "2AAAAAA",
        author: "2JJJJJ",
    },
    {
        quote: "3AAAAAA",
        author: "3JJJJJ",
    },
    {
        quote: "4AAAAAA", 
        author: "4JJJJJ",
    },
    {
        quote: "5AAAAAA",
        author: "5JJJJJ",
    },
    {
        quote: "6AAAAAA",
        author: "6JJJJJ",
    },
    {
        quote: "7AAAAAA",
        author: "7JJJJJ",
    },
    {
        quote: "8AAAAAA",
        author: "8JJJJJ",
    },
    {
        quote: "9AAAAAA",
        author: "9JJJJJ",
    },
    {
        quote: "10AAAAAA",
        author: "10JJJJJ",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


function selectQuote(){
    const quoteCount = quotes.length;
    const randomVlaue = quotes[Math.floor(Math.random() * quoteCount)];
/*     quote.innerText = quotes[randomVlaue].quote;
    author.innerText = quotes[randomVlaue].author; */
    quote.innerText = randomVlaue.quote;
    author.innerText = randomVlaue.author;
}

selectQuote();

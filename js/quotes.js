const quotes = [
    {
        quote: "I just wanted to take another look at you.",
        author: "A star is born",
    },
    {
        quote: "The greatest thing you'll ever learn is just to love and be loved in return.",
        author: "Moulin Rouge",
    },
    {
        quote: "It's only after we've lost everything that we're free to do anything.",
        author: "Fight Club",
    },
    {
        quote: "The past can hurt, but you can either run from it, or learn from it.", 
        author: "Lion King",
    },
    {
        quote: "If we didn't do what we loved, we wouldn't exist.",
        author: "Adonis",
    },
    {
        quote: "At some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you.",
        author: "Moonlight",
    },
    {
        quote: "Every man dies, not every man really lives.",
        author: "Braveheart",
    },
    {
        quote: "Carpe Diem, Seize the day. Make your lives extraordinary.",
        author: "Dead Poets Societ",
    },
    {
        quote: "Being Human is a condition which requires an anesthetic.",
        author: "Bohemian Rhapsody",
    },
    {
        quote: "hope is good thing, maybe the best of things, And no good thing ever dies.",
        author: "The Shawshank Redemption",
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

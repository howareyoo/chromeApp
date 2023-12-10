const quotes = [
    {
        quote: "일하다가 졸리면 몰래 졸면 됩니다.",
        author: "",
    },
    {
        quote: "오늘 저녁은 맛있는거 먹어요.",
        author: "",
    },
    {
        quote: "오늘은 꼭 정시퇴근 하세요.",
        author: "",
    },
    {
        quote: "오늘은 엘리베이터 대신 계단을 이용하세요.", 
        author: "",
    },
    {
        quote: "물 자주 마셔요.",
        author: "",
    },
    {
        quote: "일은 중간만큼 열심히 하면 됩니다.",
        author: "",
    },
    {
        quote: "자이언티 ZIP 앨범 좋아요. 꼭 들어보세요. 특히 4번 트랙 추천 드립니다.",
        author: "",
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

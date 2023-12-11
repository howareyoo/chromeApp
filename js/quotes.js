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
        quote: "사무실에서 물 자주 마셔야합니다.",
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
    {
        quote: "덕배는 귀여워요.",
        author: "",
    },
    {
        quote: "야근은 싫어요.",
        author: "",
    },
    {
        quote: "단순함은 삶의 복잡성을 푸는 열쇠입니다.",
        author: "",
    },
    {
        quote: "과거에 연연하거나 미래를 걱정하지 말고 지금 이 순간에서 기쁨을 찾으세요.",
        author: "",
    },
    {
        quote: "진격의 거인은 명작이니까 다들 보세요.",
        author: "",
    },
    {
        quote: "주말은 돌아옵니다.",
        author: "",
    },
    {
        quote: "남 신경쓰면서 살지 마세요. 나를 위해 사세요.",
        author: "",
    },
    {
        quote: "화장실 참지 마세요.",
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

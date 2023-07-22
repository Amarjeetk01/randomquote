AOS.init();
const quoteUrl="https://type.fit/api/quotes"
let data="";
const text=document.getElementById("quote")
const author=document.getElementById("author")
const clickMe=document.getElementById("newQuote")
const share=document.getElementById("share");

let quotes="";
let authorName="";

function randomCall(){
    AOS.init();
    getQuote()
}
const tweetNow=()=>{
    let tweet = `https://twitter.com/share?text=${encodeURIComponent(quotes)}%20%0Aby:%20${encodeURIComponent(authorName)}`;
    window.open(tweet)
}
async function getQuote() {
    let quotesData = await fetch(quoteUrl);
    data = await quotesData.json();
    var randomNum = Math.floor(Math.random() * data.length);
    quotes=data[randomNum].text;
    authorName=data[randomNum].author;
    authorName===null?authorName="unKnown":authorName
    text.innerHTML = quotes;
    author.innerHTML = authorName;
    
  }
getQuote()
share.onclick=tweetNow;
clickMe.onclick=randomCall;
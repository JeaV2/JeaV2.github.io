const quotes = {
    "quotes": [
        {
            "quote": "Coding like poetry should be short and concise.",
            "author": "Santosh Kalwar"
        },
        {
            "quote": "It’s not a bug; it’s an undocumented feature.",
            "author": "Anonymous"
        },
        {
            "quote": "Software comes from heaven when you have good hardware.",
            "author": "Ken Olsen"
        },
        {
            "quote": "There is always one more bug to fix.",
            "author": "Ellen Ullman"
        },
        {
            "quote": "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
            "author": "Sam Redwine"
        },
        {
            "quote": "Talk is cheap. Show me the code.",
            "author": "Linus Torvalds"
        },
        {
            "quote": "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
            "author": "Dan Salomon"
        },
        {
            "quote": "If, at first, you do not succeed, call it version 1.0.",
            "author": "Khayri R.R. Woulfe"
        },
        {
            "quote": "Computers are fast; developers keep them slow.",
            "author": "Anonymous"
        }
    ]
}

const quote = document.getElementById('quote');

function randomQuote() {
    const i = Math.floor(Math.random() * quotes.quotes.length);
    quote.innerHTML = `"${quotes.quotes[i].quote} <sup>${quotes.quotes[i].author}</sup>"`;
}

randomQuote();
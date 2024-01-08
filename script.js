const quotes = {
    education: [
        { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
        { quote: "The only source of knowledge is experience.", author: "Albert Einstein" },
        { quote: "The more that you read, the more things you will know, the more that you learn, the more places you'll go."},
        { quote: " A simple but powerful reminder of the positive domino effect a good education can have on many aspects of a person's life and outlook"}
    ],
    health: [
        { quote: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
        { quote: "The greatest wealth is health.", author: "Virgil" },
        { quote: "There is hope, even when your brain tells you there isn't."},
        { quote: "I keep moving ahead, as always, knowing deep down inside that I am a good person and that I am worthy of a good life."}
    ],
    random: [
        { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "The greatest glory in living lies not in never failing, but in rising every time we fail."}
    ],
    nature: [
        { quote: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
        { quote: "The clearest way into the Universe is through a forest wilderness.", author: "John Muir" },
        { quote: "In every walk with nature one receives far more than he seeks." ,author: "John Muir" }
    ],
    inspirational: [
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
    ],
    values: [
        { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
        { quote: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson" }
    ],
    motivational: [
        { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
    ]
};

function getQuote(category) {
    const categoryQuotes = quotes[category];
    const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    displayQuote(randomQuote);
}

function getQuote(category) {
    const categoryQuotes = quotes[category];
    const randomQuote = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
    displayQuote(randomQuote);
}

function displayQuote(quote) {
    document.getElementById('quote').textContent = `"${quote.quote}"`;
    document.getElementById('author').textContent = `- ${quote.author}`;
}

// Initial quote display
getQuote('random');

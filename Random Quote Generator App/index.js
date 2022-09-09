var ma_quotes = [
    '"\There is no such thing Jo Apko Nahi Aati\."',
    '"\It is as easy as it seems\."',
    '"\Does that make sense?\"',
    '"\Think on your feet\."',
    '"\Keep your eyes open\."',
    '"\Keep your head on your shoulder\."',
    '"\I need everyone together\."',
    '"\HOLD YOUR HORSE\."',
    '"\You got marks in your pocket\."',
    '"\Exam Mein Galti ki koi gunjaish nahi\."',
    '“The room where you\'re the best is the wrong room.”',
    '“My twenties went into realising that this is not enough, that there is more.”',
    '“I want you girls to be decisive. To be able to make solid decisions in your lives.”',
]
var other_quotes = [
    '“If you do every job like you’re going to do it for the rest of your life, that’s when you get noticed.” ~ Mary Barra',
    '“I think frugality drives innovation, just like other constraints do. One of the only ways to get out of a tight box is to invent your way out.” ~ Jeff Bezos',
    '“If you never want to be criticized, for goodness’ sake don’t do anything new.” ~ Jeff Bezos',
    '“It’s better to hang out with people better than you. Pick out associates whose behavior is better than yours and you’ll drift in that direction.’  ~ Warren Buffett',
    '“Let your joy be in your journey – not in some distant goal.” ~ Tim Cook',
    '“Regrets are born of paths never taken.”  ~ Michael Dell',
    '“Whether you think you can, or you think you can’t–you’re right.” ~ Henry Ford',
    '“I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.” ~ Bill Gates',
    '“It’s fine to celebrate success but it is more important to heed the lessons of failure.” ~ Bill Gates',
    '"Because the people who are crazy enough to think they can change the world, are the ones who do.” ~ Steve Jobs',
    '“Pay attention to negative feedback and solicit it, particularly from friends. hardly anyone does that, and it’s incredibly helpful.” ~ Elon Musk',
    '“Failure is an option here. If things are not failing, you are not innovating enough.” ~ Elon Musk',
    '“Any product that needs a manual to work is broken.” ~ Elon Musk',
    '“Release Your Horse!” ~ Wania',
    '“Life is either a daring adventure or nothing at all.” ~ Helen Keller',
    '“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.” ~ Aaron Lauritsen',
    '“If you dare nothing, <br> then when the day is over, <br> nothing is all you will have gained.” ~ Neil Gaiman',
    '“The struggles we endure today will be the \'good old days\' we laugh about tomorrow. ~ Aaron Lauritsen”',
    '“If you\'re offered a seat on the rocket ship, don\'t ask which seat! Just get on.” ~ Sheryl Sandberg',
    '“But he\'d learned long ago that a life lived without risks pretty much wasn\'t worth living. Life rewarded courage, even when that first step was taken neck-deep in fear” ~ Tamera Alexander',
    '“Life\'s trials will test you, and shape you, but don\'t let them change who you are.” ~ Aaron Lauritsen',
    '“...maybe sometimes it\'s riskier not to take a risk. Sometimes all you\'re guaranteeing is that things will stay the same.” ~ Danny Wallace',
    '“Explore, Experiance, The Push Beyond.” ~ Aaron Lauritsen',
    '“If you opt for a safe life, you will never know what it\'s like to win.” ~ Richard Branson',
    '“I do not believe in taking the right decision, I take a decision and make it right.” ~ M.A Jinnah',
    '“Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.” ~ M.A Jinnah'
]

// generates a random whole number that ranges from 0 to the length of the quotes array
function newQuote() {
    var random_num = Math.floor(Math.random() * (ma_quotes.length));
    document.getElementById('quotedisplay').innerHTML = ma_quotes[random_num] + '<br> ~ Aniqah Rais';
}

function other() {
    var random_numT = Math.floor(Math.random() * (other_quotes.length));
    document.getElementById('otherquotedisplay').innerHTML = other_quotes[random_numT];
}

// time func 
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);

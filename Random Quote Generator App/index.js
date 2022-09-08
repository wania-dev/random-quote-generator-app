var ma_quotes = [
    '"\There is no such thing Jo Apko Nahi Aati\"',
    '"\It is as easy as it seems\"',
    '"\Does that make sense?\"',
    '"\Think on your feet\"',
    '"\Keep your eyes open\"',
    '"\Keep your head on your shoulder\"',
    '"\I need everyone together\"',
    '"\HOLD YOUR HORSE\"',
    '"\You got marks in your pocket\"',
    '"\Galti ki koi gunjaish nahi\"',
    'The room where you\'re the best is the wrong room',
]
var other_quotes = [
    '“If you do every job like you’re going to do it for the rest of your life, that’s when you get noticed.” ~Mary Barra',
    '“I think frugality drives innovation, just like other constraints do. One of the only ways to get out of a tight box is to invent your way out.” ~ Jeff Bezos',
    '“If you never want to be criticized, for goodness’ sake don’t do anything new.” ~ Jeff Bezos',
    '“It’s better to hang out with people better than you. Pick out associates whose behavior is better than yours and you’ll drift in that direction.’  ~ Warren Buffett',
    '“Let your joy be in your journey – not in some distant goal.” ~ Tim Cook',
    '“Regrets are born of paths never taken.”  ~ Michael Dell',
    '“To model yourself after Steve Jobs is like, ‘I’d like to paint like Picasso, what should I do? Should I use more red?” ~ Larry Ellison',
    '“Whether you think you can, or you think you can’t–you’re right.” ~ Henry Ford',
    '“I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.” ~ Bill Gates',
    '“It’s fine to celebrate success but it is more important to heed the lessons of failure.” ~Bill Gates',
    '“It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do.”',
    '"Because the people who are crazy enough to think they can change the world, are the ones who do.” ~ Steve Jobs',
    '“Pay attention to negative feedback and solicit it, particularly from friends. hardly anyone does that, and it’s incredibly helpful.”  ~Elon Musk',
    '“Failure is an option here. If things are not failing, you are not innovating enough.” ~Elon Musk',
    '“Any product that needs a manual to work is broken.” ~Elon Musk',
]

// generates a random whole number that ranges from 0 to the length of the quotes array
function newQuote() {
    var random_num = Math.floor(Math.random() * (ma_quotes.length));
    document.getElementById('quotedisplay').innerHTML = ma_quotes[random_num] + '<br> ~ Aniqa Rais';
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
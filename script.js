
function clicked() {
    let quotes = ["You only live once, but if you do it right, once is enough", "Money and success don’t change people; they merely amplify what is already there", "Not how long, but how well you have lived is the main thing", "Build your body, build your character", "Life is not so bad if you have plenty of luck, a good physique, and not too much imagination", "Just keep going, no matter what they say, no matter what they think"];
    let quotes_random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = quotes_random;
}
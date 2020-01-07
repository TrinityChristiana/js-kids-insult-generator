var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var randomPunctuations = ["!!??", "?!?!?", "!!!", ".", "???"];
var randomPunctuation = randomPunctuations[Math.floor(Math.random() * randomPunctuations.length)];


var randomInsult = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}${randomPunctuation}`;
console.log(randomInsult);
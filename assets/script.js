function listTopics(inputPhraseX) {    // function using a for loop to print out the topics in an input array
    for (var i =0; i < inputPhraseX.length; i++){
        console.log(inputPhraseX[i]);
    }
}

function selectTopic(){    //function using a switching statement to determine a console output based on an input
    switch(randomTopic) {
        case 'HTML':
            console.log(repeatedPhrase + randomTopic + "!");
            break;
        case 'CSS':
            console.log(repeatedPhrase + randomTopic + "!");
            break;
        case 'Git':
            console.log(repeatedPhrase + randomTopic + "!");
            break;
        case 'JavaScript':
            console.log(repeatedPhrase + randomTopic + "!");
            break;
        default:
            console.log('Please Try Again!');
    
    }
}

//declarations
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var repeatedPhrase = "Let's Study ";


//randomly choosing a topic
var randomTopic = topics[Math.floor(Math.random()*topics.length)];


console.log('Here are the topics we learned through Prework:');

//calling functions
listTopics(topics);

console.log('Which topic should we study first?');
selectTopic();
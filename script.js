//Exercise One

function Exercise1(){
    var sum = 0;
    var i=0;
    var num = prompt("Enter a number!");

    for(var i=0; i<=num; i++){
        sum += i;
    }

    console.log("The sum off all numbers from 0 to " + num + " is " + sum);
}

function Exercise2(){
    var words = ""
    var play = prompt("Do you want to play?")

    if(play.toLowerCase() == "yes"){

        do {
            var newword = prompt("Enter a word.");
            words = words + newword + " ";
            play = prompt("Do you want to play again?");
        }
        while(play.toLowerCase() == "yes");

    console.log(words);
    }
}

function Exercise3(){
    var name = prompt("What is your name?");
    var print = prompt("Would you like to print your name?");
    var output = "Hello. My name is " + name;

    while(print.toLowerCase() == "yes"){
        console.log(output);
        print = prompt("Would you like to print this again?");
        output += "!";
    }
}

function Exercise4(){
    var timeofday = prompt("What time of day is it?", "Morning, noon, or evening");

    switch(timeofday.toLowerCase()){
        case "morning":
            console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
            break;
        
        case "noon":
            console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
            break;

        case "evening":
            console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
            break;

        default:
            console.log("I'm not sure what you should eat at that time of day.");
    }
}



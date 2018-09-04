//Exercise One

function Exercise1(){
    var sum = 0;
    var i=0;
    var num = prompt("Enter a number!");

    for(var i=0; i<=num; i++){
        sum += i;
    }

    alert("The sum off all numbers from 0 to " + num + " is " + sum);
}

function Exercise2(){
    var words = ""
    var play = prompt("Do you want to play?")

    while(play == "yes"){
        var newword = prompt("Enter a word.");
        words = words + newword + " ";
        play = prompt("Do you want to play again?");
    }

    alert(words);
}



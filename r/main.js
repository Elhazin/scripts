
var ask = [
    "Enter the size of the numbers: ",
    "ENter the starting number: ",
    "Enter the ending number: "
];


var size = 0;
var begin = 0;
var end = 0;
var s = 0;
function start(){
    document.getElementById("test").style.display = "none";
    document.getElementById("hide").classList.add("form");
    document.getElementsByClassName("text")[0].innerHTML = ask[s];
};



var cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";

});

function next(){
    var a = document.getElementById("number").value;
    if (s == 0){
        size = parseInt(a);
        if (size < 0){
            document.getElementById("number").placeholder = "";
            document.getElementById("number").placeholder = "The number is not a positive integer";
            s = 0;
        } else {
            document.getElementsByClassName("text")[0].innerHTML = ask[1];
            document.getElementById("number").value = "";
            s = 1;
        }
    }
    else if (s == 1){
        begin = parseInt(a);
        document.getElementsByClassName("text")[0].innerHTML = ask[2];
        document.getElementById("number").value = "";
        s = 2;
    }
    else if (s == 2) {
        end = parseInt(a);
        if (end < begin){
            document.getElementById("number").placeholder = "The ending number is less than the starting number";
            s = 2;
        } else {
            document.getElementById("hide").style.display = "none";
            result(begin, end);
        }
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function result(begin, end) {
    document.getElementById("hide2").classList.replace("hide2", "res");
    
    var resultText = "";
    
    for (var i = 1; i <= size; i++) {
        var randomNumber = getRandomInt(begin, end);
        resultText += randomNumber + " ";
    }
    
    document.getElementById("textarea").value = resultText;
}

function clearing()
{
    var s = document.getElementById("number");
    if (!placeholderCleared) {
        inputElement.placeholder = '';
        placeholderCleared = true;
    }
}

function copy()
{
    var copyText = document.getElementById("textarea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

// function move()
// {
//     var button = document.getElementById("start");
//     var x = event.clientX;
//     var y = event.clientY;
//     button.style.top = y + "px";
//     button.style.left = x + "px";
// }









// function move()
// {
//     const button = document.getElementById("cursor");
//     let { width, height, x: buttonX, y: buttonY } = button.getBoundingClientRect();

//     buttonX = buttonX + width / 2;
//     buttonY = buttonY + height / 2;


// }


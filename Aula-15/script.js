document.getElementById("title").innerHTML = "Hello World, I like JavaScript"

let namePrompt = window.prompt("what's your name?")

document.getElementById("name").innerHTML = namePrompt

let resp = window.confirm( "Do you like Javascript?")

if (resp) {
    document.getElementById("resposta").innerHTML = "YES! The student is enjoying JavaScript class"
}
else{
    document.getElementById("resposta").innerHTML = "NO! The student doen't like javascript class"
}

function sendName() {
    let nameAnswer = document.getElementById ("inputName").value

    const answer = document.getElementById("containerAnswer");

    answer.innerHTML= "The name writen is " + nameAnswer;
    answer.style.display = "flex"
    answer.style.height = "150px";
    answer.style.backgroundImage = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
    answer.style.justifyContent = "center"
    answer.style.alignItems = "center"
    answer.style.fontSize = "20px";

    answer.style.border = "2px solid #ff0000"
}
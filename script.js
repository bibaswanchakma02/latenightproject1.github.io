const b = document.querySelector('button.button-no')
b.addEventListener("click", mouseClick)

function mouseClick(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.left=i+"px"
    b.style.top=j+"px"
    
}

var a = document.querySelector('button.button-yes')
a.addEventListener("click", alertMessage)

function alertMessage(){
    alert("Great!! Call me love....see you:)");
}
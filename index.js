var colors = ["red","green","blue","black","white"]

function changeColor(){
    let randomNum = Math.floor(Math.random() * (4 - 0) + 0);
    var doc = document.getElementById("header");
    console.log(colors[randomNum]);
    let color = colors[randomNum];
    doc.style.backgroundColor = color;
    doc.style.color = "white";
    if(color === "black"){
        document.getElementById("heading").style.backgroundColor = "grey";
    }else{
        document.getElementById("heading").style.backgroundColor = "black";
    }
    document.getElementById("header")
}
function onOffBulb(){
    var head=document.getElementById("head")
    for(i=1;i<=5;i++){
        var b=document.getElementById("bulb"+i)
        if (b.src.match("../images/offbulb.jpg")){
            b.src="../images/Onbulb.jpg"
            head.innerHTML="ON Light"
            head.style.color="Red"
        }
        else{
            b.src="../images/offbulb.jpg"
            head.innerHTML="OFF Light"
            head.style.color="black"
        }
    }
}
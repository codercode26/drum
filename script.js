

for(let i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function alertt(){
    var curr=this.innerHTML;
    play(curr);
    })};

function play(button){
    if(button==='w'){
        var audio=new Audio('tom-1.mp3');
        audio.play();
    }
    else if(button==='a'){
        var audio=new Audio('tom-2.mp3');
        audio.play();

    }
    else if(button==='s'){
        var audio=new Audio('tom-3.mp3');
        audio.play();

    }
    else if(button==='d'){
        var audio=new Audio('tom-4.mp3');
        audio.play();

    }
    else if(button==='j'){
        var audio=new Audio('snare.mp3');
        audio.play();

    }
    else if(button==='k'){
        var audio=new Audio('crash.mp3');
        audio.play();

    }
    else if(button==='l'){
        var audio=new Audio('kick-bass.mp3');
        audio.play();

    }
}
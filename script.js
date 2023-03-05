const Hour = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Secounds = document.getElementById('secounds');
const AllButt = document.getElementById('buttons');


// Buttions

const Start = document.getElementById('start');
const Stop = document.getElementById('stop');
const Resume = document.getElementById('resume');

// Changeble Values

let RealSec = 0;
let RealMin = 0;
let RealHour = 0;
let Int;
let Bol = false;
let Bol2 = true;



// Event Listeners

Start.addEventListener('click' , StartTimer);
Stop.addEventListener('click' , StopTimer);
Resume.addEventListener('click' , ResumeTimer );



// Functions


function StartTimer(){
   Int = setInterval( AddSec , 1000)
   Start.remove();

   
}
function StopTimer(){
    clearInterval(Int)
    Bol = true;
    if(Bol2 == true){
        ButtAdd()
    }
}


function ResumeTimer(){
    if(Bol == true){
    Int = setInterval( AddSec , 1000)
    
}
    Bol = false;
    Bol2 = false;
    
}





function ButtAdd(){
    AddButt = document.createElement('button')
    AddButt.setAttribute("id" , "Reset")
    AddButt.innerText = 'Reset'
    AllButt.appendChild(AddButt)
    Bol2 = true;
    AddButt.addEventListener('click' , ()=>{
        RealSec = 0;
        RealSec--
        RealMin = 0;
        RealHour = 0;
        AddSec()
        AllButt.appendChild(Start)
        Start.style.marginLeft = '10px'
        AddButt.remove()

    })

}



function AddSec(){
    RealSec++;
    Secounds.innerText = '0' + RealSec;

    if(RealSec >= 10){
        Secounds.innerText = RealSec;
    }

    if(RealSec >= 60){
        RealMin++
        Minutes.innerText = '0' + RealMin + ':';
        RealSec = 0;
        Secounds.innerText = '0' + RealSec;
    }
    if(RealMin >= 10){
       Minutes.innerText = RealMin;
    }
    if(RealMin >= 60){
        RealHour++
        Hour.innerText= '0' + RealHour + ':';
        RealMin = 0;
        Minutes.innerText = '0' + RealMin;
    }

}
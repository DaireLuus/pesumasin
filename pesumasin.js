


window.onload = function(){
    document.getElementById("scene").addEventListener("animationstart", animInfo);
    document.getElementById("scene").addEventListener("animationend", animInfo);
    document.getElementById("scene").addEventListener("animationiteration", animInfo);

    //uks tuleb lahti
    document.getElementById("second").style.animation = "insideIn 3s linear 2s 1 forwards"
    document.getElementById("third").style.animation = "doorOpen 4s linear 2s 1 forwards"
       
    
}



function animInfo(e) {
    console.log(e);
    //pesu läheb sisse
    if (e.type == "animationend" && e.animationName == "doorOpen"){
        document.getElementById("sixth").style.animation = "entry 2s linear 1s 1 normal forwards"
        document.getElementById("seventh").style.animation = "entryOne 2s linear 4s 1 normal forwards"
        document.getElementById("eighth").style.animation = "entryTwo 2s linear 7s 1 normal forwards"
    }
//pesuvahend
    if (e.type == "animationend" && e.animationName == "entryTwo"){
        document.getElementById("fifth").style.animation = "washEntry 6s ease-in-out 1 forwards";
        
    }
    //uks kinni
    if (e.type == "animationend" && e.animationName == "washEntry"){
        document.getElementById("second").style.animation = "insideOut 3s linear 1 normal forwards";
        document.getElementById("third").style.animation = "doorClose 4s linear 1 forwards";
    }
      //vesi, pesuvahend ja pesu käivad ringi: pesemine, loputus ja kuivatus  
    if (e.type == "animationend" && e.animationName == "doorClose"){
        e.target.style.transform = "opacity: 1"
        document.getElementById("nineth").style.animation = "water 8s ease-in-out 4";
        document.getElementById("tenth").style.animation = "water 7s ease-in-out 6 ";
        document.getElementById("eleventh").style.animation = "water 7.5s ease-in-out 6";
        document.getElementById("first").style.animation = "shake 100ms ease-in-out 449";

      }
      // uks tuleb lahti ja tuleb ette pesunööri pilt
      if (e.type == "animationend" && e.animationName == "shake"){
        document.getElementById("second").style.animation = "insideIn 3s linear 1 forwards"
        document.getElementById("third").style.animation = "doorOpen 4s linear 1 forwards"
		document.getElementById("twelve").style.animation = "dryLaundry 15s linear 7s 1 forwards"
    }
    // leht laetakse uuesti
	if (e.type == "animationend" && e.animationName == "dryLaundry"){
	location.reload();
	}
}

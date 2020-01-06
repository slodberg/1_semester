window.addEventListener("load", visStart);

let myPoint;
let boede;
var timerVar;
var totalSeconds;


function visStart() {

    console.log("visStart");

    //fjern hide
    document.querySelector("#start").classList.remove("hide");

    //tryk på play --> startspil
    document.querySelector("#startknap").addEventListener("click", forklaring);

}

function forklaring() {

    document.querySelector("#start").classList.add("hide");

    //fjern hide
    document.querySelector("#game_background").classList.remove("hide");


    //tilføj hide til startskærm
    document.querySelector("#start").classList.add("hide");

    //fjern hide på forklaring
    document.querySelector("#forklaring").classList.remove("hide");


    //klik på figur --> stue 1
    document.querySelector("#forklaring").addEventListener("click", stue1);
}


function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);

    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
    document.getElementById("timer1").innerHTML = hour + ":" + minute + ":" + seconds;
    document.getElementById("timer2").innerHTML = hour + ":" + minute + ":" + seconds;
}

function stue1() {
    console.log("stue1");

    //timer.addEventListener("stop", countTimer);

    timerVar = setInterval(countTimer, 1000);
    totalSeconds = 0;


    //Nulstil point
    myPoint = 0;

    //Nulstil bøder
    boede = 0;


    //skjul slutskærme
    document.querySelector("#slut_1").classList.add("hide");
    document.querySelector("#slut_2").classList.add("hide");
    document.querySelector("#slut_3").classList.add("hide");

    //hvis game og game_UI
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game_ui").classList.remove("hide");

    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj fade_out til forklaring
    document.querySelector("#forklaring").classList.add("fade_out");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap1").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap1").classList.add("pos3");

    //klik på billedknap --> klikBillede1
    document.querySelector("#billede_knap1").addEventListener("click", klikBillede1);
}

function klikBillede1() {
    console.log("klikBillede1");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap1").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap1").classList.remove("pos3");

    //fjern hide fra hvid7
    document.querySelector("#hvid7").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send7").addEventListener("click", KlikSend7);

    //klik på slet --> KlikSlet
    document.querySelector("#slet7").addEventListener("click", KlikSlet7);
}

function KlikSend7() {
    console.log("KlikSend7");

    //point ++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 7
    document.querySelector("#hvid7").classList.add("hide");

    //fjern hide fra forklaringsend7
    document.querySelector("#forklaringsend7").classList.remove("hide");

    //klik på spilvidere71 --> bad1
    document.querySelector("#spilvidere71").addEventListener("click", bad1);

}

function KlikSlet7() {
    console.log("KlikSlet7");

    //tilføj hide til hvid 7
    document.querySelector("#hvid7").classList.add("hide");

    //fjern hide fra forklaringslet7
    document.querySelector("#forklaringslet7").classList.remove("hide");

    //klik på spilvidere72 --> bad1
    document.querySelector("#spilvidere72").addEventListener("click", bad1);
}

function bad1() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend7 + forklaringslet7
    document.querySelector("#forklaringsend7").classList.add("hide");
    document.querySelector("#forklaringslet7").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap2").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap2").classList.add("pos1");

    //klik på billedknap --> klikBillede2
    document.querySelector("#billede_knap2").addEventListener("click", klikBillede2);
}

function klikBillede2() {
    console.log("klikBillede2");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap2").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap2").classList.remove("pos1");

    //fjern hide fra hvid1
    document.querySelector("#hvid1").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send1").addEventListener("click", KlikSend1);

    //klik på slet --> KlikSlet
    document.querySelector("#slet1").addEventListener("click", KlikSlet1);
}

function KlikSend1() {
    console.log("KlikSend1");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);


    //tilføj hide til hvid 1
    document.querySelector("#hvid1").classList.add("hide");

    //fjern hide fra forklaringsend1
    document.querySelector("#forklaringsend1").classList.remove("hide");

    //klik på spilvidere71 --> stue3
    document.querySelector("#spilvidere11").addEventListener("click", stue3);

}

function KlikSlet1() {
    console.log("KlikSlet1");

    //mist point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 7
    document.querySelector("#hvid1").classList.add("hide");

    //fjern hide fra forklaringslet7
    document.querySelector("#forklaringslet1").classList.remove("hide");

    //klik på spilvidere72 --> stue3
    document.querySelector("#spilvidere12").addEventListener("click", stue3);

}

function stue3() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend1 + forklaringslet1
    document.querySelector("#forklaringsend1").classList.add("hide");
    document.querySelector("#forklaringslet1").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap3").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap3").classList.add("pos3");

    //klik på billedknap --> klikBillede3
    document.querySelector("#billede_knap3").addEventListener("click", klikBillede3);

}

function klikBillede3() {
    console.log("klikBillede3");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap3").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap3").classList.remove("pos3");

    //fjern hide fra hvid9
    document.querySelector("#hvid9").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send9").addEventListener("click", KlikSend9);

    //klik på slet --> KlikSlet
    document.querySelector("#slet9").addEventListener("click", KlikSlet9);
}

function KlikSend9() {
    console.log("KlikSend9");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 1
    document.querySelector("#hvid9").classList.add("hide");

    //fjern hide fra forklaringsend1
    document.querySelector("#forklaringsend9").classList.remove("hide");

    //klik på spilvidere91 --> busk1
    document.querySelector("#spilvidere91").addEventListener("click", busk1);

}

function KlikSlet9() {
    console.log("KlikSlet9");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 7
    document.querySelector("#hvid9").classList.add("hide");

    //fjern hide fra forklaringslet7
    document.querySelector("#forklaringslet9").classList.remove("hide");

    //klik på spilvidere92 --> busk1
    document.querySelector("#spilvidere92").addEventListener("click", busk1);

}

function busk1() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend1 + forklaringslet1
    document.querySelector("#forklaringsend9").classList.add("hide");
    document.querySelector("#forklaringslet9").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap4").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap4").classList.add("pos5");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap4").addEventListener("click", klikBillede4);

}

function klikBillede4() {
    console.log("klikBillede4");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap4").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap4").classList.remove("pos5");

    //fjern hide fra hvid9
    document.querySelector("#hvid12").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send12").addEventListener("click", KlikSend12);

    //klik på slet --> KlikSlet
    document.querySelector("#slet12").addEventListener("click", KlikSlet12);
}

function KlikSend12() {
    console.log("KlikSend12");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 12
    document.querySelector("#hvid12").classList.add("hide");

    //fjern hide fra forklaringsend12
    document.querySelector("#forklaringsend12").classList.remove("hide");

    //klik på spilvidere121 --> koekken2
    document.querySelector("#spilvidere121").addEventListener("click", koekken2);

}

function KlikSlet12() {
    console.log("KlikSlet12");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 7
    document.querySelector("#hvid12").classList.add("hide");

    //fjern hide fra forklaringslet7
    document.querySelector("#forklaringslet12").classList.remove("hide");

    //klik på spilvidere122 --> koekken2
    document.querySelector("#spilvidere122").addEventListener("click", koekken2);

}

function koekken2() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend12 + forklaringslet12
    document.querySelector("#forklaringsend12").classList.add("hide");
    document.querySelector("#forklaringslet12").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap5").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap5").classList.add("pos4");

    //klik på billedknap --> klikBillede5
    document.querySelector("#billede_knap5").addEventListener("click", klikBillede5);

}

function klikBillede5() {
    console.log("klikBillede5");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap5").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap5").classList.remove("pos4");

    //fjern hide fra hvid9
    document.querySelector("#hvid6").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send6").addEventListener("click", KlikSend6);

    //klik på slet --> KlikSlet
    document.querySelector("#slet6").addEventListener("click", KlikSlet6);
}

function KlikSend6() {
    console.log("KlikSend6");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 6
    document.querySelector("#hvid6").classList.add("hide");

    //fjern hide fra forklaringsend6
    document.querySelector("#forklaringsend6").classList.remove("hide");

    //klik på spilvidere61 --> sove2
    document.querySelector("#spilvidere61").addEventListener("click", sove2);

}

function KlikSlet6() {
    console.log("KlikSlet6");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 6
    document.querySelector("#hvid6").classList.add("hide");

    //fjern hide fra forklaringslet7
    document.querySelector("#forklaringslet6").classList.remove("hide");

    //klik på spilvidere62 --> sove2
    document.querySelector("#spilvidere62").addEventListener("click", sove2);

}

function sove2() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend6 + forklaringslet6
    document.querySelector("#forklaringsend6").classList.add("hide");
    document.querySelector("#forklaringslet6").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap6").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap6").classList.add("pos2");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap6").addEventListener("click", klikBillede6);

}

function klikBillede6() {
    console.log("klikBillede6");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap6").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap6").classList.remove("pos2");

    //fjern hide fra hvid4
    document.querySelector("#hvid4").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send4").addEventListener("click", KlikSend4);

    //klik på slet --> KlikSlet
    document.querySelector("#slet4").addEventListener("click", KlikSlet4);
}

function KlikSend4() {
    console.log("KlikSend6");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 4
    document.querySelector("#hvid4").classList.add("hide");

    //fjern hide fra forklaringsend4
    document.querySelector("#forklaringsend4").classList.remove("hide");

    //klik på spilvidere41 --> stue4
    document.querySelector("#spilvidere41").addEventListener("click", stue4);

}

function KlikSlet4() {
    console.log("KlikSlet6");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);


    //tilføj hide til hvid 4
    document.querySelector("#hvid4").classList.add("hide");

    //fjern hide fra forklaringslet4
    document.querySelector("#forklaringslet4").classList.remove("hide");

    //klik på spilvidere42 --> stue4
    document.querySelector("#spilvidere42").addEventListener("click", stue4);

}

function stue4() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend6 + forklaringslet6
    document.querySelector("#forklaringsend4").classList.add("hide");
    document.querySelector("#forklaringslet4").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap7").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap7").classList.add("pos3");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap7").addEventListener("click", klikBillede7);

}

function klikBillede7() {
    console.log("klikBillede7");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap7").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap7").classList.remove("pos3");

    //fjern hide fra hvid4
    document.querySelector("#hvid10").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send10").addEventListener("click", KlikSend10);

    //klik på slet --> KlikSlet
    document.querySelector("#slet10").addEventListener("click", KlikSlet10);
}

function KlikSend10() {
    console.log("KlikSend10");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 4
    document.querySelector("#hvid10").classList.add("hide");

    //fjern hide fra forklaringsend4
    document.querySelector("#forklaringsend10").classList.remove("hide");

    //klik på spilvidere101 --> bad2
    document.querySelector("#spilvidere101").addEventListener("click", bad2);

}

function KlikSlet10() {
    console.log("KlikSlet10");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 4
    document.querySelector("#hvid10").classList.add("hide");

    //fjern hide fra forklaringslet4
    document.querySelector("#forklaringslet10").classList.remove("hide");

    //klik på spilvidere102 --> bad2
    document.querySelector("#spilvidere102").addEventListener("click", bad2);

}

function bad2() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend6 + forklaringslet6
    document.querySelector("#forklaringsend10").classList.add("hide");
    document.querySelector("#forklaringslet10").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap8").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap8").classList.add("pos1");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap8").addEventListener("click", klikBillede8);

}

function klikBillede8() {
    console.log("klikBillede8");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap8").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap8").classList.remove("pos1");

    //fjern hide fra hvid2
    document.querySelector("#hvid2").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send2").addEventListener("click", KlikSend2);

    //klik på slet --> KlikSlet
    document.querySelector("#slet2").addEventListener("click", KlikSlet2);
}

function KlikSend2() {
    console.log("KlikSend2");

    //point ++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 2
    document.querySelector("#hvid2").classList.add("hide");

    //fjern hide fra forklaringsend2
    document.querySelector("#forklaringsend2").classList.remove("hide");

    //klik på spilvidere101 --> bad2
    document.querySelector("#spilvidere21").addEventListener("click", koekken1);

}

function KlikSlet2() {
    console.log("KlikSlet2");

    //tilføj hide til hvid 4
    document.querySelector("#hvid2").classList.add("hide");

    //fjern hide fra forklaringslet2
    document.querySelector("#forklaringslet2").classList.remove("hide");

    //klik på spilvidere22 --> bad2
    document.querySelector("#spilvidere22").addEventListener("click", koekken1);

}

function koekken1() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend2 + forklaringslet2
    document.querySelector("#forklaringsend2").classList.add("hide");
    document.querySelector("#forklaringslet2").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap9").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap9").classList.add("pos4");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap9").addEventListener("click", klikBillede9);

}

function klikBillede9() {
    console.log("klikBillede9");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap9").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap9").classList.remove("pos4");

    //fjern hide fra hvid5
    document.querySelector("#hvid5").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send5").addEventListener("click", KlikSend5);

    //klik på slet --> KlikSlet
    document.querySelector("#slet5").addEventListener("click", KlikSlet5);
}

function KlikSend5() {
    console.log("KlikSend5");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 2
    document.querySelector("#hvid5").classList.add("hide");

    //fjern hide fra forklaringsend4
    document.querySelector("#forklaringsend5").classList.remove("hide");

    //klik på spilvidere51 --> stue2
    document.querySelector("#spilvidere51").addEventListener("click", stue2);

}

function KlikSlet5() {
    console.log("KlikSlet5");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 5
    document.querySelector("#hvid5").classList.add("hide");

    //fjern hide fra forklaringslet5
    document.querySelector("#forklaringslet5").classList.remove("hide");

    //klik på spilvidere52 --> stue2
    document.querySelector("#spilvidere52").addEventListener("click", stue2);

}

function stue2() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend2 + forklaringslet2
    document.querySelector("#forklaringsend5").classList.add("hide");
    document.querySelector("#forklaringslet5").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap10").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap10").classList.add("pos3");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap10").addEventListener("click", klikBillede10);

}

function klikBillede10() {
    console.log("klikBillede10");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap10").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap10").classList.remove("pos3");

    //fjern hide fra hvid8
    document.querySelector("#hvid8").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send8").addEventListener("click", KlikSend8);

    //klik på slet --> KlikSlet
    document.querySelector("#slet8").addEventListener("click", KlikSlet8);
}

function KlikSend8() {
    console.log("KlikSend8");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 8
    document.querySelector("#hvid8").classList.add("hide");

    //fjern hide fra forklaringsend8
    document.querySelector("#forklaringsend8").classList.remove("hide");

    //klik på spilvidere81 --> stue2
    document.querySelector("#spilvidere81").addEventListener("click", sove1);

}

function KlikSlet8() {
    console.log("KlikSlet8");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 8
    document.querySelector("#hvid8").classList.add("hide");

    //fjern hide fra forklaringslet8
    document.querySelector("#forklaringslet8").classList.remove("hide");

    //klik på spilvidere82 --> stue2
    document.querySelector("#spilvidere82").addEventListener("click", sove1);

}

function sove1() {

    //slet
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;

    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend8 + forklaringslet8
    document.querySelector("#forklaringsend8").classList.add("hide");
    document.querySelector("#forklaringslet8").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap11").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap11").classList.add("pos2");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap11").addEventListener("click", klikBillede11);

}

function klikBillede11() {
    console.log("klikBillede11");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap11").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap11").classList.remove("pos2");

    //fjern hide fra hvid3
    document.querySelector("#hvid3").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send3").addEventListener("click", KlikSend3);

    //klik på slet --> KlikSlet
    document.querySelector("#slet3").addEventListener("click", KlikSlet3);
}

function KlikSend3() {
    console.log("KlikSend3");

    //bøde ++
    boede++;
    console.log('boede: ' + boede);

    //spil lyd
    document.querySelector("#lyd_boede").play();

    //tilføj hide til hvid 3
    document.querySelector("#hvid3").classList.add("hide");

    //fjern hide fra forklaringsend3
    document.querySelector("#forklaringsend3").classList.remove("hide");

    //klik på spilvidere41 --> stue5
    document.querySelector("#spilvidere31").addEventListener("click", stue5);

}

function KlikSlet3() {
    console.log("KlikSlet3");

    //point++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 3
    document.querySelector("#hvid3").classList.add("hide");

    //fjern hide fra forklaringslet3
    document.querySelector("#forklaringslet3").classList.remove("hide");

    //klik på spilvidere42 --> stue5
    document.querySelector("#spilvidere32").addEventListener("click", stue5);

}

function stue5() {

    //send
    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;
    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend3 + forklaringslet3
    document.querySelector("#forklaringsend3").classList.add("hide");
    document.querySelector("#forklaringslet3").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //fjern hide fra billedeknappen
    document.querySelector("#billede_knap12").classList.remove("hide");

    //tilføj pos til billedeknappen
    document.querySelector("#billede_knap12").classList.add("pos3");

    //klik på billedknap --> klikBillede4
    document.querySelector("#billede_knap12").addEventListener("click", klikBillede12);

}

function klikBillede12() {
    console.log("klikBillede12");

    //tilføj grey scale på spilskærm
    document.querySelector("#game_background").classList.add("grey");

    //tilføj hide til billedeknap
    document.querySelector("#billede_knap12").classList.add("hide");

    //fjern pos til billedeknap
    document.querySelector("#billede_knap12").classList.remove("pos3");

    //fjern hide fra hvid11
    document.querySelector("#hvid11").classList.remove("hide");

    //klik på send --> Kliksend
    document.querySelector("#send11").addEventListener("click", KlikSend11);

    //klik på slet --> KlikSlet
    document.querySelector("#slet11").addEventListener("click", KlikSlet11);
}

function KlikSend11() {
    console.log("KlikSend11");

    //point ++
    myPoint++;
    console.log('myPoint: ' + myPoint);

    //tilføj hide til hvid 11
    document.querySelector("#hvid11").classList.add("hide");

    //fjern hide fra forklaringsend11
    document.querySelector("#forklaringsend11").classList.remove("hide");

    //klik på spilvidere111 --> stopspil
    document.querySelector("#spilvidere111").addEventListener("click", StopSpil);

}

function KlikSlet11() {
    console.log("KlikSlet11");

    //tilføj hide til hvid 11
    document.querySelector("#hvid11").classList.add("hide");

    //fjern hide fra forklaringslet11
    document.querySelector("#forklaringslet11").classList.remove("hide");

    //klik på spilvidere112 --> stopspil
    document.querySelector("#spilvidere112").addEventListener("click", StopSpil);
}

function StopSpil() {

    console.log("stopSpil");

    clearInterval(timerVar);


    //Hvis samlet antal point
    document.querySelector("#point_sprite").textContent = myPoint;
    //Hvis samlet antal bøder
    document.querySelector("#boede_sprite").textContent = boede;

    //tilføj hide til forklaringsend3 + forklaringslet3
    document.querySelector("#forklaringsend11").classList.add("hide");
    document.querySelector("#forklaringslet11").classList.add("hide");

    //fjern grey scale på spilskærm
    document.querySelector("#game_background").classList.remove("grey");

    //TODO: pause lyd

    //mellem 0-2 --> slut1
    //mellem 2 - 6-- > slut2
    //mellem over 6 -- > slut3


    if (myPoint < 4) {
        slut1();
    } else if (myPoint < 8) {
        slut2();
    } else {
        slut3();
    }

}

function slut1() {
    console.log("slut1");

    //fjern slut2 og 3
    document.querySelector("#slut_2").classList.add("hide");
    document.querySelector("#slut_3").classList.add("hide");

    //spil lyd
    document.querySelector("#slut_daarlig").play();

    //fjern hide
    document.querySelector("#slut_1").classList.remove("hide");

    //fjern elementer
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#game_ui").classList.add("hide");

    //start nyt spil
    document.querySelector("#genstart1").addEventListener("click", stue1);

}

function slut2() {
    console.log("slut2");

    //spil lyd
    document.querySelector("#slut_daarlig").play();

    //fjern slut1
    document.querySelector("#slut_1").classList.add("hide");
    document.querySelector("#slut_3").classList.add("hide");

    //fjern hide
    document.querySelector("#slut_2").classList.remove("hide");

    //fjern elementer
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#game_ui").classList.add("hide");

    //start nyt spil
    document.querySelector("#genstart2").addEventListener("click", stue1);
}

function slut3() {
    console.log("slut3");

    //spil lyd
    document.querySelector("#slut_god").play();

    //fjern slut2
    document.querySelector("#slut_2").classList.add("hide");
    document.querySelector("#slut_1").classList.add("hide");

    //fjern hide
    document.querySelector("#slut_3").classList.remove("hide");

    //fjern elementer
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#game_ui").classList.add("hide");

    //start nyt spil
    document.querySelector("#genstart3").addEventListener("click", stue1);

}

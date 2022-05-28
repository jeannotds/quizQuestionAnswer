let index = document.querySelector('#index');
let afQuest = document.querySelectorAll('.bloc')
let commencer = document.querySelector('#commencer');
let suivant1 = document.querySelector('#suivant-1');
let suivant2 = document.querySelector('#suivant-2');
let suivant3 = document.querySelector('#suivant-3');
let suivant4 = document.querySelector('#suivant-4');
let suivant5 = document.querySelector('#suivant-5');
let suivant6 = document.querySelector('#suivant-6');
let suivant7 = document.querySelector('#suivant-7');
let suivant8 = document.querySelector('#suivant-8');
let suivant9 = document.querySelector('#suivant-9');
let suivant10 = document.querySelector('#suivant-10');
let suivant11 = document.querySelector('#suivant-11');
let suivant12 = document.querySelector('#suivant-12');
let suivant13 = document.querySelector('#suivant-13');
let suivant14 = document.querySelector('#suivant-14');
let suivant15 = document.querySelector('#suivant-15');
/////////////////////////////////////////////////////////////
let quite1 = document.querySelector('#quitter-1');
let quite2 = document.querySelector('#quitter-2');
let quite3 = document.querySelector('#quitter-3');
let quite4 = document.querySelector('#quitter-4');
let quite5 = document.querySelector('#quitter-5');
let quite6 = document.querySelector('#quitter-6');
let quite7 = document.querySelector('#quitter-7');
let quite8 = document.querySelector('#quitter-8');
let quite9 = document.querySelector('#quitter-9');
let quite10 = document.querySelector('#quitter-10');
let quite11 = document.querySelector('#quitter-11');
let quite12 = document.querySelector('#quitter-12');
let quite13 = document.querySelector('#quitter-13');
let quite14 = document.querySelector('#quitter-14');
let quite15 = document.querySelector('#quitter-15');
//////////////////////////////////////////////////////////
const btnStart = document.querySelector('.btn-start');
const timeSpan = document.querySelectorAll('.time');
const progressBar = document.querySelectorAll('.progress-inner');
const resAccueil = document.querySelector('#resAccueil');
const echAccueil = document.querySelector('#echAccueil');
//####################################################################"
const btn = document.querySelectorAll('.btn');
let numPos = document.querySelector('.num-pagepos');
let numNeg = document.querySelector('.num-pageneg');
let nomJoueurPos = document.querySelector('.nom-joueurPos');
let emailJoueurPos = document.querySelector('.email-joueurPos');
let nomJoueurNeg = document.querySelector('.nom-joueurpos');
let emailJoueurNeg = document.querySelector('.email-joueurpos');
//####################################################################"
let nomJoueur = document.querySelectorAll(".nom-joueur")
let emailJoueur = document.querySelectorAll(".email-joueur")
// ######################################################################""
let countDown = null
action();
let response = document.querySelectorAll('.selected');
const input = document.querySelectorAll('input');
suivant1.addEventListener('click',suivant_1)
suivant2.addEventListener('click',suivant_2)
suivant3.addEventListener('click',suivant_3);
suivant4.addEventListener('click',suivant_4);
suivant5.addEventListener('click',suivant_5);
suivant6.addEventListener('click',suivant_6);
suivant7.addEventListener('click',suivant_7);
suivant8.addEventListener('click',suivant_8);
suivant9.addEventListener('click',suivant_9);
suivant10.addEventListener('click',suivant_10);
suivant11.addEventListener('click',suivant_11);
suivant12.addEventListener('click',suivant_12);
suivant13.addEventListener('click',suivant_13);
suivant14.addEventListener('click',suivant_14);
suivant15.addEventListener('click',suivant_15);
let quitter1 = document.querySelector('#quitter-1');

// ###############################ACTIVER ET DESACTIVER##########################

response[0].addEventListener('click', ()=>{
    activeB1()
})
function activeB1(){
    suivant1.removeAttribute('disabled')
    suivant1.style.background = "blue";
}
// #######################################################################################
response[1].addEventListener('click', ()=>{
    activeB2();
})
function activeB2(){
    suivant2.removeAttribute('disabled')
    suivant2.style.background = "blue";
}
// #######################################################################################
response[2].addEventListener('click', ()=>{
    activeB3();
})
function activeB3(){
    suivant3.removeAttribute('disabled')
    suivant3.style.background = "blue";
}
// #######################################################################################
response[3].addEventListener('click', ()=>{
    activeB4();
})
function activeB4(){
    suivant4.removeAttribute('disabled')
    suivant4.style.background = "blue";
}
// #######################################################################################
response[4].addEventListener('click', ()=>{
    activeB5();
})
function activeB5(){
    suivant5.removeAttribute('disabled')
    suivant5.style.background = "blue";
}
// #######################################################################################
response[5].addEventListener('click', ()=>{
    activeB6();
})
function activeB6(){
    suivant6.removeAttribute('disabled')
    suivant6.style.background = "blue";
}
// #######################################################################################
response[6].addEventListener('click', ()=>{
    activeB7();
})
function activeB7(){
    suivant7.removeAttribute('disabled')
    suivant7.style.background = "blue";
}
// #######################################################################################
response[7].addEventListener('click', ()=>{
    activeB8();
})
function activeB8(){
    suivant8.removeAttribute('disabled')
    suivant8.style.background = "blue";
}
// #######################################################################################
// #######################################################################################
response[8].addEventListener('click', ()=>{
    activeB9();
})
function activeB9(){
    suivant9.removeAttribute('disabled')
    suivant9.style.background = "blue";
}
// #######################################################################################
response[9].addEventListener('click', ()=>{
    activeB10();
})
function activeB10(){
    suivant10.removeAttribute('disabled')
    suivant10.style.background = "blue";
}
// #######################################################################################
response[10].addEventListener('click', ()=>{
    activeB11();
})
function activeB11(){
    suivant11.removeAttribute('disabled')
    suivant11.style.background = "blue";
}
// #######################################################################################
response[11].addEventListener('click', ()=>{
    activeB12();
})
function activeB12(){
    suivant12.removeAttribute('disabled')
    suivant12.style.background = "blue";
}
// #######################################################################################
response[12].addEventListener('click', ()=>{
    activeB13();
})
function activeB13(){
    suivant13.removeAttribute('disabled')
    suivant13.style.background = "blue";
}
// #######################################################################################
response[13].addEventListener('click', ()=>{
    activeB14();
})
function activeB14(){
    suivant14.removeAttribute('disabled')
    suivant14.style.background = "blue";
}
// #######################################################################################
response[14].addEventListener('click', ()=>{
    activeB15();
})
function activeB15(){
    suivant15.removeAttribute('disabled')
    suivant15.style.background = "blue";
}
// ###################################################################################"#######"
resAccueils()
echAccueils()
////RESULTAT QUITER POUR ACCUEIL
function resAccueils(){
        resAccueil.addEventListener('click', ()=>{
        console.log("Autre somme" +resultat())
        afQuest[16].style.display = "none";
        index.style.display = "block";
    })
}
function echAccueils(){
        echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[16].style.display = "none";
        index.style.display = "block";
    })
}
function resultat(){
    return counter
}
resultat()

///QUIITER LE PROGRAMME 1
quittre_1();
function quittre_1(){
    quite1.addEventListener('click', (e)=>{
        clearInterval(countDown);
        countDown == null
        afQuest[1].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
        }
    })
    echAccueils()
}


///QUIITER LE PROGRAMME 2
quittre_2();
function quittre_2(){
    quite2.addEventListener('click', (e)=>{
        clearInterval(countDown);
        countDown == null
        afQuest[2].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueils()
}
///QUIITER LE PROGRAMME 3
quittre_3();
function quittre_3(){
    quite3.addEventListener('click', (e)=>{
        clearInterval(countDown);
        countDown == null
        afQuest[3].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueils()
}
///QUIITER LE PROGRAMME 4
quittre_4();
function quittre_4(){
    quite4.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[4].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueils()
}

///QUIITER LE PROGRAMME 5
quittre_5();
function quittre_5(){
    quite5.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[5].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })    
}
///QUIITER LE PROGRAMME 6
quittre_6();
function quittre_6(){
    quite6.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[6].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 7
quittre_7();
function quittre_7(){
    quite7.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[7].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 7
quittre_8();
function quittre_8(){
    quite8.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[8].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
        else{
            afQuest[16].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
    resAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[16].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 9
quittre_9();
function quittre_9(){
    quite9.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[9].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
        else{
            afQuest[16].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
    resAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[6].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 10
quittre_10();
function quittre_10(){
    quite10.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[10].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
        else{
            afQuest[16].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[16].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 11
quittre_11();
function quittre_11(){
    quite11.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[11].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 12
quittre_12();
function quittre_12(){
    quite12.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[12].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
        else{
            afQuest[16].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[16].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 13
quittre_13();
function quittre_13(){
    quite13.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[13].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
        else{
            afQuest[16].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[16].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}
///QUIITER LE PROGRAMME 14
quittre_14();
function quittre_14(){
    quite14.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[14].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
        else{
            afQuest[16].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[16].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })

}
///QUIITER LE PROGRAMME 15
quittre_15();
function quittre_15(){
    quite15.addEventListener('click', (e)=>{
        e.preventDefault();
        clearInterval(countDown);
        countDown == null
        afQuest[15].style.display = "none";
        if(counter<8){
            afQuest[17].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
        else{
            afQuest[16].style.display = "block";
            numNeg.textContent = counter;
            numPos.textContent = counter;
        }
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[17].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
    echAccueil.addEventListener('click', ()=>{
        console.log("rejouer reussi")
        afQuest[16].style.display = "none";
        index.style.display = "block";
        numNeg.textContent = counter;
        numPos.textContent = counter;
    })
}






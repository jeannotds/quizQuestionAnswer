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
const btnStart = document.querySelector('.btn-start');
const timeSpan = document.querySelectorAll('.time');
const progressBar = document.querySelectorAll('.progress-inner');
const resAccueil = document.querySelector('#resAccueil');
const echAccueil = document.querySelector('#echAccueil');
let countDown = null
action();
const response = document.querySelectorAll('.response');
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
suivant15.addEventListener('click',suivantResPos);
let quitter1 = document.querySelector('#quitter-1');
function action(){
    commencer.addEventListener('click', (e)=>{
        e.preventDefault();
        let nom = document.querySelector('#nom').value;
        let email = document.querySelector('#email').value;
        let erreurNom = document.querySelector('#erreur-nom');
        let erreurEmail = document.querySelector('#erreur-email');
        let erreurE;

        if(!nom && !email){
            erreurE = "Entrer votre nom";
            e.preventDefault();
            console.log("commencer");
        }
        else{
        e.preventDefault()
        index.style.display = "none";
        afQuest[1].style.display ="block";
                let interval = 10;
                countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 10*100;
                if(interval >= 0){
                    progressBar[0].style.width = progressWidth++ +"%";
                    timeSpan[0].innerHTML = interval + "s";
                }   
                progressBar[0].style.width = progressWidth++ +"%";
                timeSpan[0].innerHTML = interval + "s";
                 if (interval == 0) {
                    afQuest[1].style.display ="none";
                    afQuest[2].style.display ="block";
                    activeB1();
                    suivant1.click()
                 }
            }, 1000)
        nom = document.querySelector('#nom').value ="";
        email = document.querySelector('#email').value="";
        }
    })
}
      function suivant_1(e){
               e.preventDefault() 
               afQuest[1].style.display = 'none';
               afQuest[2].style.display = 'block';
               clearInterval(countDown);
               countDown = null
               let interval = 60
               countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[1].style.width = progressWidth++ +"%";
                    timeSpan[1].innerHTML = interval + "s";
                }
                progressBar[1].style.width = progressWidth++ +"%";
                timeSpan[1].innerHTML = interval + "s";
                 if (interval == 0) {
                    afQuest[2].style.display = "none";
                    afQuest[3].style.display = "block";
                    activeB2();
                    suivant2.click();
                    e.preventDefault()
                 }
               },1000)
          }
// #################################################################################################""
            function suivant_2(e){
                e.preventDefault();
                afQuest[2].style.display = "none";
                afQuest[3].style.display = "block";
                clearInterval(countDown);
                countDown = null;
                let interval = 60;
                countDown = setInterval(()=>{
                    interval--;
                    let progressWidth = interval / 60*100;
                    if(interval >= 0){
                        progressBar[2].style.width = progressWidth++ +"%";
                        timeSpan[2].innerHTML = interval;
                    }
                    progressBar[2].style.width = progressWidth++ +"%";
                    timeSpan[2].innerHTML = interval + "s";
                    if(interval == 0){
                        console.log("page3ayto")
                        afQuest[3].style.display = "none";
                        afQuest[4].style.display = "block";
                        activeB3();
                        suivant3.click();
                        e.preventDefault();
                    }
                }, 1000)
            }
// ########################################################################################################
        function suivant_3(e){
            e.preventDefault();
            afQuest[3].style.display = "none";
            afQuest[4].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[3].style.width = progressWidth++ +"%";
                    timeSpan[3].innerHTML = interval;
                }
                progressBar[3].style.width = progressWidth++ +"%";
                timeSpan[3].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[4].style.display = "none";
                    afQuest[5].style.display = "block";
                    activeB4();
                    suivant4.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_4(e){
            e.preventDefault();
            afQuest[4].style.display = "none";
            afQuest[5].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[4].style.width = progressWidth++ +"%";
                    timeSpan[4].innerHTML = interval;
                }
                progressBar[4].style.width = progressWidth++ +"%";
                timeSpan[4].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[5].style.display = "none";
                    afQuest[6].style.display = "block";
                    activeB5()
                    suivant5.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_5(e){
            e.preventDefault();
            afQuest[5].style.display = "none";
            afQuest[6].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[5].style.width = progressWidth++ +"%";
                    timeSpan[5].innerHTML = interval;
                }
                progressBar[5].style.width = progressWidth++ +"%";
                timeSpan[5].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[6].style.display = "none";
                    afQuest[7].style.display = "block";
                    activeB6()
                    suivant6.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_6(e){
            e.preventDefault();
            afQuest[6].style.display = "none";
            afQuest[7].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[6].style.width = progressWidth++ +"%";
                    timeSpan[6].innerHTML = interval;
                }
                progressBar[6].style.width = progressWidth++ +"%";
                timeSpan[6].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[7].style.display = "none";
                    afQuest[8].style.display = "block";
                    activeB7()
                    suivant7.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_7(e){
            e.preventDefault();
            afQuest[7].style.display = "none";
            afQuest[8].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[7].style.width = progressWidth++ +"%";
                    timeSpan[7].innerHTML = interval;
                }
                progressBar[7].style.width = progressWidth++ +"%";
                timeSpan[7].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[8].style.display = "none";
                    afQuest[9].style.display = "block";
                    activeB8()
                    suivant8.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_8(e){
            e.preventDefault();
            afQuest[8].style.display = "none";
            afQuest[9].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[8].style.width = progressWidth++ +"%";
                    timeSpan[8].innerHTML = interval;
                }
                progressBar[8].style.width = progressWidth++ +"%";
                timeSpan[8].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[9].style.display = "none";
                    afQuest[10].style.display = "block";
                    activeB9()
                    suivant9.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_9(e){
            e.preventDefault();
            afQuest[9].style.display = "none";
            afQuest[10].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[9].style.width = progressWidth++ +"%";
                    timeSpan[9].innerHTML = interval;
                }
                progressBar[9].style.width = progressWidth++ +"%";
                timeSpan[9].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[10].style.display = "none";
                    afQuest[11].style.display = "block";
                    activeB10()
                    suivant10.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_10(e){
            e.preventDefault();
            afQuest[10].style.display = "none";
            afQuest[11].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[10].style.width = progressWidth++ +"%";
                    timeSpan[10].innerHTML = interval;
                }
                progressBar[10].style.width = progressWidth++ +"%";
                timeSpan[10].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[11].style.display = "none";
                    afQuest[12].style.display = "block";
                    activeB11()
                    suivant11.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_11(e){
            e.preventDefault();
            afQuest[11].style.display = "none";
            afQuest[12].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[11].style.width = progressWidth++ +"%";
                    timeSpan[11].innerHTML = interval;
                }
                progressBar[11].style.width = progressWidth++ +"%";
                timeSpan[11].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[12].style.display = "none";
                    afQuest[13].style.display = "block";
                    activeB12()
                    suivant12.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_12(e){
            e.preventDefault();
            afQuest[12].style.display = "none";
            afQuest[13].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[12].style.width = progressWidth++ +"%";
                    timeSpan[12].innerHTML = interval;
                }
                progressBar[12].style.width = progressWidth++ +"%";
                timeSpan[12].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[13].style.display = "none";
                    afQuest[14].style.display = "block";
                    activeB13()
                    suivant13.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_13(e){
            e.preventDefault();
            afQuest[13].style.display = "none";
            afQuest[14].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[13].style.width = progressWidth++ +"%";
                    timeSpan[13].innerHTML = interval;
                }
                progressBar[13].style.width = progressWidth++ +"%";
                timeSpan[13].innerHTML = interval + "s";
                if(interval == 0){
                    console.log("page3ayto")
                    afQuest[14].style.display = "none";
                    afQuest[15].style.display = "block";
                    activeB14()
                    suivant14.click();
                    e.preventDefault();
                }
            }, 1000)
        }
        function suivant_14(e){
            e.preventDefault();
            afQuest[14].style.display = "none";
            afQuest[15].style.display = "block";
            clearInterval(countDown);
            countDown = null;
            let interval = 60;
            countDown = setInterval(()=>{
                interval--;
                let progressWidth = interval / 60*100;
                if(interval >= 0){
                    progressBar[14].style.width = progressWidth++ +"%";
                    timeSpan[14].innerHTML = interval;
                }
                progressBar[14].style.width = progressWidth++ +"%";
                timeSpan[14].innerHTML = interval + "s";
                if(interval == 0){
                    e.preventDefault();
                    afQuest[15].style.display = "none";
                    afQuest[16].style.display = "block";
                    // SI LE RESULTAT EST SUP A 7
                    suivant15.click();
                    //SINON
                    activeB15()
                    e.preventDefault();
                    console.log("fin")
                }
            }, 1000)
        }
        function suivantResPos(e){
            afQuest[15].style.display = "none";
            afQuest[16].style.display = "block";
            e.preventDefault();
        }

// ##############################################################################
// ###############################ACTIVER ET DESACTIVER##########################
function activeB1(){
    suivant1.removeAttribute('disabled')
    suivant1.style.background = "blue";
}
response[0].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB1();
})
// #######################################################################################
function activeB2(){
    suivant2.removeAttribute('disabled')
    suivant2.style.background = "blue";
}
response[1].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB2();
})
// #######################################################################################
function activeB3(){
    suivant3.removeAttribute('disabled')
    suivant3.style.background = "blue";
}
response[2].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB3();
})
// #######################################################################################
function activeB4(){
    suivant4.removeAttribute('disabled')
    suivant4.style.background = "blue";
}
response[3].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB4();
})
// #######################################################################################
function activeB5(){
    suivant5.removeAttribute('disabled')
    suivant5.style.background = "blue";
}
response[4].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB5();
})
// #######################################################################################
function activeB6(){
    suivant6.removeAttribute('disabled')
    suivant6.style.background = "blue";
}
response[5].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB6();
})
// #######################################################################################
function activeB7(){
    suivant7.removeAttribute('disabled')
    suivant7.style.background = "blue";
}
response[6].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB7();
})
// #######################################################################################
function activeB8(){
    suivant8.removeAttribute('disabled')
    suivant8.style.background = "blue";
}
response[7].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB8();
})
// #######################################################################################
// #######################################################################################
function activeB9(){
    suivant9.removeAttribute('disabled')
    suivant9.style.background = "blue";
}
response[8].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB9();
})
// #######################################################################################
function activeB10(){
    suivant10.removeAttribute('disabled')
    suivant10.style.background = "blue";
}
response[9].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB10();
})
// #######################################################################################
function activeB11(){
    suivant11.removeAttribute('disabled')
    suivant11.style.background = "blue";
}
response[10].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB11();
})
// #######################################################################################
function activeB12(){
    suivant12.removeAttribute('disabled')
    suivant12.style.background = "blue";
}
response[11].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB12();
})
// #######################################################################################
function activeB13(){
    suivant13.removeAttribute('disabled')
    suivant13.style.background = "blue";
}
response[12].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB13();
})
// #######################################################################################
function activeB14(){
    suivant14.removeAttribute('disabled')
    suivant14.style.background = "blue";
}
response[13].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB14();
})
// #######################################################################################
function activeB15(){
    suivant15.removeAttribute('disabled')
    suivant15.style.background = "blue";
}
response[14].addEventListener('click', (e)=>{
    e.preventDefault();
    activeB15();
})
// #######################################################################################
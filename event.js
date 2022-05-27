
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
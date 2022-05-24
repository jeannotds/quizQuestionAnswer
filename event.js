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
console.log(suivant15);
const btnStart = document.querySelector('.btn-start');
const timeSpan = document.querySelectorAll('.time');
const progressBar = document.querySelectorAll('.progress-inner');

action();
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
            console.log("commencer")
        }
        else{
        e.preventDefault()
        index.style.display = "none";
        afQuest[1].style.display ="block";
        let interval = 60;
                var countDown = setInterval(()=>{
                    interval--;
                    let progressWidth = interval / 60*100;
                    progressBar[0].style.width = progressWidth++ +"%";
                     timeSpan[0].innerHTML = interval + "s";
                     if (interval == 0) {
                        afQuest[1].style.display ="none";
                        afQuest[2].style.display ="block";
                     }
                   
                }, 1000)
                suivant1.addEventListener('click', (e)=>{
                        afQuest[1].style.display ="none";
                        afQuest[2].style.display ="block";
                })
    
        // BOUTTON SUIVANT1
        
        nom = document.querySelector('#nom').value ="";
        email = document.querySelector('#email').value="";
        } 
    })
}

// ########################################################################################
      function suivant_1(){
        suivant1.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[1].style.display ="none";
            afQuest[2].style.display ="block";
            let interval = 60;
                var countDown = setInterval(()=>{
                    interval--;
                    let progressWidth = interval / 60*100;
                    progressBar[1].style.width = progressWidth++ +"%";
                     timeSpan[1].innerHTML = interval + "s";
                     if (interval == 0) {
                        afQuest[2].style.display ="none";
                        afQuest[3].style.display ="block";
                     }
                   
                }, 1000)
                suivant1.addEventListener('click', (e)=>{
                        afQuest[2].style.display ="none";
                        afQuest[3].style.display ="block";
                })
        })
      }
      suivant_1()
        function suivant_2(){
            suivant2.addEventListener('click', (e)=>{
                e.preventDefault();
                afQuest[2].style.display ="none";
                afQuest[3].style.display ="block";
                // count3();   
            })
         }
         suivant_2()
       function suivant_3(){
        suivant3.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[3].style.display ="none";
            afQuest[4].style.display ="block";
            //count4();   
        })
       }
       suivant_3()
       function suivant_4(){
        suivant4.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[4].style.display ="none";
            afQuest[5].style.display ="block";
            // count5();   
        })
       }
       suivant_4()
        function suivant_5(){
            suivant5.addEventListener('click', (e)=>{
                e.preventDefault();
                afQuest[5].style.display ="none";
                afQuest[6].style.display ="block";
                // count6();   
            })
        }
        suivant_5()
       function suivant_6(){
        suivant6.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[6].style.display ="none";
            afQuest[7].style.display ="block";
            // count7();   
        })
       }
       suivant_6()
       function suivant_7(){
        suivant7.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[7].style.display ="none";
            afQuest[8].style.display ="block";
            // count8();   
        })
       }
       suivant_7()
        function suivant_8(){
            suivant8.addEventListener('click', (e)=>{
                e.preventDefault();
                afQuest[8].style.display ="none";
                afQuest[9].style.display ="block";
                // count9();   
            })
        }
        suivant_8()
        function suivant_9(){
            suivant9.addEventListener('click', (e)=>{
                e.preventDefault();
                afQuest[9].style.display ="none";
                afQuest[10].style.display ="block";
                // count10();   
            })
        }
        suivant_9()
        function suivant_10(){
            suivant10.addEventListener('click', (e)=>{
                e.preventDefault();
                afQuest[10].style.display ="none";
                afQuest[11].style.display ="block";
                // count11();   
            })
        }
        suivant_10()
        function suivant_11(){
            suivant11.addEventListener('click', (e)=>{
                e.preventDefault();
                afQuest[11].style.display ="none";
                afQuest[12].style.display ="block";
                // count12();   
            })
        }
        suivant_11()
       function suivant_12(){
        suivant12.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[12].style.display ="none";
            afQuest[13].style.display ="block";
            // count13();   
        })
       }
       suivant_12()
        function suivant_13(){
            suivant13.addEventListener('click', (e)=>{
                e.preventDefault();
                afQuest[13].style.display ="none";
                afQuest[14].style.display ="block";
                // count14();   
            })
        }
        suivant_13()
      function suivant_14(){
        suivant14.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[14].style.display ="none";
            afQuest[15].style.display ="block";
            // count15();   
        })
      }
     function suivant_15(){
        suivant15.addEventListener('click', (e)=>{
            e.preventDefault();
            afQuest[15].style.display ="none";
            // afQuest[15].style.display ="block";
            // count15();   
        })
     }
     suivant_15()
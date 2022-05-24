if(!nom.value){
    erreurNom = "Veillez saisir le nom";
    e.preventDefault()
    if(erreurNom){
        document.querySelector('#erreur-nom').textContent = erreurNom;
        e.preventDefault()
    }
}

else if(!email.value){
    erreurEmail = "Veillez saisir l'email";
    e.preventDefault()
    if(erreurEmail){
        document.querySelector('#erreur-email').textContent = erreurEmail;
        e.preventDefault()
    }
}

else if(!nom.value && !email.value){
    erreurNom = "Veillez saisir le nom !";
    erreurEmail = "Veillez saisir l'email !";
    e.preventDefault()

    if(erreurNom && erreurEmail){
        e.preventDefault();
        document.querySelector('#erreur-nom').textContent = erreurNom;
        document.querySelector('#erreur-email').textContent = erreurEmail;
        e.preventDefault()
    }

}

else{
    alert('Felicitation !')
}



// if(!email.value){
//     erreurEmail = "Veillez saisir l'email !";
//     // console.log("Veillez saisir l'email")
// }

// if(!nom.value){
//     erreurNom = "Veillez saisir le nom !";
//     // console.log("Veillez saisir le nom !");
// }

// if(erreurEmail){
//     e.preventDefault();
//     document.querySelector("#erreur-email").textContent = erreurEmail;
//     return false;
// }

// else if(erreurNom){
//     e.preventDefault();
//     document.querySelector("#erreur-nom").textContent = erreurNom;
//     return false;
// }
// else{
//     alert('merci')
// }

})



function count1(){

    addEventListener('click', (e)=>{
        e.preventDefault();
        console.log('cool')
        let interval = 60;
        var countDown = setInterval(()=>{
            interval--;
            let progressWidth = interval / 60*100;
            if(interval > 0){
                progressBar.style.width = progressWidth++ +"%";
                timeSpan.innerHTML = interval + "s";
                console.log(timeSpan)
                checkColor(progressWidth)
            }else{
                clearInterval(countDown)
                progressBar.style.width = "0%";
                // timeSpan.innerHTML = "Game over";
                timeSpan.innerHTML = "0" + "s";
            }
        }, 1000)
    })

    const checkColor = (width) =>{
        if(width>60){
            progressBar.style.background = "green";
        }
        else if(width>30){
            progressBar.style.background = "green";
        }
        else{
            progressBar.style.background = "red";
        }
    }
}



// function suivant_1(){
//     suivant1.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[1].style.display ="none";
//         afQuest[2].style.display ="block";
//         count2();
//     })
// }
//  // BOUTTON SUIVANT2
// function suivant_2(){
//     suivant2.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[2].style.display ="none";
//         afQuest[3].style.display ="block";
//         count3();   
//     })
// }

// function suivant_3(){
//     suivant3.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[3].style.display ="none";
//         afQuest[4].style.display ="block";
//         count4();   
//     })
// }

// function suivant_4(){
//     suivant4.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[4].style.display ="none";
//         afQuest[5].style.display ="block";
//         count5();   
//     })
// }

// function suivant_5(){
//     suivant5.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[5].style.display ="none";
//         afQuest[6].style.display ="block";
//         count6();   
//     })
// }

// function suivant_6(){
//     suivant6.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[6].style.display ="none";
//         afQuest[7].style.display ="block";
//         count7();   
//     })
// }

// function suivant_7(){
//     suivant7.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[7].style.display ="none";
//         afQuest[8].style.display ="block";
//         count8();   
//     })
// }

// function suivant_8(){
//     suivant8.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[8].style.display ="none";
//         afQuest[9].style.display ="block";
//         count9();   
//     })
// }

// function suivant_9(){
//     suivant9.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[9].style.display ="none";
//         afQuest[10].style.display ="block";
//         count10();   
//     })
// }

// function suivant_10(){
//     suivant10.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[10].style.display ="none";
//         afQuest[11].style.display ="block";
//         count11();   
//     })
// }

// function suivant_11(){
//     suivant11.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[11].style.display ="none";
//         afQuest[12].style.display ="block";
//         count12();   
//     })
// }

// function suivant_12(){
//     suivant12.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[12].style.display ="none";
//         afQuest[13].style.display ="block";
//         count13();   
//     })
// }

// function suivant_13(){
//     suivant13.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[13].style.display ="none";
//         afQuest[14].style.display ="block";
//         count14();   
//     })
// }

// function suivant_14(){
//     suivant14.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[14].style.display ="none";
//         afQuest[15].style.display ="block";
//         count15();   
//     })
// }

// function suivant_15(){
//     suivant14.addEventListener('click', (e)=>{
//         e.preventDefault();
//         afQuest[14].style.display ="none";
//         afQuest[15].style.display ="block";
//         count15();   
//     })
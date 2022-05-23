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
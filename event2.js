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
//####################################################################"
const btn = document.querySelectorAll('.btn');
//####################################################################"
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
suivant15.addEventListener('click',suivantResPos);
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
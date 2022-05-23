function textNode(text){
    let newtext = document.createTextNode(text)
    let para = document.querySelector('#p');

    para.appendChild(newtext)
}

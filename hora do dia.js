function carregar(){
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('img')
let text = window.document.getElementById('text')
let date = new Date()
let horas = date.getHours()
msg.innerHTML= ("Agora são " + horas + " horas")
if (horas>=0 && horas<12){
    //Bom Dia!
    img.src = "Manhã.png"
    text.innerHTML = "Bom Dia!"
    document.body.style.
}else if (horas>=12 && horas<18){
    //Boa Tarde!
    img.src = "Tarde.png"
    text.innerHTML = "Boa Tarde!"
}else{
    //Boa Noite!
    img.src = "Noite.png"
    text.innerHTML = "Boa Noite!"
}
}
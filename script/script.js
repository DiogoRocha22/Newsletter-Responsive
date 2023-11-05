const email = document.getElementById('email')
const fcard = document.getElementById('card')
const sucess = document.getElementById('sucess')

function Validar(){
    if(email.value.includes('@')){
        fcard.style.display = 'none'
        sucess.style.display= 'flex'
        email.value = ''
    }else{
        email.style.border = '1px solid red'
        email.style.backgroundColor = 'pink'
        document.getElementById('msg-error').style.display = 'flex'
    }
}

function BackNormal(){
    if(email.value.includes('@')){
        email.style.border = '1px solid hsl(231, 7%, 60%)'
        email.style.backgroundColor = 'white'
        document.getElementById('msg-error').style.display = 'none'
    }
}

function DismissMessage(){
    fcard.style.display = 'flex'
    sucess.style.display= 'none'
}
    

setInterval(BackNormal, 1000)
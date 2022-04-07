const name2 = document.getElementById('name2')
const subject = document.getElementById('subject')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form2 = document.getElementById('form2')
const error = document.getElementById('error2')

form2.addEventListener('submit', (e) =>{
    let messageAlert = []
    if(name2.value === '' || name2.value == null){
        messageAlert.push('Name is required')
    }
    
    if(subject.value === '' || subject.value == null){
        messageAlert.push('Subject is required')
    }
    
    if(email.value === '' || email.value == null){
        messageAlert.push('Email is required')
    }
    
    if(message.value === '' || message.value == null){
        messageAlert.push('Message is required')
    }
    
    
    else if((name2.value != null || name2.value.length > 0) && (subject.value != null || subject.value.length > 0) && (email.value != null || email.value.length > 0) && (message.value != null || message.value.length > 0)){
        messageAlert.push('Message sent!')
    }

    if(messageAlert.length > 0){
        e.preventDefault()
        error.innerText = messageAlert.join(', ')
    }
    
})


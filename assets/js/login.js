//submitting for login and display error message if not filled in fields
const userName1 = document.getElementById('userName1')
const password1 = document.getElementById('password1')
const sixDigitPin1 = document.getElementById('sixDigitPin1')
const accountNumber1 = document.getElementById('accountNumber1')
const form3 = document.getElementById('form3')
const error3 = document.getElementById('error3')

form.addEventListener ('submit', (e) => {
    let messages2 = []
    
    if(userName1.value === '' || userName1.value == null){
        messages2.push('Username is required')
    }
    
    if(password1.value === '' || password1.value == null){
        messages2.push('Password is required')
    }
    
    if(password1.value.length < 8){
        messages2.push('Password must be at least 8 characters')
    }
    
    if(sixDigitPin1.value === '' || sixDigitPin1.value == null){
        messages2.push('Six Digit PIN is required')
    }
    
    
    if(sixDigitPin1.value.length != 6){
        messages2.push('PIN must be six digits')
    }
    
    
    if(accountNumber1.value === '' || accountNumber1.value == null){
        messages2.push('Account Number is required')
    }
    
    if(accountNumber1.value.length != 8){
        messages2.push('Account Number must be eight digits')
    }
    
    if(messages2.length > 0){
        e.preventDefault()
        error3.innerText = messages.join(', ')
    }
})
//submitting for register and display error message if not filled in fields
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const userName = document.getElementById('userName')
const password = document.getElementById('password')
const sixDigitPin = document.getElementById('sixDigitPin')
const accountNumber = document.getElementById('accountNumber')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener ('submit', (e) => {
    let messages = []
    if(firstName.value === '' || firstName.value == null){
        messages.push('First Name is required')
    }
    
    if(lastName.value === '' || lastName.value == null){
        messages.push('Last Name is required')
    }
    
    if(userName.value === '' || userName.value == null){
        messages.push('Username is required')
    }
    
    if(password.value === '' || password.value == null){
        messages.push('Password is required')
    }
    
    if(password.value.length < 8){
        messages.push('Password must be at least 8 characters')
    }
    
    if(sixDigitPin.value === '' || sixDigitPin.value == null){
        messages.push('Six Digit PIN is required')
    }
    
    if(sixDigitPin.value.length != 6){
        messages.push('PIN must be six digits')
    }
    
    if(accountNumber.value === '' || accountNumber.value == null){
        messages.push('Account Number is required')
    }
    
    if(accountNumber.value.length != 8){
        messages.push('Account Number must be eight digits')
    }
    
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
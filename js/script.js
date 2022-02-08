const button = document.querySelector('.button');
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener('click', function (){
    
    let input = document.getElementById('email').value;

    if(!input){
        document.querySelector('#validation').classList.remove('hidden');
    }
    else if(!input.match(pattern)){
        document.querySelector('#validation').classList.remove('hidden');
    }
    else{
        document.querySelector('#validation').classList.add('hidden');
    }
});
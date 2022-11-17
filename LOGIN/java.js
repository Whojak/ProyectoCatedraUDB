const form = document.getElementById('form');
const username = document.getElementById('username');
const password= document.getElementById('password');
const email = document.getElementById('email');
const date = document.getElementById('date');

form.addEventListener('submit', (e) =>{
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// body...
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const dateValue = date.value.trim();
	const passwordValue = password.value.trim();

	if (usernameValue === '') {
		//mostrar error  
		setErrorFor(username, 'El usuario no puede estar en blanco');
	}else {
		//add success class
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'El email no puede estar en blanco')
	} else if(!isEmail(emailValue)){
		setErrorFor(email, 'El email no es valido')
	}else {
		setSuccessFor(email)
	}

	if (dateValue === '') {
		setErrorFor(date, 'La fecha no puede estar en blanco');
	}else {
		//add success class
		setSuccessFor(date);
	}

	if (passwordValue === '') {
		setErrorFor(password, 'La contraseña no puede estar en blanco');
	}else {
		//add success class
		setSuccessFor(password);
	}

	
}

function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;

	formControl.className = 'form-control error'

}

function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email){
	return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
}

// window.location.href = "../INDEX/index.html";

function redirigir(){
	const username = document.getElementById('username').value;
const password= document.getElementById('password').value;
const email = document.getElementById('email').value;
const date = document.getElementById('date').value;


	if (username  && password  && email  && date ) {
		document.getElementById('submitButton').disabled = false;
		
		
	} else {
		document.getElementById('submitButton').disabled = true;
		
	}
}


function redirigir2(){
	window.location.href = "../INDEX/index.html";
	alert("Te has registrado correctamente")
}

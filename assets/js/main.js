// JS password generator !!

// Step 1: ask the user his name
const userName = prompt('Come ti chiami?');

// Step 2: ask for his surname
const userSurname = prompt(`Qual'è il tuo cognome?`);

// Step 3: ask for his favourite colour
const userFavoriteColor = prompt(`Qual'è il tuo colore preferito?`);

// Step 4: define current year
const currentYear =  `2022`;
// Take last two number
const yearPassword = currentYear.substring(2);

// Result: write the result on the page
const password = (userName + userSurname + userFavoriteColor + yearPassword);
console.log(password);

document.getElementById(`password_generator`).innerHTML = password;
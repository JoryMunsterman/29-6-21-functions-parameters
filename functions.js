/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "'Goedemorgen'";
}
const greeting = morningGreeter();
console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function getSchool() {
  return  '"Novi Hogeschool"'
}
const school = getSchool()
console.log(school)

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function compliment() {
  return '"Lekker bezig met die functies, Jan!"'
}
const compi = compliment()
console.log(compi)

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades () {
  return Array.prototype.slice.call(arguments);
}
const arr = getGrades ('8, 8.5, 6, 7')
console.log(arr)  //kan hier geen andere oplossing voor vinden. Zou anders moeten kunnen

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails () {
  console.log( { firstName: 'Jan', lastName: 'Janssen' } )
}
getDetails()

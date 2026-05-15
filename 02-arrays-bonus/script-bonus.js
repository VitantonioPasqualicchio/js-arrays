const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log('Elenco totale insegnanti: ', teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i=0; i < teachers.length; i++){
  reversedTeachers[i] = teachers[(teachers.length - 1) - i];
}

console.log('Elenco insegnanti invertito: ', reversedTeachers);

//-----------------------------------------------------------------------------------------------------//

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];

for (let i=0; i < teachers.length; i++){
  if (teachers[i].length >= 5) longNames[longNames.length] = teachers[i];
}

console.log('Elenco con solo insegnanti con un nome di lunghezza >= a 5 caratteri: ', longNames);

//-----------------------------------------------------------------------------------------------------//

// 3. Rimuovi 'Ed' dall'array teachers

let found = false

for (let i=0; i < teachers.length; i++){
  if (found === false && teachers[i] === 'Ed') {
        found = true;
        teachers[i] = teachers[i+1]
    }
  if (found === true) teachers[i] = teachers[i+1]
}

teachers.length = teachers.length - 1;

console.log('Elenco insegnanti senza Ed che è stato licenziato: ', teachers);

//-----------------------------------------------------------------------------------------------------//

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let isFabioPresent = false;

for (let i=0; i < teachers.length; i++){
  if (teachers[i] === 'Fabio') {
        isFabioPresent = true;
    }
}

console.log('Fabio c\'era nell\'elenco?: ', isFabioPresent);

//-----------------------------------------------------------------------------------------------------//

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

let teachersString = '';

for (let i=0; i < teachers.length; i++) {
    teachersString += teachers[i];

    // Se NON è l'ultimo elemento, aggiungo virgola e spazio
    if (i < teachers.length - 1) {
        teachersString += ', ';
    }
}

console.log('Elenco insegnanti concatenati in una stringa unica con virgole: ', teachersString);

//-----------------------------------------------------------------------------------------------------//
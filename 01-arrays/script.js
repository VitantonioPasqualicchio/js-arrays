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

//-----------------------------------------------------------------------------------------------------//

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

const fourthTeacher = teachers[3];

console.log('Il quarto insegnante è :', fourthTeacher);

//-----------------------------------------------------------------------------------------------------//

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers[4] = 'Patrick';
console.log('Elenco insegnanti aggiornato sostituendo il quinto insegnante con Patrick: ', teachers);

//-----------------------------------------------------------------------------------------------------//

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

for (let i=0; i < teachers.length; i++){
  if (i === (teachers.length - 1)) {
        const lastTeacher = teachers[i];
        console.log('Ultimo insegnante salvato: ', lastTeacher);
    }
}

// Se non lo facessi rimarrebbe della stessa lunghezza con un valore undefined come ultimo valore dell'array
teachers.length = teachers.length - 1;

console.log('Elenco insegnanti aggiornato cancellando l\'ultimo insegnante : ', teachers);

//-----------------------------------------------------------------------------------------------------//

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

const firstTeacher = teachers[0];

for (let i = 0; i < teachers.length; i++) {

    teachers[i] = teachers[i+1];
}

// Se non lo facessi rimarrebbe della stessa lunghezza con un valore undefined come ultimo valore dell'array
teachers.length = teachers.length - 1;

console.log('Primo insegnante rimosso:', firstTeacher);
console.log('Nuovo elenco insegnanti aggiornato:', teachers);

//-----------------------------------------------------------------------------------------------------//

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

const initialLength = teachers.length; // Salviamo la lunghezza prima di modificarla

for (let i = 0; i <= initialLength; i++) {
    if (i === initialLength) teachers[i] = 'Vanessa';
}

console.log('Elenco insegnanti aggiornato aggiungendo Vanessa alla fine:', teachers);

//-----------------------------------------------------------------------------------------------------//

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.length = teachers.length + 1; // Creo uno spazio vuoto in fondo

// Ciclo che parte dalla fine per non sovrascrivere gli elementi che sposta "a destra"
for (let i = teachers.length - 1; i > 0; i--) {
    teachers[i] = teachers[i - 1]; // Spostiamo a destra
}

teachers[0] = 'Sarah';
console.log('Elenco insegnanti aggiornato aggiungendo Sarah all\'inizio:', teachers);

//-----------------------------------------------------------------------------------------------------//

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;
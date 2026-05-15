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

// Parto a copiare l'array dall'indice 1 in poi, (l'indice 0 l'ho già salvato)
for (let i = 0; i < teachers.length; i++) {
    // Creo un nuovo array di appoggio per contenere i restanti
    const remainingTeachers = [];

    remainingTeachers[i] = teachers[i+1];
    teachers[i] = remainingTeachers[i];
}

// Se non lo facessi rimarrebbe della stessa lunghezza con un valore undefined come ultimo valore dell'array
teachers.length = teachers.length - 1;

console.log('Primo insegnante rimosso:', firstTeacher);
console.log('Nuovo elenco insegnanti aggiornato:', teachers);

//-----------------------------------------------------------------------------------------------------//

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;
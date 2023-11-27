/* 
    SOLUZIONE
    1 - Creare un array "lista_spesa" che contiene la lista della spesa.
    2 - inizializzare la variabile contatore i=0.
    3 - inizializzare una costante "list" dove gli assegnamo l'id della lista html 
    3 - Aprire il ciclo while (i < lista_spesa.length)
        4 - inizializziamo una costante "li" per creare l'elemento della lista.
        5 - assegnamo a "li" il valore si lista_spesa[i].
        6 - aggiungiamo "li" a "list".
        7 - incrementiamo i.
    3 - chiudiamo il while 
*/

const lista_spesa = ['farina', 'zuzzhero', 'uova', 'latte', 'burro', 'yogurt'];

const list = document.getElementById('lista');

let i = 0;
while (i<lista_spesa.length) {
    const li = document.createElement('li');
    li.innerText = lista_spesa[i];
    list.appendChild(li);
}


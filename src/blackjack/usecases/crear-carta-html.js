
/**
 * @param {{string}} carta 
 *@returns {HTMLImageElement} imagne de retorno 
 */ 
export const crearcartaHTML =(carta) =>{

  if (!carta) {throw new Error('La carta es un aragumento obligatorio')}
     // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}
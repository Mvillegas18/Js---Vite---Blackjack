//Esta funcion me permite tomar una carta

/**
 * Esta funcion me permite tomar una carta
 * @param {Array<string>} deck es un arreglo de String
 * @returns {string} Retorna la carta del Deck 
 */
export const pedirCarta = (deck) => {
  
  if (!deck ||  deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}
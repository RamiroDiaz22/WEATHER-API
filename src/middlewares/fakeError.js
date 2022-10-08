// Crea un numero random, el cual sera evaluado.
// En el caso de que este nùmero, sea menor a 0.15, se ejecutara nuevamente la función
// aumentando el valor del contador de fallos.
// Si falla 3 veces seguidas, enviará un error al cliente.
const fakeError = (req, res, next) => {
  const checkProbability = (n = 0) => {
    const probability = Math.random();

    if (n === 3) {
      return res.status(500).end("Sorry, the search has failed");
    }
    if (probability < 0.15) {
      return checkProbability(n + 1);
    }

    return next();
  };
  checkProbability();
};

module.exports = fakeError;

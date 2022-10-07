export const delayTime = (req, res, next) => {
  // Se toma la hora en la que se incio la petición
  const hour = new Date().getTime();

  if (!req.dateFromMiddleware) {
    // Se la guarda, para su uso futuro
    req.dateFromMiddleware = hour;
    console.log("Primer Time");
    return next();
  }

  // Se toma la hora en la que se finaliza la peticion
  const hour2 = req.dateFromMiddleware;
  // Se busca el delay que hubo entre ella y se lo guarda en el header
  let difference = hour - hour2;
  req.headers["time-delay"] = difference;
};

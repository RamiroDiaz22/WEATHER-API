const delayTime = (req, res, next) => {
  const date = new Date().getTime();
  const date2 = req.date;

  const difference = date - date2;

  res.set("time-delay", difference);

  //-------------------------------------------
  // Se toma la hora en la que se incio la petición
  // const hour = new Date().getTime();

  // if (!req.dateFromMiddleware) {
  //   // Se la guarda, para su uso futuro
  //   req.dateFromMiddleware = hour;
  //   return next();
  // }

  // // Se toma la hora en la que se finaliza la peticion
  // const hour2 = req.dateFromMiddleware;
  // // Se busca el delay que hubo entre ella y se lo guarda en el header
  // let difference = hour - hour2;
  // req.headers["time-delay"] = difference;
};

module.exports = delayTime;

const request = require("request");
const constants = require("../config.js");
const Cities = require("../models/Cities.js");

//Extrae los datos de la base de datos
//Devuelve un array vacio en caso de que no se encuentre
const getDb = (name) => {
  return Cities.find({ name });
};

const weatherData = async (req, res, next) => {
  try {
    req.date = new Date().getTime();
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "City name is required" });
    }

    // En caso de que exista, los valores seran devueltos
    const dataDb = await getDb(name.toLowerCase());
    if (dataDb.length !== 0) {
      next();
      return res.status(200).json(dataDb);
    }

    //Accede a la API en caso de que sea la primera vez que se busca la ciudad
    const url = `${constants.weatherApi.BASE_URL}${name}&appid=${constants.weatherApi.SECRET_KEY}&lang=sp`;
    request({ url, json: true }, async (error, { body }) => {
      if (body.cod !== 200) {
        return res.status(400).json({ message: body.message });
      }

      //Almacena los datos de la cidad en la base de datos, para una nueva llamada futura
      const newCity = await new Cities({
        name: body.name.toLowerCase(),
        temp: body.main.temp,
        temp_min: Math.round(body.main.temp_min),
        temp_max: Math.round(body.main.temp_min),
        img: body.weather[0].icon,
      }).save();

      next();
      return res.status(200).json(newCity);
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = weatherData;

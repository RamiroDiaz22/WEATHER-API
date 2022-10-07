import request from "request";
import { constants } from "../../config.js";
import Cities from "../models/Cities.js";

//Extrae los datos de la base de datos
//Devuelve un array vacio en caso de que no se encuentre
const getDb = (name) => {
  const dataDb = Cities.find({ name });
  return dataDb;
};

export const weatherData = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(500).json({ message: "City name is required" });
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
      //Almacena los datos de la cidad en la base de datos, para una nueva llamada futura
      const newCity = await new Cities({
        name: body.name.toLowerCase(),
        temp: body.main.temp,
      }).save();
      next();
      res.status(200).json(newCity);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

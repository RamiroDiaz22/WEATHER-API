import axios from "axios";
import request from "request";

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
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

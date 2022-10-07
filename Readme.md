# Weather API

## Instrucciones

Desde la carpeta `WEATHER-API` se pueden ejecutar, para instalar las dependencias necesarias, el siguiente comando:

#### `npm install`

Se podra comenzar a obtener información, mediante una peticion GET, de forma local desde http://localhost:4000, proporcionando desde el body de tu aplicación el nombre de la ciudad que desea.

#### `Ejemplo:`

name: "Francia"

### Datos

Devolverá un JSON con name, temp (en grados farenheit).

#### `Ejemplo:`

{
name: "Francia",
temp: 230
}

#### Adicionales

Desde el header, se podra acceder a el delay o timepo de carga, a través de la clave "time-delay"

# Weather API

## Configuración inicial

1. Ejecutar `npm install` desde la carpeta "WEATHER-API".
2. Ejecutar `npm test` para correr los tests.
3. Ejecutar `npm run dev` para inicializar el servidor localmente (Se reseteará automáticamente si se realiza algún cambio).
4. El servidor ya se encuentra configurado, se puede hacer requests a `http://localhost:4000`.

### Nota

Deberá crear una base de datos, en MongoDB, llamada `weatherdb` y conectarla en el archivo `./database.js`.

## Endpoin

```
GET /api/city
```

### Datos

Devolverá devolverá la siguiente estructura (temp en grados `Fahrenheit`).

```js
{
name: "Francia",
temp: 298.14,
temp_min: 285.14,
temp_max: 298.14,
img: "http://openweathermap.org/img/wn/04d@2x.png",
}
```

- `name` de tipo String
- `temp` de tipo Number
- `temp_min` de tipo Number,
- `temp_max` de tipo Number,
- `weather_icon` de tipo String,

### Adicionales

Desde el `header`, se podrá acceder a el delay o tiempo de carga, a través de la propiedad `time-delay`

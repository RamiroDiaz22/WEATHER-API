# Weather API

## Configuración inicial

1. Ejecutar `npm install` desde la carpeta "WEATHER-API".
2. Ejecutar `npm test` para correr los tests.
3. Ejecutar `npm run dev` para inicializar el servidor localmente (Se reseteará automáticamente si se realiza algún cambio).
4. El servidor ya se encuentra configurado, se puede hacer requests a `http://localhost:4000`.

## Endpoin

```
GET /api/city
```

### Datos

Devolverá devolverá la siguiente estructura (temp en grados `Fahrenheit`).

```js
{
name: "Francia",
temp: 230
}
```

- `name` de tipo string
- `temp` de tipo number

### Adicionales

Desde el `header`, se podrá acceder a el delay o tiempo de carga, a través de la propiedad `time-delay`

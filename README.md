# REPASO DE EXPRESS - MÓDULO 2 | COHORTE FT47 📆

```
 _____         _                  _
|  ___|       (_)                | |
| |__   _ __   _  ___   ___    __| |  ___  ___
|  __| | '_ \ | |/ __| / _ \  / _` | / _ \/ __|
| |___ | |_) || |\__ \| (_) || (_| ||  __/\__ \
\____/ | .__/ |_||___/ \___/  \__,_| \___||___/
       | |
       |_|
```

La siguiente es sólo una guía, tienen libertad de modificar lo que quieran.

La idea es practicar y hacer lo que más nos gusta... CODEAR !!!

Pueden hacerlo en grupo, o individualmente y luego hacer una puesta en común.

Aún no trabajamos con bases de datos, pero podemos simular las peticiones a nuestros datos locales.

Recuerda utilizar siempre buenas prácticas, y retornar respuestas también en casos de error.

Con mucho 💛 para la Cohorte FT47

Ariel Romero...

---

## Objetivos

Desarrollar el servidor de una App que permita administrar episodios, mediante la cual se repasará Express.

## Estructura del proyecto

Utilizaremos la estrategia "modular", por lo que la estructura de archivos y carpetas sugerida es la siguiente:

```
/ m2-episodes-ft47
    / src
        / controllers
        / routes
        / services
        / utils
          server.js
      index.js
```

## 1. Iniciamos un nuevo proyecto de NODE JS

- Abrimos terminal ubicados en la raíz del proyecto
- Corremos el comando de node:

```bash
npm init -yes
```

## 2. Instalar las dependencias necesarias y crear script

- cors
- express
- morgan (opcional)
- nodemon (como dependencia de desarrollo)

```bash
npm install cors express morgan
npm install --save-dev nodemon
```

- Crear el script en el package.json para poder levantar servidor con nodemon

```json
"scripts": {
    "start": "nodemon index.js"
```

## 3. Levantar servidor

- Modifica los archivos necesarios para levantar el servidor.
- Crea un servidor modularizado.
  - El archivo "index.js" sólo icluirá el ".listen"

## 4. Creando las rutas principales

- Modularizar cada ruta principal en un archivo distinto.
- Utilizaremos las siguientes rutas principales.
  - localhost:3000/
  - localhost:3000/user
  - localhost:3000/episode

## 5. Configurando Middlewares

- Configura los Middlewares necesarios, cors y morgan
- No olvides utilizar el middleware `app.use(express.json())`

## 6. Estructura de allUsers

- Crearemos dentro de la carpeta "utils" el archivo "dataBase.js", que simulará nuestra base de datos.
- Dentro de este archivo crea la variable "dataBase" (no olvides exportarla...).
  - Será un objeto, donde almacenaremos a todos los "usuarios" y "episodios".
  - Tendrán la siguiente estructura:

```js
dataBase = {
  allUsers: [
    {
      name: "Rick",
      email: "rick@gmail.com",
      password: "1234",
    },
  ],
  allEpisodes: [
    {
      id: 2,
      name: "Nombre del Episodio",
      episode: "Season 01 - Episode 02",
      completed: false || true,
    },
  ],
};
```

- Tomaremos por id del usuario su email.
- Tomaremos la propiedad "id", "name" y "episode" de la Rick&Morty API.

## 7. Ruta POST /user

- Recibe por body los datos necesarios: name, email y password.
  - Valida que no se haya registrado el email ingresado.
  - Crea un nuevo objetos con los datos recibidos del usuario.
  - Agrega el objeto creado al array "allUsers".
  - Responde con status 200 y el objeto creado.
  - Extra Credit: Puedes validar formato del email y largo de la contraseña.

## 8. Resto del CRUD de /user

- Crea las rutas que permitan:
  - Modificar un usuario
  - Traer información de un usuario
  - Eliminar un usuario
- Para indicar cuál es el usuario elegido puedes utilizar "Params".

## 9. POST de episodes

- Para hacer las peticines a la API de Rick & Morty utilizaremos "axios"
  - Instalaremos "axios":

```bash
npm install axios
```

- Recibe por params el id del episodio que deseamos agregar.
  - Realiza la petición "axios" a la siguiente url:
    - `https://rickandmortyapi.com/api/episode/${id}`
  - Crea un nuevo "episode" con las propiedades:
    - id: toma el valor desde lo recibido por la API
    - name: toma el valor desde lo recibido por la API
    - episode:toma el valor desde lo recibido por la API
    - completed: que se inicializa en "false" (Esta propiedad le permitirá al usuario indicar si ya vió el episodio)
  - Agrega el episodio creado al array de "allEpisodes"
  - Devuelve el array de "allEpisodes"

## 9. Resto del CRUD de episodes

- Creamos el resto del CRUD para la gestión de episodios
  - Read: Leer
  - Update: Actualizar
    - Esta ruta recibirá por body el "id" del episodio y los datos que se desean modificar
    - Intenta que esta ruta pueda modificar una o todas las propiedades recibidas
  - Delete: Borrar

## 10. Extra Credit

### Crear sistema de autenticación por token (como el visto en clase)
- Ten en cuenta que tenemos varios usuarios, por lo que debemos validar según los datos enviados
- Podemos simular un "token" para enviarle al cliente, y solicitarlo en nuestras rutas
- También podemos utilizar la librería [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para generar un token real


## Sobre la Configuración de GIT

- Podemos revisar nuestras credenciales ingresando por consola:

```bash
git config --list
```

- Configurando nuestras credenciales:
  - Por ejemplo:
    - Si nuestro usuario es CohorteFT38b
    - Y nuestro email es: ejemplo@gmail.com

```bash
git config --global user.name "CohorteFT38b"
git config --global user.email ejemplo@gmail.com
```

- Y para subir nuestros cambios a GitHub:

```bash
git add .
git commit -m "aquí nuestro comentario"
git push
```

⚠️ NO OLVIDAR CHEQUEAR QUE LOS CAMBIOS SE REFLEJEN EN EL REPO DE GITHUB ⚠️

---

## ÉXITOS 👍

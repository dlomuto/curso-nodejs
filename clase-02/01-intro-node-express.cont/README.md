# Clase 01 - Node.JS Backend

## Express.js
Es un framework de desarrollo web para Node.js que se usa para crear aplicaciones y APISs de forma rapida y sencilla.

<https://expressjs.com/>

```sh
npm i express
```

## Al hacer el comando anterior se van a crear y modficar los siguientes arhivos

* package.json -> Las dependencias y scripts.
* package-lock.json -> Son las dependencias para que si borro los node_modules puedo gracias al package.json recuperar todo de una manera mas agil.
* node_modules/ -> carpeta donde voy a encontrar todas las dependencias del proyecto.(No subo ni guardo dentro de un repositorio la carpeta node_modules/)

## Instalar dependencias

```sh
npm i # Crea la carpeta node_modules/
```

# Clase 02 - Node.JS Backend

## Repaso

### Inicializamos un proyecto NPM

Creamos antes de inicializar un proyecto NPM el archivo **server.js**
```sh
npm init -y
```

## Protocolo HTTP (Verbos o metodos)

* GET: obtener recursos
* POST: crear un recurso
* PUT: editar un recurso
* DELETE: borrar un recurso

## CRUD

* C:CREATE -> POST
* R:READ -> GET
* U:UPDATE -> PUT o PATCH
* D:DELETE -> DELETE
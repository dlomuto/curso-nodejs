# Clase 01 -  Node.JS Backend

## INSTALACIONES NECESARIAS.

* Visual Studio Code <https://code.visualstudio.com/>
* GIT <https://git-scm.com/install/windows>
* GitHub <https://github.com/>
* Node <https://nodejs.org/es/>


## Comprobar si tengo instalado GIT

```sh
git --version
```

## Comprobar si tengo instalado NODE y NPM

```sh
node --version
npm --version
```

## Markdown (MD)

Me permite tomar **apuntes**, hacer resumenes, incluir pasos de instalacion del proyecto, etc

## Gestor de paquetes (NPM)
Node Package Manager me permite gestionar las dependencias de un proyecto Node.

> Pagina web donde se encuentran los paquetes de Javascript

<https://www.npmjs.com/>

## Inicializar un proyecto de NODE

```sh
npm init -y # el flag -y me permite indicarle a todo que si.
```
> Genera un archivo llamado package.json
Me va a permitir gestionar un proyecto de NODE.

## Listar scripts que tengo

```sh
npm run
```
## Casos particulares de npm run

```sh
npm start # generalmente arranca el proyecto en produccion.
npm test # generalmente se utiliza para correr la bateria de tests.
```

## Que es GIT?
GIT sirve pare registar,organizar y controlar los cambios de un proyecto (codigo fuente) a lo largo le tiempo. Voy a tener historial de los cambios en el tiempo.

* No perder trabajo.
* Trabajar en equipo sin solaparse.
* Hacer pruebas de codigo sin temor.
* Saber que cambio y cuando.

## Inicializar un proyecto de GIT

```sh
GIT init # crear una carpeta oculta donde git va gestionando los cambios (.git)
```

## Ver en que estado y area se encuentra mi codigo

```sh
git status
```

> Estados

* Untracked -> git sabe que los archivos existen pero no sabe su contenido ni puede versionarlos.
* Staged -> los archivos estan en zona de confirmacion listos para poder hacer un commit.
* Tracked -> Archivo yau en el repositorio local
* Modified -> Significa que entre el working directory y el Local repo hay cambios

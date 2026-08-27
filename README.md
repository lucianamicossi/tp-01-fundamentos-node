# Trabajo práctico 01

## Descripción

Este proyecto reúne 3 evidencias de la primera semana de fundamentos de Node.js.

La primera corresponde a index.js, que construye una ficha de un videojuego con datos propios,recibe el nombre del estudiante mediante process.argv, muestra la versión de Node.js y la plataforma del sistema, y guarda la ficha en un archivo de texto.

La segunda corresponde a orden-event-loop.js, demuestra el orden de ejecución entre el código principal y una tarea programada mediante setTimeout(..., 0).

La tercera corresonde a README.md, explica como ejecutar los programas, donde se genera el archivo y responde preguntas sobre los conceptos trabajados

El trabajo practico no utiliza paquetes de NPM, servidores, bases de datos, promesas ni async/await.

## Cómo ejecutar

Es necesario tener Node.js instalado.

Para ejecutar index.js sin proporcionar un nombre:

node index.js

Para ejecutar index.js con el nombre del estudiante:

node index.js Luciana

Para ejecutar el programa que demuestra el orden del event loop:

node orden-event-loop.js

La salida esperada es:

Comienza el programa
Termina el código principal
Se ejecuta la tarea programada

## Archivo generado

Al ejecutar index.js, el programa crea automáticamente la carpeta salida y dentro de ella genera el archivo:

salida/ficha-videojuego.txt

Se muestra en la terminal y también se guarda en este archivo.

La carpeta y el archivo son creados por el programa utilizando node:fs. Las rutas se construyen utilizando node:path.

Si se ejecuta nuevamente el programa, el archivo se actualiza con la nueva información sin generar errores.

## Conceptos

### 1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

JavaScript es el lenguaje que usamos para escribir nuestros codigos.

V8 es el motor que se encarga de ejecutar el código JavaScript. Node.js usa este motor para poder ejecutar JavaScript.

El runtime de Node.js es el entorno que permite usar JavaScript fuera del navegador. Además, nos da herramientas para hacer cosas como trabajar con archivos, carpetas y obtener información del sistema.

### 2. ¿Por qué el callback de `setTimeout(..., 0)` se ejecuta después del código principal?

Aunque `setTimeout` tenga un tiempo de `0` milisegundos, su callback no se ejecuta inmediatamente. Primero debe terminar el código principal que se está ejecutando.

Después, el event loop puede tomar la tarea programada y ejecutar su callback. Por eso primero termina el código principal y luego se muestra el mensaje del `setTimeout`.

### 2. ¿Por qué el callback de `setTimeout(..., 0)` se ejecuta después del código principal?

Aunque pongamos `0` en `setTimeout`, el callback no se ejecuta inmediatamente. Primero debe terminar el código principal y después se ejecuta la tarea programada.

Por eso primero aparece el mensaje del comienzo, después el del final del código principal y por último el mensaje del `setTimeout`.

### 3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

La I/O bloqueante hace que el programa tenga que esperar a que termine una tarea antes de seguir con lo que viene después.

En cambio, la I/O no bloqueante permite que el programa siga haciendo otras tareas mientras espera que termine esa tarea.

En este trabajo usamos `fs.writeFileSync()`, que es bloqueante porque el programa espera a que termine de guardar el archivo para continuar.

### 4. ¿Qué responsabilidades cumplen `node:path` y `node:fs` en `index.js`?

`node:path` permite trabajar con rutas de archivos y directorios. En este proyecto se utiliza `path.join()` para construir la ruta de la carpeta `salida` y del archivo `ficha-videojuego.txt`.

`node:fs` permite trabajar con el sistema de archivos. Se utiliza `fs.mkdirSync()` para crear la carpeta `salida` y `fs.writeFileSync()` para crear y guardar la ficha en el archivo de texto.

# Desafío - Cafetería Nanacao ☕

En este desafío, se desarrollaron pruebas unitarias para la API REST de la Cafetería Nanacao, utilizando **Jest** y **Supertest**. El objetivo es asegurar que todas las rutas y funcionalidades críticas de la API funcionen correctamente, aplicando diferentes **matchers** y comprobando respuestas HTTP.

## Descripción 📋

La Cafetería Nanacao está abriendo una nueva sucursal y necesita asegurar la estabilidad de su API. Para ello, se requiere desarrollar pruebas unitarias que validen las principales operaciones CRUD de la API.

## Requerimientos del Desafío 🎯

1. **Testear la ruta GET /cafes**:
   - Asegurarse de que retorna un código de estado 200 y un array con al menos un objeto.
   - **Puntaje**: 3 puntos.
   
2. **Comprobar la ruta DELETE /cafes/:id**:
   - Verificar que retorna un código 404 cuando se intenta eliminar un café con un ID inexistente.
   - **Puntaje**: 2 puntos.

3. **Probar la ruta POST /cafes**:
   - Validar que agrega un nuevo café y devuelve un código 201.
   - **Puntaje**: 2 puntos.

4. **Testear la ruta PUT /cafes/:id**:
   - Comprobar que devuelve un código 400 si el ID en los parámetros no coincide con el ID en el cuerpo de la solicitud.
   - **Puntaje**: 3 puntos.

## Archivos del Proyecto 📂

- **server.spec.js**: Contiene las pruebas unitarias utilizando Jest y Supertest.
- **index.js**: Archivo principal del servidor que gestiona las rutas y las operaciones CRUD de la API.
- **package.json**: Archivo que define las dependencias del proyecto.

## Pruebas Unitarias 🔧

### Prueba 1: [GET /cafes]
- **Descripción**: Verifica que la ruta `/cafes` devuelve un status 200 y un array con al menos un objeto.
- **Resultado Esperado**: Status 200, respuesta es un array de al menos un elemento.

### Prueba 2: [DELETE /cafes/:id]
- **Descripción**: Comprueba que se retorna un status 404 al intentar eliminar un café con un ID inexistente.
- **Resultado Esperado**: Status 404.

### Prueba 3: [POST /cafes]
- **Descripción**: Valida que al crear un nuevo café, se devuelve un status 201 y que el café creado está en la respuesta.
- **Resultado Esperado**: Status 201, el café creado está en la respuesta.

### Prueba 4: [PUT /cafes/:id]
- **Descripción**: Comprueba que al intentar actualizar un café con un ID que no coincide con el del payload, se devuelve un status 400.
- **Resultado Esperado**: Status 400.

## Instalación y Ejecución 🚀

### Requisitos

- Node.js y npm.

### Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Inicia el servidor con `npm run dev`.
4. Ejecuta las pruebas con `npm test`.

## Tecnologías Utilizadas 💻

- **Node.js**
- **Express.js**
- **Jest**
- **Supertest**

## Mejoras Futuras 🚀

- Ampliar la cobertura de pruebas para incluir más casos extremos.
- Integrar pruebas de integración y de aceptación.
- Implementar un sistema de autenticación para las rutas protegidas.
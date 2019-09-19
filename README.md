
[![Front Status](https://img.shields.io/badge/FrontStatus-Online-green)](https://st0263-v8.tk)
[![ Banck status](https://img.shields.io/badge/ApiStatus-Online-green)](https://api-v8.tk)


# ST0263-P2
Proyecto 2 Tópicos especiales en telemática (aplicación web de registro de comentarios)

## Integrantes

* Juan Gonzalo Quiroz Cadavid
* **Rol ->** Alta Disponiblidad
* **Correo ->** jquiro12@eafit.edu.co

----

* Valentino Malvarmo Paredes
* **Rol ->** Rendimiento
* **Correo ->** valentarmo@gmail.com
----

* Willy
* **Rol ->** Seguridad
* **Correo ->** wrcadenasm@eafit.edu.co

## Direcionamiento del Repositorio


## Especificaciones de Requisitos no funcionales

* **Disponibilidad**: Consiste en mediante
* **Seguridad**:
* **Rendimiento** : Se refiere a la velocidad en que páginas web son descargadas y renderizadas en el navegador del usuario, debería ser de alrededor de 5 segundos utilizando https.

## Rediseño de la Aplicacion

### Balanceadores
* Se creo 2 balanceadores de carga, tanto para balancear el frontend como el backend, implementanndo un pool de direcciones, ambos con un cifrado SSL y direccion DNS propia(HA)
### Frontend
* Se quito la capa de SSL, dejando el trabajo a los balanceadores y reduciendo complejidad (HA)
* Se cambio el enrutamiento de la API, y se apunto a otro balanceador para reducir carga (HA)
* Adición de cookies
### Backend
* Se aplico politica de Faill over y Faill back hacia la persistencia (HA)
* Se ccambiaron los puertos para mas dinamismo (HA)
* Adición de cookies
### Database
* Se aplico redundancia de los datos, creando un Cluster de Mongo con dos servidor uno como Master y otro como Slave, ambos mantienen una sincroninzacion de los datos. (HA)

## Diseño para la escalabiliad

### Seguridad
----
#### Mejores prácticas

* Proteccion con Https para evitar ataques de tipo Man-in-the-middle
* Definicion de politicas de creacion para passwords más fuertes
* Ataques de tipo Sql son evitados por la naturaleza de la base de datos y el framework express

#### Herramientas

* Expresiones regulares

### Alta disponibilida
----
#### Patrones de arquitectura

* Esquemas redundantes
* Bajo Acoplamiento
* Arquitecturas Reactivas

#### Mejores prácticas

* Tener multiples instancias corriendo para un mismo servicio
* Balancear las cargas usando politicas probadas
* Infraestructura como Codigo
* Services register / discovery
* Cluster de base de datos con redundancia.

#### Herramientas

* Consul
* Jenkins
* Docker
* Kubernetes

### Rendimiento
----
#### Patrones de arquitectura

Página web enriquecida

#### Mejores prácticas

* Compresión de datos en el servidor
* Responsive design
* Fusión de archivos js, css, html
* Minimización de archivos js, css, html
* Uglificación de archivos resultantes

#### Herramientas

* jmeter
* Angular CLI

## Otra informacion relevante

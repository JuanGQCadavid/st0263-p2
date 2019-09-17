
[![Front Status](https://img.shields.io/badge/FrontStatus-Online-green)](https://st0263-v8.tk)
[![ Banck status](https://img.shields.io/badge/ApiStatus-Online-green)](https://api-v8.tk)


# ST0263-P2
Proyecto 2 Tópicos especiales en telemática (aplicación web de registro de comentarios)

## Integrantes

* Juan Gonzalo Quiroz Cadavid
* **Rol ->** Alta Disponiblidad
* **Correo ->** jquiro12@eafit.edu.co

----

* Paredes
* **Rol ->** 
* **Correo ->** 
----

* Willy
* **Rol ->** 
* **Correo ->** 

## Direcionamiento del Repositorio


## Especificaciones de Requisitos no funcionales

* **Disponibilidad**: Consiste en mediante
* **Seguridad**:
* **Rendimiento** :

## Rediseño de la Aplicacion

### Balanceadores
* Se creo 2 balanceadores de carga, tanto para balancear el frontend como el backend, implementanndo un pool de direcciones, ambos con un cifrado SSL y direccion DNS propia(HA)
### Frontend
* Se quito la capa de SSL, dejando el trabajo a los balanceadores y reduciendo complejidad (HA)
* Se cambio el enrutamiento de la API, y se apunto a otro balanceador para reducir carga (HA)
### Backend
* Se aplico politica de Faill over y Faill back hacia la persistencia (HA)
* Se ccambiaron los puertos para mas dinamismo
### Database
* Se aplico redundancia de los datos, creando un Cluster de Mongo con dos servidor uno como Master y otro como Slave, ambos mantienen una sincroninzacion de los datos. (HA)

## Diseño para la escalabiliad

### Seguridad

### Alta disponibilida

### Rendimiento

## Otra informacion relevante

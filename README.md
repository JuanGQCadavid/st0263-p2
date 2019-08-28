# ST0263-P1
Proyecto 1 Tópicos especiales en telemática (aplicación web de registro de comentarios)

# Tecnologias utilizadas
* Front-end ------> Angular
* Back-end -------> Express (Javascript)
* Base de datos --> Mongodb
* Servidor web ---> Nginx

# Consideraciones
* No se utilicé cookies

# Uso
* Clonar el repositorio
    * ```$ git clone https://github.com/fighur/ST0263-P1.git```
* Ir al directorio del proyecto
    * ```$ cd ST0263-P1```
* Cambiar URL en FakeTwitter/src/app/shared/baseurl.ts por la URL del servidor
* (Opcional) https
    * ```$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout FakeTwitter/ssl/nginx.key -out FakeTwitter/ssl/nginx.crt```
* Ir al directorio base y construir el proyecto
    * ```$ docker-compose build```
* Desplegar el proyecto
    * ```$ docker-compose up```
* Crear una cuenta dando click en sign up
* Si la creación fué exitosa debería aparecer un botón debajo del formulario de filtro con la etiqueta ```Compose``` para crear un comentario.
* Para editar o eliminar un comentario, primero se debe ingresar con una cuenta. Y si la cuenta tiene comentarios asociados a ella, apareceran dos botones, ```Edit``` y ```Delete``` en la parte de abajo de estos comentarios.
* Para ver cambios en los comentarios dar click al botón ```Refresh```.

# Version DCA
En la rama 'dca'.

URLs webapp (funciona con http y https):
* jortizp.dis.eafit.edu.co

# Version AWS
En la rama 'aws'.

URLs webapp (funciona con http y https):
* valentarmo-st0263p1.tk
* www.valentarmo-st0263p1.tk

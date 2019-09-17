# Bitácora

## 26-08-2019 - 01-09-2019
### Progreso en proyecto 2 Performance
* Checklist de performance teniendo en cuenta el libro:
- [x] Jmeter tests antes de mejoras.
- [x] Jmeter tests después de mejoras.
- [x] Responsive design.
- [x] Optimizar performance de nginx.
- [x] Reducir tamaño de recursos estáticos.
- [x] Distribución geográfica (no aplica).
- [ ] Repetir tests después de realizadas las tareas de disponibilidad y seguridad.

## 02-09-2019 - 08-09-2029
#### Tests antes de mejoras
---
![Tiempo de carga 1](performance/load_time/before1/png)

![Tiempo de carga 2](performance/load_time/before2.png)

[jmeter](performance/jmeter/before_1024)

#### Tests después de mejoras
---
El tiempo de carga pasó de ~40s a ~2s y las TPS pasaron de 3.7 a 132.37

![Tiempo de carga 1](performance/load_time/after1.png)

![Tiempo de carga 2](performance/load_time/after2.png)

[jmeter](performance/jmeter/after_1024)

#### Tests después de realizadas las tareas de disponibilidad y seguridad
---
El tiempo de carga subio una fracción a alrededor de 3s y las TPS pasaron de 132.37 a 

![Tiempo de carga](performance/load_time/integrated.png)

[jmeter](performance/jmeter/integrated)

## 11-09-2019
Adición de cookies a la página, y corrección de bug que hacía que fallara la actualización de la página en http.

## 15-09-2019
#### Atributos de Seguridad - William Cadenas
En las estrategias que se pueden tomar para lograr cumplir con los atributos deseados se encuentra las siguientes tres capas: Confidencialidad, Integridad y Disponibilidad.

La confidencialidad trata de mantener todos los datos seguros y no pueden ser expuestos a usuarios que no tengan el permiso requerido para ver dichos datos. En nuestra app no existen datos delicados pero mas sin embargo las contraseñas el cual es el único dato delicado se encuentra protegido en la base de datos con una encriptación la cual le provee el atributo de confidencialidad.

Integridad se trata de lograr que todos los datos no se afectados por las transacciones realizadas por el sistema y además no proporcionar datos corruptos. En nuestra app se encuentran como dato sensible los Tweets los cuales no poseen ningún momento en que se les pueda modificar por dos transacciones la tiempo, y lo único que podría verse comprometido es mientras viajan pero los servidores están en https así que cualquier ataque de Man-in-the-Middle está cubierto.

Por último está la capa de disponibilidad la cual se mezcla con la de mi compañero Juan el cual se está encargando de que el servidor pueda soportar fallos y funcionar con un balanceador de carga para resolver cualquier imprevisto aplicando Failover y otras técnicas de crecimiento horizontal.


### Esquema seguido para detectar que atributo de seguridad implementaríamos

Guiándonos del texto guía seguimos la metodología propuesta la cual consiste en una serie de pasos para proponer políticas de seguridad acordes al proyecto o negocio y así poder atacar los puntos más débiles primero y darles un valor en una tabla en la cual se mide el impacto y la probabilidad dando como resultado bajo, medio y alto. Y ya con esto seremos capaces de escoger políticas para que se encarguen de los diferentes causantes("threats") de dichas vulnerabilidades.

### Políticas implementadas
* Data Transmission layer: se implementó https el cual ya venía desde proyecto 1 pero de igual forma se volvió a procurar que la página tuviese este puerto seguro para proteger la transmisión de la información sensible y los posibles ataques de Man-in.the-middle.

* Password Strength Policy: se implementó una serie de políticas para la construcción de las contraseñas de la plataforma ya que notamos que uno de los puntos vulnerables con las contraseñas que el usuario puede escoger, siendo estas muy fáciles de descifrar y exponiendo la seguridad de los mismos.
    * Deben tener al menos 8 caracteres.
    * Deben ser alfanumericos (osea contener letras y números).
    * Deben tener por lo menos una letra en Mayúscula y una en Minúscula.
    * Y por último contener al menos un carácter especial.

* Otros: se analizan problemas como los de SQL-inyection los cuales son muy comunes también pero gracias a la naturaleza de nuestra base de datos, la cual es Mongodb no tenemos ese tipo de vulnerabilidades por la forma en cómo se realizan los queries. 


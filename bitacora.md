# Bitácora

## 20-07-2019 - 21-07-2019 (Semana 1)
### MOOC DevOps
Inscripción a curso de devops en coursera ([Continuous Delivery & DevOps by University of virginia](https://www.coursera.org/learn/uva-darden-continous-delivery-devops/home/welcome)).
Desarrollo de la primera semana de contenido:
* Qué es DevOps? Integración de los roles de developer, tester y ops a lo largo de la "linea de entrega" de un proyecto.
* Para? Mejorar velocidad de despliegue.
* Linea de entrega automática.
* Linea de entrega: Idea -> Software -> Pruebas unitarias -> Pruebas de integración -> Pruebas de sistema -> Despliegue

### Progreso en proyecto 1
* Creación de máquina virtual en aws e instalación de git y docker
* Aprendiendo Javascript NodeJs y Angular

## 22-07-2019 - 28-07-2019 (Semana 2)
### MOOC DevOps
* Desarrollo de la semana 2 del curso (Testing).
* Es imposible probar todo, entonces se recomienda seguir un proceso para definir que tests realizar. Es similar al proceso científico, el test es el experimento.
* Given-When-Then pattern - Método para definir tests (principalmente de sistema). Se basa en historias de usuario, existe una herramienta llamada cucumber que utiliza esta sintaxis e.g.
    * Given [Usuario no tiene cuenta]
    * (And) [...]
    * When [Ingresa su correo]
    * (And) [...]
    * Then [Se crea una cuenta un Firebase]
    * (And) [...]
* Test Stack - Entre más arriba en la piramide más costosos las pruebas
    * System/Grandes -> probar todo el sistem (Usualmente hechos por testers)
    * Integration/Medianos -> probar interacción entre funciones (Punto intermedio)
    * Unit/Pequeños -> probar funciones aisladas (Usualmente hechos por desarrolladores)

### Progreso en proyecto 1
* Reconfiguración del front end para que use servicios
* Rediseño de partes de la página
* Adición de más secciones
* Empezar a aprender a hacer el back end con mongo y nodejs

## 29-07-2019 - 04-08-2019 (Semana 3)
### MOOC DevOps
* Desarrollo de la semana 3 del curso (Ops)
* Ops son los encargados de diseñar (arquitectura), desplegar, mantener y monitorear el sistema.
* La nube a permitido automatizar este trabajo.
* Usualmente velocidad va en contra de estabilidad. DevOps intenta reducir esto.
* Infraestructura como código.
* Se busca dispobinibilad
    * Tiempo medio entre fallas
    * Tiempo medio de reparación
* Se busca baja latencia
* Se busca reducir costos
* Herramientas de Ops
    * Version control - integración continua hace que se reduzcan conflictos.

### Progreso en proyecto 1
* Finalización de la implementación de todas las funcionalidades, aunque aún hay espacio para mejorar.
* "Dockerización" de los 3 componentes angular, express, mongo.
* "Dockerización" funciona en localhost, pero parece haber un problema en el cliente al probarlo en AWS o DCA, pero los otros contenedores funcionan correctamente.

## 05-08-2019 - 11-08-2019 (Semana 4)
### MOOC DevOps
* Desarrollo de la semana 4 del curso (CI [Continuous integration] y CD [Continuous delivery])
* Herramientas (algunas)
    * Jenkins
    * Travis
    * Elysian
    * Circle CI
* Pull Requests > Direct Merge (usualmente) por que de este modo se activan más pruebas y revisiones.
* Un buen sistema CI/CD deberia ser eficiente construyendo y desplegando la aplicación, claro con los resultados de las pruebas, y no deberia requerir de mucho mantenimiento.
* Hay tensión entre velocidad y estabilidad.
* Métodos para mitigar downtime debido a errores inesperados en la CI/CD pipeline e incrementar velocidad de integración:
    * Rollback
    * Blue/Green pattern - Tener un "bloque" de desarrollo y un "bloque" para usuarios, que se intercambian cada que hay cambios estables.
    * Feature Flags - Anillos de usuarios, se empieza a probar con los usuarios "internos" y continua capa por capa hacia los externos, permite un tipo de switch de funcionalidades.
* Microservicios - Aplicaciones pequeñas que son independientes pero interactuan entre ellas, este patrón es más escalable, pero mas dificil de poner a prueba.

### Progreso en proyecto 1
* Despliegue de la aplicación en AWS y DCA con soporte para https.

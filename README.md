# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

# NOTAS DEL CURSO

DRY: Don't Repeat Yourself. Se enfoca en evitar repetir el código en crear código reusable con el fin de facilitar la mantenibilidad y también obtener ventajas como aplicar unit testing sólo a un bloque de código. Ayuda a centralizar procesos.


Codigo Limpio:

Deuda técnica: es refactorización de código pendiente, puede darse por desconocimiento de patrones, por cortos tiempos para desarrollo, por mala planeación de arquitecturas, etc. Como desarrolladores siempre debemos pagar la deuda técnica que se genera de forma inevitable en los proyectos.
El código debe ser legible sin necesidad de comentarios.
Los nombres de variables deben ser descriptivos y pronunciables.
Los nombres deben describir el resultado que nos dan, por ejemplo si es boleano, el nombre debe ser algo que se pueda responder con verdadero o falso, ejemplo, isValid, hasPermission, etc. En arreglos mejor usar nombres que describen totalmente el tipo de dato que contiene el arreglo, ejemplo un arreglo de strings, frutName, un arreglo de objetos de frutas, fruits. En los números algo que describa cantidad como min, max, total, etc. En las funciones algo puntual que describa la acción que ejerce, verbo y sustantivo, ejemplo createUser().
Los parámetros son los que definimos en la función, lo que esperamos recibir, y los argumentos son los valores como tal que enviamos cuando llamamos una función.


STUPID
Singleton
Tight coupling
Untestability
Premature Optimization
Indescriptible Naming
Duplication

Tight coupling - Alto aclopanmiento: hacer un cambio genera una avalancha de problemas, por el contrario el bajo acomplamiento no genera tantas dependecias y va de la mana con el principio de responsabilidad unica.

Untestability -  Codigo no testeable: código dificilmente testeable, osea con alto acoplamiento y dependencias, dependencias globales (singleton). 

Premature optimization – Optimizacion prematura: no debemos anticiparnos a los requisitos y desarrrollar abstracciones innecesarioas que puedan agregar complejidad accidental.
    • Complejidad accidental: implementar soluciones complejas en lugar de la minima solucion necesaria.
    • Complejidad esencial: la complejidad es inherente al problema
Indescriptive naming – Nombres poco descriptivos: variables mas nombradas, clases genericas, funciones mal nombradas, nombres muy específicos (muy largo y dificil de entender), nombres genericos (conlleva a que la clase haga demasiadas tareas) (WTF por minuto, que es esto?, que significa esto? No entiendo esto)

Duplicidad
    • Real: codigo identico que cumple la misma funcioan peroq ue si se cambia tocaria cambiarlo en todos los lugares donde se usa. Incremeta el error humano, ya que podemos modificar la funcion que no es, ya que esta repertida y es igual en varias partes. Incrementa las pruebas unitarias
    • Accidental: el codigo parece similar pero hace cosas diferentes, cuando se hace un cambio solo es en un solo lugar. Si se parece el codigo, se puede crear la funcion en un solo lugar y que esta funcione con parametros para que funcione según lo que se necesita


Refactorin Guru

Inflación: refactorizar metodos muy largos. Hay que delegar el metodo enorme en pequeños metodos que hagan tareas específicas.

Clases super grandes: una clase hace de todo, dividir en pequeñas sublcases o modulos que se encarguen de una tarea específica

Obsesión primitiva: cuandos e tiene una gran cantiodad de variables o campos primitivos, se deben agrupar en clases, modulos, del mismo tema, no todas en el mismo lugar.

Lista larga de parametros: mas de tres o cuatro argumentos en un metodo, cuando se funcionan mas de dos o 3 dtipso de datos en un metodo. Verificar si todos los paremetros pasdado en funciones, son requeridos, mejor mandar objetos con todas las propiedades dentro.


Acopladores

Acoplamiento excecivo

Feature Envg: cuando la clase llama más informacion de otero lugar que a su misma clase, modulo o función. Eso significaría que ese metodo no pertenece a ese lugar, si las cosas cambiarn al mismo tiempo deben mantenerse en el mismo lugar. Cuando hay mucha referencia a un metodo de otro modulo, entonces esa funcion debería colocarse en el otro lugar

Intimidad inapropiada: cuando una clase usa campos y metodos internos de otra clase. Las buenas clases deben de saber lo menos posible de otras clases.

Cadena de mensajes: funcion A, llama a B, B llama C… El cliente depende de la navegación, cualquier caso necesita que se modifique algo más por el canal de comunicación. Para eso evitar la dependiencia de padre, hijo, abuelo, sino que se pueda acceder a la informacion sin depeendencias (Redux)

The middle man: cuando una clase solo existe para delegar la accion a otra clase, entonces para que existe esa clase. Evitar esos puntos intermedios entre clases.



PRINCIPIOS SOLID

Recomendaciones para escribir código facil de actualizar, facil de mantener y tolerante a cambios.

Single responsability principle SRP – Resposabilidad única

Una clase debe tener una unica responsabilidad, no necesariamente hacer una unica cosa, sino que solo esten expuetos a una fuente de cambio.
Todos los mpetodos deben estar estrechament relacionados con le nombre de la clase.

Open and close – Abierto y cerrado

Depende del contexto. Las entidades deben estar abiertas para la extencion pero cerradas par la modificación. La funcion es tolerante al cambio, ejemplo, lo que cambia recurrentemente se le puede enviar por parametros para no tener que modificar la función en sí.

Patron adaptador: recomendado para cuando se usan librerias de terceros.

Violaciones:
    • Cambios que afectan nuestra clase o modulo costantemente
    • Cuando una claso o modulo tiene demasiadas interacciones con diferentes lugares de mi aplicaicion.
      
Liskov sustitution – Sustitución de Liskov

Si una clase A es extendida por una clase B,  deberiasmo poder sustituir cualquier instacia de A por cualquier objeto de B sin que deje de funcionar o hayan comportamientos inesperados. 

Una función puede tolearar cualqueir clase que sea subclase de la clase que está esperando. Deberiasmo tener clases o métodos que puedan como argumentos subclases del mismo parametro que estamos esperando, y así la funcion sigue trabajando correctamente sin que tengamos que hacer moficiaciones cada que tengamos una sublase nueva.


Interface segregation – Segregación de interfaz

Los clientes no deben estar obligados a depender interfaces que no utilzan. No deben estar obligados a implemetar metodos que nunca van a utilizar.

Al segregar las interfaces, es decir, crear más interfaces, cada una con un fin más específico para evitar la dependencia de métodos de una interfaz grande que tenga todo junto, el código puede verse más largo, sin embargo este va a ser mucho más tolarante a cambios.

Por ejemplo, los métodos del cliclo de vida en angular usan el principio de segregación de interfaz, porque aunque las clases esten habilitadas para llamarlos a todos, no es ebligatorio si o sí usarlos en todas, ya que depende del comportamiento se necesitará hacer alguna modificación en alguna etapa del ciclo de vida, con esto yo solo implemento los método del ciclo que yo necesito para mi clase y nada más.

Violaciones:

    • Si las interfaces no obligan a violar los principios de responsabilidad única y sustitución de liskov.


Dependency inversion – Inversión de dependecias

    • Los componentes importantes (negocio) no deben depender de los que son de baja importancia (infraestructura tecnica).
    • Ambos componentes deberías depender de abstracciones. Es decil de alguien más que les diga como deben lucir.
    • Las abracciones no deben depender de detalles, los detalles sí deberían depender de las abtracciones.

Se ve cuando hay una dependencia oculta (hsata que se abre el metodo nos damos cuenta de cual y donde esta la dependencia), es decir, el funcionamiento de un metodo depende de una clase que estamos importando, y que si algo en esa clase cambia, como el nombre de una funcion que estoy llamado o algo, tambien tengo que ir a mi metodo y modificarlo. 

Mejor colocar la dependencia en el constructor.








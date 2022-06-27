# Mejores prácticas revisadas en los temas 01 y 02

1. Utiliza Componentes Funcionales en lugar de Componentes tipo Clase
2. Mantén los componentes dentro de su propia carpeta
    - Componente .tsx | .jsx
    - Estilos .css | .scss | .sass | .less
    - Modelos
    - Controladores
    - Tests
3. Evita los <div> innecesarios, utiliza <> en su lugar (fragments)
4. Utiliza la destructuración de objetos para los props
5. Crea tests para cada uno de los componentes
6. Evita la definición de funciones anónimas en el método render()
7. No utilices las llaves a la hora de definir props de tipo string
8. Para las imágenes utiliza siempre el atributo alt (puedes dejarlo vacío en el caso de imágenes estructurales)
9. Utiliza React.memo() en los componentes que requieran demasiados recursos para renderizarse
10. Crea componentes reutilizables, evita duplicar código
11. Utiliza el método .map() para renderizar elementos a partir de arrays
12. Siempre que sea posible, al utilizar el método .map((elemento, index) => <...>) para renderizar elementos de arrays, evita utilizar el index como valor para el atributo key
13. Simplifica la utilización del estado
    - Utiliza el estado para los objetos, en lugar de utilizar un estado para cada una de sus propiedades
14. Utiliza el nombrado sugerido
    - Componentes -> PascalCase
    - Instancias -> camelCase
    - Props -> camelCase
15. Utiliza las cláusulas de guarda
16. En las funciones de tipo flecha de retorno directo, utiliza el retorno explícito
    - Ejemplo: const doble = (valor) => valor * 2
17. Utiliza las etiquetas de autocierre en componentes de React
    - Solo utiliza las etiquetas de apertura + cierre en componentes que contengan elementos "hijos"
18. Trata de tener los imports ordenados
    1. Módulos intrínsecos (react, @testing-library/react, ...)
    2. Librerías externas (axios, componentes Prime, ...)
    3. Componentes, funciones y variables del proyecto
19. Envuelve los elementos JSX entre paréntesis si están compuestos por más de una línea
20. Prioriza la utilización de las plantillas literales al crear strings
    - Incorrecto: 'Tengo ' + edad + ' años'
    - Correcto: `Tengo ${edad} años`
21. Utilización de los operadores ternarios
    - Si sólo es necesaria la condición verdadera, trata de utilizar && en lugar de ?...:null
    - Excepción: A la hora de renderizar elementos JSX (por lo menos deben renderizar null)
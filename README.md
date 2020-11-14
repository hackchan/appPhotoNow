## Proyecto MERN

# Commands Basic NPM

```BASH
git init
echo "# Proyecto MERN" > README.md
npx license MIT -o "Fabio Rojas" > LICENSE
npx gitignore node
npx covgen "fabiorojas7@gmail.com"
npm init -y # o yarn init -y
git add -A
git commit -m "Initial commit"
```

# Compile with Webpack

```BASH
node_modules\.bin\webpack src/index.js
or
npx webpack src/index.js

```

# Hook principales

 * UseState:  Añade estado local a tu componente
 * UseEffect: Ejecutar una funcion cada vez que renderizemos nuestro  
              componente
 * UseContext: nos permite acceder a la conext API para acceder a valores
               globlaes si pasar por las props. 

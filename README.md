Prueba técnica para Junior y Trainees

APIs:
- Facts Random: https://catfact.ninja/fact
- Image Random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen
de un gato con la primera palabra del hecho recuperado usando la 
segunda API

--Informacion para poder constuir tu projecto de 2 formas:
La forma normal de crear un projecto en react, usando Vite:

 - npm create vite@latest (eliges react con javaScript o typescript)
 - cd (al proyecto)
 - npm install
 - npm run dev

La forma creando tu propio punto de entrada pero con Vite:
- npm créate vite@lastest, pero debemos escoger vanilla y JavaScript o typescript
- npm install @vitejs/plugin-react -E
- npm install react react-dom -E
- creamos el archivo vite.config.js, añades:

	import {defineConfig} from "vite"
	import react from '@vitejs/plugin-react'
	export default defineConfig({
	    plugins:[react()]
	})

- En el main.js debemos tener este código:

	import {createRoot} from 'react-dom/client'
	const root= createRoot(document.getElementById("app"))
	root.render(<h1>Hello</h1>)

- Cambiar la extensión js a jsx
- Añadimos nuestro lint: npm install standard -D
- vamos a dependencias y añadimos:
	 "islintConfig":{
    "extends":"./node_modules/standard/eslintrc.json"
  }
- Creamos la carpeta src y los archivos App.jsx y App.css


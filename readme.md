# Practica número 3 


App de venta de artículos de segunda mano.

## Instalación

### Descarga Backend
	$ git clone https://github.com/adj87/practica3.git
	$ cd practica3

### Instalamos y arrancamos MongoDB
	
### Instalación de la base de datos
	Con este comando crearemos la db e insertaremos articulos de prueba
	$ npm run installdb


### Arrancando la APP
	$ npm install
	$ npm start

## Operaciones que realiza la app
### Creación de nuevos anuncios 
La app permite insertar nuevos  a través del método POST en la dirección http://localhost:3000/apiv1/anuncios, con los campos definidos en su modelo.
### Listado de anuncios
En la página principal disponemos de un listado de anuncios mostrados en una tabla http://localhost:3000/
### Filtros

**Filtrado por nombre**
http://localhost:3000/apiv1/anuncios?nombre=jeep
**Filtrado se vende o se busca**
http://localhost:3000/apiv1/anuncios?venta=false
 **Filtrado por precio**: 
            -***Rango entre dos numeros***
                http://localhost:3000/apiv1/anuncios?precio=0-250
            -***Rango menor que un número***
                http://localhost:3000/apiv1/anuncios?precio=-175
            -***Rango mayor que un número***
                http://localhost:3000/apiv1/anuncios?precio=178-
**Filtrado por tag**:
                http://localhost:3000/apiv1/anuncios?tag=mobile
**Paginación**
        Paginacion realizada con los parámetros.
        http://localhost:3000/apiv1/anuncios?start=2&limit=2
### Listado de tags
http://localhost:3000/apiv1/anuncios/tags
     


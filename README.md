# Angular 17
### Prueba para el puesto de SemiSenior
> [!NOTE]
> Se aplicaron los principios de clean code y SOLID, además del concepto de 3 patrones de diseño: Componente Presentacional, Componente Reutilizable y Control Personalizado.

La aplicacion básicamente un `CRUD` que cumple con las siguientes funciones:
* Listar
* Registrar
* Actualizar y
* Eliminar
También muestra mensajes de succes y error de manera visual.

A continuación, un vistazo a las pantallas de la app:
## Listado de tarjetas

![image](https://github.com/user-attachments/assets/1f57f75d-f613-4613-85bf-a8f1e88ca2f6)

## Formulario de registro 

![image](https://github.com/user-attachments/assets/fe7c552a-ed2c-4679-a222-b35efc6a7288)

## Funcionalidades
Cuando se listan las tarjetas tenemos la funcionalidad de poder filtrar por el nombre o fecha o descripción:
![image](https://github.com/user-attachments/assets/304a419e-f23c-445c-8e6a-47101bda4ec4)

Cuando se selecciona un número en el select automaticamente se puede scroollear la tabla sin que se desborden los items
![image](https://github.com/user-attachments/assets/44d34890-4344-4a48-9408-71f11e8f94ad)

También tenemos la opción de un `dropdown` a modo de botones de acción en cada ítem de la tabla
![image](https://github.com/user-attachments/assets/d577d3b5-55fe-41ca-aa23-222ffda46dc3)

Al darle a la opción eliminar inmediatamente nos salta un modal con el nombre del producto que deseamos eliminar:
![image](https://github.com/user-attachments/assets/5c94dca8-7f05-42f2-ae4e-378e580c95a9)

Si eliminamos el producto y es exitoso no salta un alert indicandonos el estado de la petición, si se eliminó o no. Tmabién se actualiza el número de elementos que tiene la tabla por ende el "Resultado":
![image](https://github.com/user-attachments/assets/d006579d-1efb-404c-baae-3c39754c3c81)

Ahora vamos al Formulario de registro. Vemos que tenemos los datos ingresados correctamente, el campo `Fecha Revisión` Se llena automáticamente calculando un año después del campo `Fecha liberación`:
![image](https://github.com/user-attachments/assets/d1ad4c7a-bcb1-4d4f-8e8c-cec281f3e727)
Si todo está correcto y no hay un error en el servicio, tendremos el siguiente mensaje y se limpará el formulario:
![image](https://github.com/user-attachments/assets/a38eb24d-7c0f-4bbb-a7d3-52060ae5b87e)

Ahora veamos si se agregó correctamente:
![image](https://github.com/user-attachments/assets/d59bb0fb-eb21-41f0-82de-ac7e7dcdf50a)

Podríamos decir que está duplicado, pero recordemos que ingresamos un id diferente. Ahora veamos que sucede si queremos ingresar el mismo id:
![image](https://github.com/user-attachments/assets/13038fd9-676d-408c-81d0-c365dbdd2fa2)
Nos salta el error porque estamos tratando de registrar un producto con el mismo id.

Ahora veamos que sucede cuando tratamos de enviar un formulario sin llenar los datos:
![image](https://github.com/user-attachments/assets/c98aea57-6fc2-4c52-87e0-7e981778f65a)

Luego tenemos las validaciones individuales:
![image](https://github.com/user-attachments/assets/07a938c1-de7d-47b8-8ccf-4b0efd5edc09)
![image](https://github.com/user-attachments/assets/a46ba757-0661-4d0c-8c84-3a3154e576a7)
![image](https://github.com/user-attachments/assets/c5d230a7-0ae3-4360-8008-3ac2a9cb866f)
Esta es una pequeña demostración de las validaciones y están todas las que se mencionaron en la prueba.

Ahora vamos a actualizar el último producto que ingresamos:
![image](https://github.com/user-attachments/assets/150946e0-4453-4ffe-bf42-24b381437eae)

Podemos obserbar el último id que ingresamos:
![image](https://github.com/user-attachments/assets/8e3c874b-12ba-4a42-8ee3-4c9ea7a96756)

Cambiamos la descripción:
![image](https://github.com/user-attachments/assets/780b3d53-c5bb-4824-9d92-fc4bcc611572)

Actualizamos:
![image](https://github.com/user-attachments/assets/962c2fe8-4dfd-404e-87d5-d0ab85e6ee42)

y buscamos nuestro producto:
![image](https://github.com/user-attachments/assets/4151deaf-3d51-4803-adf5-59a0f4fc4a2c)

### Gracias!





















		var todosLados=null;

		function abrirVentana(){
			let contenido = document.getElementById("idUrl").value;
			let vs = window.open("secundaria.html");	
			
			vs.onload=function(){
				let caja=document.getElementById("texto");
				caja.innerHTML=contenido;
				console.log(contenido);
			}
			
			todosLados="no nos gusta tampoco";
			
			// Cerrar Venta pasados un 3 segundos
			//setTimeout(cerrarVentana,3000)
			
		}

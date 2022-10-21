		var todosLados=null;

		function abrirVentana(){
			
			let vs = window.open("secundaria.html");	
			
			

			vs.onload=function(){

				//vs.document.getElementById("texto").innerHTML="no nos gusta";

			}

			
			todosLados="no nos gusta tampoco";
			

			// Cerrar Venta pasados un 3 segundos
			//setTimeout(cerrarVentana,3000)

			setTimeout(function(){vs.window.close()},3000);
			
		}

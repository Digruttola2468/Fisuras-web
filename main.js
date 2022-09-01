const containDescrip       = document.querySelector(".containerDescripcion");
        const containDescrip_item1 = document.querySelector(".containerDescripcion_item1");
        const containDescrip_item2 = document.querySelector(".containerDescripcion_item2");
    
        const image = document.createElement("img");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");

        function franco(instagram){
            let frase = "Este hijo de puta vago de mierda, no hace nada en todo el dia el puto, tengan cuidado cuando" + 
                        "vallan a pasacalle porque puede llegar a maltratar personas (puteando golpeando), odia mucho a \n" +
                        "las gordas a pesar que es gordo obeso.";

            image.setAttribute("src","./pictures/goorda.png");
            image.setAttribute("alt","Gordaa");

            h4.innerText = instagram;

            containDescrip_item1.appendChild(image);
            containDescrip_item1.appendChild(h4);
            
            /**/
            p.innerText = frase;

            containDescrip.appendChild(p);

            if(containDescrip.classList.contains("visible")){
                containDescrip.classList.toggle("visible")
            }
        }

        function toma(instagram){
            let frase = "Medico forence, tengan cuidado que termino la universidad en pandemia," +
                "no sabe nada este hijo de puta de medicina, encima es pervertido con las mujeres" +
                "y da recetas para que tengamos mas grasa, una VERGUENZA.";

            image.setAttribute("src","./pictures/dukoo.png");
            image.setAttribute("alt","duky");

            h4.innerText = instagram;

            containDescrip_item1.appendChild(image);
            containDescrip_item1.appendChild(h4);
            
            /**/
            p.innerText = frase;

            containDescrip.appendChild(p);

            if(containDescrip.classList.contains("visible")){
                containDescrip.classList.toggle("visible")
            }
        }
        
        function lemos(instagram){
            let frase = "Viejo de 30 años, acosador de wachas especificamente nazarela flores, si lo ven en auto" +
                        "anda tocando bocina molestando a los del transito.";

            image.setAttribute("src","./pictures/lemoo.png");
            image.setAttribute("alt","lemoo");

            h4.innerText = instagram;

            containDescrip_item1.appendChild(image);
            containDescrip_item1.appendChild(h4);
            
            /**/
            p.innerText = frase;

            containDescrip.appendChild(p);

            if(containDescrip.classList.contains("visible")){
                containDescrip.classList.toggle("visible")
            }
        }

        function bruno(instagram){
            let frase = "Enfermedad detectada, es un alumno buscado por Nardon (Director de la escuela) donde" +
                "golpea mesas, se roba componentes, usa gorra (cosa que no se debe llevar), anda en bici" +
                "dentro de la escuela, quiere tener simpre la ultima palabra (terminando con una puteada)" +
                "y no le importa si le tiene que contestar a los directivos. Si lo ven" +
                "llamen a Nardon.";

            image.setAttribute("src","./pictures/brunoo.png");
            image.setAttribute("alt","bruno");

            h4.innerText = instagram;

            containDescrip_item1.appendChild(image);
            containDescrip_item1.appendChild(h4);
            
            /**/
            p.innerText = frase;

            containDescrip.appendChild(p);

            if(containDescrip.classList.contains("visible")){
                containDescrip.classList.toggle("visible")
            }
        }
        
        function torres(instagram){
            let frase = "Persona discapacitada mentalmente, suele gritar en clases, no calla nunca, es peligroso" + 
                "cuando esta enamorado (puede llegar a matar por amor), es odiado por toda la escuela, si lo" +
                "ven no lo dejen pasar porque es re molesto, no nos deja concentrarnos en clases.";

            image.setAttribute("src","./pictures/torre.png");
            image.setAttribute("alt","Torres");

            h4.innerText = instagram;

            containDescrip_item1.appendChild(image);
            containDescrip_item1.appendChild(h4);
            
            /**/
            p.innerText = frase;

            containDescrip.appendChild(p);
            if(containDescrip.classList.contains("visible")){
                containDescrip.classList.toggle("visible")
            }
        }
        
        function ledesma(instagram){
            let frase = "Esta persona lo conocen como rata (jugar Fortnite) tengan cuidado porque se puede llegar a" +
                "alterarse si pierde. Por culpa de este juego violento no hace nada en clases, se machetea en " + 
                "TODAS las pruebas, no hace las tareas, si llega a estudiar (cosa que dudo) estudia el mismo dia." ;

            image.setAttribute("src","./pictures/ledesma.png");
            image.setAttribute("alt","Torres");

            h4.innerText = instagram;

            containDescrip_item1.appendChild(image);
            containDescrip_item1.appendChild(h4);
            
            /**/
            p.innerText = frase;

            containDescrip.appendChild(p);

            if(containDescrip.classList.contains("visible")){
                containDescrip.classList.toggle("visible")
            }
        }

        function nica(instagram){
            let frase = "Nada para describir a este choro";

            image.setAttribute("src","./pictures/nicaa.png");
            image.setAttribute("alt","Nico");

            h4.innerText = instagram;

            containDescrip_item1.appendChild(image);
            containDescrip_item1.appendChild(h4);
            
            /**/
            p.innerText = frase;

            containDescrip.appendChild(p);

            if(containDescrip.classList.contains("visible")){
                containDescrip.classList.toggle("visible")
            }
        }
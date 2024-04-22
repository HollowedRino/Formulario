window.onload = function() {
    document.getElementById("btnEnviar").addEventListener("click", registrarUsuario);
    document.getElementById("btnEnviar").addEventListener("click", imprimirConsola);

    document.getElementById("btnEnviarConDOM").addEventListener("click", registrarUsuarioDOM);
    document.getElementById("btnMostrar").addEventListener("click",listarUsuarios);

    var arrUsuarios = [];

    function imprimirConsola(){
        console.log("XD");
    }

    function registrarUsuario(){
        console.log("funciona");
        //capturar datos del formulario
        
        let nuevoUsuario = {
            usuario: document.getElementById("usuario").value,
            nombre: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellidos").value,
            edad: document.getElementById("edad").value,
            password: document.getElementById("password").value
        }
        console.log("objeto",nuevoUsuario);
        /*
        let usuario = document.getElementById("usuario").value;
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value;
        let password = document.getElementById("password").value;
        */
        //insertar en la tabla
        const bodytabla = document.getElementById("tab_body1");
        let str_insercion = 
            "<tr><td>"+nuevoUsuario.usuario+
            "</td><td>"+nuevoUsuario.nombre+
            "</td><td>"+nuevoUsuario.apellidos+
            "</td><td>"+nuevoUsuario.edad+
            "</td><td>"+nuevoUsuario.password+
            "</td></tr>"
        bodytabla.innerHTML += str_insercion;
        arrUsuarios.push(nuevoUsuario);
        console.log(arrUsuarios);
    }
    function registrarUsuarioDOM(){
        console.log("DOM");
        //capturar datos del formulario
        
        let usuario = document.getElementById("usuario").value;
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value;
        let password = document.getElementById("password").value;
        let textos = [usuario,nombre,apellidos,edad,password];
        //insertar en la tabla
        /*
        const col1 = document.createElement("td");
        const col2 = document.createElement("td");
        const col3 = document.createElement("td");
        const col4 = document.createElement("td");
        const col5 = document.createElement("td");
        const texto1 = document.createTextNode(usuario);
        const texto2 = document.createTextNode(nombre);
        const texto3 = document.createTextNode(apellidos);
        const texto4 = document.createTextNode(edad);
        const texto5 = document.createTextNode(password);
        col1.appendChild(texto1);
        col2.appendChild(texto2);
        col3.appendChild(texto3);
        col4.appendChild(texto4);
        col5.appendChild(texto5);*/

        const row = document.createElement("tr");
        for (var i = 0; i < 5; i++){
            col = document.createElement("td");
            texto = document.createTextNode(textos[i]);
            col.appendChild(texto);
            row.appendChild(col);
        }
        /*
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);*/

        const table = document.getElementById("tab_body1");
        table.appendChild(row);
    }

    function listarUsuarios(){
        const bodytabla = document.getElementById("tab_body2");
        let str_insercion = "";
        for(let id in arrUsuarios){
            console.log(id, arrUsuarios[id]);
            str_insercion += 
            "<tr><td>"+arrUsuarios[id].usuario+
            "</td><td>"+arrUsuarios[id].nombre+
            "</td><td>"+arrUsuarios[id].apellidos+
            "</td><td>"+arrUsuarios[id].edad+
            "</td><td>"+arrUsuarios[id].password+
            "</td></tr>";
        }
        bodytabla.innerHTML += str_insercion;
    }
}
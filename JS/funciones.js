window.onload = function() {
    document.getElementById("btnEnviar").addEventListener("click", registrarUsuario);
    document.getElementById("btnEnviarConDOM").addEventListener("click", registrarUsuarioDOM)

    function registrarUsuario(){
        console.log("funciona");
        //capturar datos del formulario
        let usuario = document.getElementById("usuario").value;
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value;
        let password = document.getElementById("password").value;
        //insertar en la tabla
        const bodytabla = document.getElementById("tab_body1");
        let str_insercion = 
            "<tr><td>"+usuario+
            "</td><td>"+nombre+
            "</td><td>"+apellidos+
            "</td><td>"+edad+
            "</td><td>"+password+
            "</td></tr>"
        bodytabla.innerHTML += str_insercion;
    }
    function registrarUsuarioDOM(){
        console.log("DOM");
        //capturar datos del formulario
        let usuario = document.getElementById("usuario").value;
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value;
        let password = document.getElementById("password").value;
        //insertar en la tabla
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
        col5.appendChild(texto5);

        const row = document.createElement("tr");
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);

        const table = document.getElementById("tab_body1");
        table.appendChild(row);
    }
}
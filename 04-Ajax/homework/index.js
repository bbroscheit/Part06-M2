let array = $.get("http://localhost:5000/amigos");
//const loading = $('#loading_img');
//loading.hide();

let flag = 0;
const list = document.getElementById("lista");
const btn = document.getElementById("boton");
const searchInput = document.getElementById("input");
const deleteInput = document.getElementById("inputDelete");
const span = document.getElementById("amigo");
const sucess = document.getElementById("sucess");



btn.addEventListener ("click", function (e){
    fetch("http://localhost:5000/amigos")
    .then(res => res.json())
    .then(amigos => {
        list.innerText = "";
        //list.empty();   
        for (let i = 0; i < amigos.length; i++) {
            const element = amigos[i];
            let li = document.createElement("li");
            li.innerText = element.name;
            list.append(li);
        }
    })
});

const search = document.getElementById("search");
search.addEventListener ("click", function (e){
    
    fetch("http://localhost:5000/amigos")
    .then(res => res.json())
    .then(amigos => {
        span.innerText = "";
       for (let i = 0; i < amigos.length; i++) {
           
        const element = amigos[i];
        
        if(element.id == searchInput.value){
            
            let p = document.createElement ("p");
            p.innerText=element.name;
            return span.append (p);
        }
           
        
       }
            let p = document.createElement ("p");
            p.innerText= "El amigo no se encuentra";
            span.append (p);
    })
});

const borrar = document.getElementById("delete");
borrar.addEventListener ("click", function (e){
    
    fetch("http://localhost:5000/amigos/"+ deleteInput.value , {method: "DELETE"})
    .then(res => res.json())
    .then(amigos => {
       sucess.innerText = "fue eliminado con exito";
    })
});


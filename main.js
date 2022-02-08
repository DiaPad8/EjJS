const contenedor = document.getElementById("contenedor");
let btn1 =  document.getElementById("btn");



var tmp=0
for (var i = 0; i <1;i++){
    tmp = i+20;
    console.log("Hola mundo JS"+i);
    contenedor.innerHTML +="<h2>Hola mundo JS "+i+"</h2>";
    contenedor.innerHTML += `<h1> Hola ${i} </h1>`;
    
}


let op = true;

function saludar(){
    if (op){
        
        btn1.innerHTML = "Hola";
        btn1.style.backgroundColor = "rgba(255,0,0,.8)";
    }
    else{
        btn1.innerHTML = "Mundo";
        btn1.style.backgroundColor = "rgba(10,55,10,.8)";
    }
    op = !op;
}


btn1.addEventListener("click",saludar);


document.addEventListener('keydown', function(event){
    if (event.key == 'ArrowUp'){
        contenedor.innerHTML +="<h2>Hola mundo JS </h2>";
    } 

} );


function suma(a,b){
    return a+b;
}

console.log(suma(5,6));










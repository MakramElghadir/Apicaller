let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typecode.com/posts/1");
xhr.send();

xhr.onload = function(){
    const respuesta = JSON.parse(xhr.respomse)
    console.log(respuesta) 
}
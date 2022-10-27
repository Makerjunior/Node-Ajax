((win,doc)=>{

   
    // GET 
    let ajax=new XMLHttpRequest();
    ajax.open('GET','http://localhost:3000');
    ajax.onreadystatechange=function(){
        console.log(ajax.responseText);
        
        // ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
        if (ajax.status === 200 && ajax.readyState === 4) {
           let dados = JSON.parse(ajax.responseText);
          let div = document.createElement('div');
           div.style="border: 1px solid #000 ; padding:3px ; display:inline-block; margin-top:10px";



          div.innerHTML="Nome :"+dados.nome+"<br>";
          div.innerHTML+="Idade :"+dados.idade+"<br>";
          div.innerHTML+="Cidade :"+dados.cidade+"<br>";
          div.innerHTML+="Estado :"+dados.estado+"<br>";
          div.innerHTML+="Profisão :"+dados.profisao+"<br>";
          
          document.body.appendChild(div);
        }
        
       

    }
  ajax.send();




//  POST
let form1=doc.querySelector('#form1');
let name=doc.querySelector('#name');
let response=doc.querySelector('.response');

//Send form to node js
function sendForm(event){
    event.preventDefault();
    let ajax=new XMLHttpRequest();
    let params='name='+name.value;
    ajax.open('POST','http://localhost:3000');
    ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    ajax.onreadystatechange=function(){
        if(ajax.status === 200 && ajax.readyState===4){
            let arr=JSON.parse(ajax.responseText);  // Pegando o  valor json retornado 

            ///Concatenado e imprimido os valores retornados
            response.innerHTML="O usuário "+arr.name+" possui "+arr.age+" anos de idade.";
        }
    };
    ajax.send(params);
}
form1.addEventListener('submit',sendForm,false);
































})(window,document);
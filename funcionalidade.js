document.addeventlistener('DOWContentLoated'),()=>{
    constformulariousuario=document.GetElementById('formulariousuario');
    constentradanome=document.GetElementById('entradanome');
    contentradaidade=document.GetElementById('entradaidade');
    constentradacurso=document.GetElementById('entradacurso');
    constlistausuarios=document.GetElementById('listausuarios');  
}

function salvar dados(){
    const usuario={
        nome: entradaNome.value;
        idade: entradaIdade.value;
        curso: entradaCurso.value;

    }


let usuarios = Jason.Parse(localStorage.getItem('usuarios')) ||[];


usuarios.push(usuario);

localstorage.setitem('usuarios, JSON.stringif'(usuarios));
exibirusuarios();
}

function exibirusuarios(){

    listausuarios.innerHTML='';
}
const usuarios = Json.Parse(localStorage.getItem('usuarios'))||[]
usuarios.forEach(usuario,index)+>{
    const li = document.createElement('li');
    li.textContent = Nome: $(usuario.idade).Curso: $(usuario.curso);
    listaUsuarios.appendChild(li)
    ));

}
formularioUsuario.addEventListenet('submit',(evento)=>{
    evento.preventDefault();
    salvar dados();
    

});

exibir dados();
));

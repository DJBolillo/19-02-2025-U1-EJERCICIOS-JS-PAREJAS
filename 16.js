function CorreoValido(email){
    if(email.includes('@')){
        return true;
    } 
}
if(CorreoValido("yvesmanuel@gmail.com")){
    console.log("Correo valido");
    
}else{
    console.log("Correo invalido");
    
}

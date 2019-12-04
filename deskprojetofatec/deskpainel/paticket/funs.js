function login(){
        var user = document.form_log.usuario.value;
        var senha = document.form_log.senha.value;
        if (user == 'admin@chrghelpdesk.com' && senha == 123456 ){
          alert('Acesso concedido');
          window.close("index.html");
          window.open("paticket/index1.html");
        }
        else{
          alert('Acesso Negado');
          window.close("index.html");
          window.open("index.html");
        }
        
}       















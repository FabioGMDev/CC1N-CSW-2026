function logar(){
    let login = document.getElementById('Login').value;
    let senha = document.getElementById ('pass').value;

    if (login === "tutor" && senha === "123456"){
        window.open("tutor.html")
    }
    else {
        alert("usuario ou senha invalido!!!")
        return
    }
}
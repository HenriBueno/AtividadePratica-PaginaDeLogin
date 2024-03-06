async function login(event){
    event.preventDefault()
    try{
        const email = document.getElementById('email').value
        const password = document.getElementById('senha').value

        const dados = {
            email: email,
            senha: password
        }
         
        
         localStorage.setItem('dadosEnviados',JSON.stringify(dados))
        const dadosJson = JSON.parse(localStorage.getItem('dadosEnviados'))

        const response = await api.post('/login', dadosJson)
        console.log("Logado com sucesso")
    }catch(error){
        console.log("Deu erro")
    }
}

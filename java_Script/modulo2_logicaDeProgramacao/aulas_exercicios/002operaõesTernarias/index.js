//ao inves de usar if e esle
// usar ||(p verdadeiro) ou && (p falso)- curto-circuito
// usar ? (para verdadeiro), usar : (para falso)


const valorUsuario = 550

// o nivelUsuario armazena "usuario vip" ou "usuario comum"
const nivelUsuario = valorUsuario >= 1000 ? "Usuário é VIP" : "Usuário comum";


const corUsuario = ''
const corPadrao = 'vermelho';


const corTela = corUsuario || corPadrao ; 
// caso o usuario não digite nada o || vai madar o primeiro verdadeiro que ele achar 


console.log(nivelUsuario , corTela);
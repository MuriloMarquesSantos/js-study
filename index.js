function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            // return reject(new Error('DEU RUIM DE VERDADE'));

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '1131213',
                ddd: '11'
            })
        }, 2000)
    })
}


const usuarioPromise = obterUsuario();

usuarioPromise
    .then((resultado) => {
        return obterTelefone(resultado.id);
    })
    .then(function(resultado) {
        console.log('resultado', resultado);
    })
    .catch(function (error){
        console.log('DEU RUIM', error);
    });


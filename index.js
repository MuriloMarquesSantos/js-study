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

function obterEndereco(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                rua: 'dos bobos',
                numero: 0
            })
        }, 2000);
    })
}
main();
async function main() {
    try {
        const usuario = await obterUsuario();
        const telefone = await obterTelefone(usuario.id);
        const endereco = await obterEndereco(usuario.id);

        console.log(`
            Nome: ${usuario.nome}
            Telefone: ${telefone.ddd} ${telefone.telefone}
            Endereço: ${endereco.rua}, ${endereco.numero}
        `)

    }
    catch(error) {
        console.log('DEU RUIM', error);
    }

}

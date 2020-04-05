const api = require('./service/api');

async function main() {
    try{
        const result = await api.obterPessoas('a');
        let names = [];

        for(pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.log(`names, ${names}`);
    }
    catch (e) {
        console.error(`Erro interno, ${e}`);
    }
}

main();
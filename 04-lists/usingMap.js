const service = require('./service/api');

async function main() {
    try {
        const results = await service.obterPessoas(`a`);

        const names = results.results.map(item => item.name);

        console.log(`Names: ${names}`);
    } catch (e) {
        console.error(`Deu ruim, ${e}`);
    }
}

main();

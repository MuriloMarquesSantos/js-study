const { obterPessoas } = require('./service/api');

async function main() {
    try {
        const {results} = await obterPessoas(`a`);

        let pesos = results.map((item) =>{
            return parseInt(item.mass);
        }).filter((item) => {
            return !isNaN(item);
        });

        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo;
        }, 0);

        console.log(`Pesos: ${pesos}`);
        console.log(`Total: ${total}`);

    } catch (e) {

    }
}

main();
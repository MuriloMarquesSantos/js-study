const { obterPessoas } = require('./service/api');

async function main() {
    try {
        const {results} = await obterPessoas(`a`);

        let familiaLars = results.filter((item) => {
            return item.name.toLowerCase().indexOf(`lars`) !== -1;
        });

        familiaLars = familiaLars.map((item) =>{
            return item.name;
        });

        console.log(`Familia Lars: ${familiaLars}`);

    } catch (e) {

    }
}

main();
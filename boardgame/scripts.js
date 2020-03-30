let field;

function Field(cols, rows, containerId) {
    console.log(`Building new Field... with ${cols} cols, ${rows} rows, inside container ${containerId}.`);
    this.cols = cols;
    this.rows = rows;
    this.container = document.querySelector(containerId);
    console.log(this.container);

    this.createField = function() {
        const field = [];
        for (let i = 0; i < this.rows; i++) {
            field[i] = [];
            for (let j=0; j<this.cols; j++) {
                field[i].push(createRock());
            }
        }
        this.field = field;
        this.drawField();
    };

    function createRock() {
        return Math.trunc(Math.random() * 5) === 1 ? '@' : '';
    }

    this.drawField = function() {
        let template = '';

        for (let i = 0; i < this.rows; i++) {
            template+= '<tr>';
            for (let j = 0; j < this.cols; j++) {
                template += `<td>${this.field[i][j]}</td>`;
            }
            template += '</tr>';
        }
        this.container.innerHTML = template;
    }
}

field = new Field(8, 8, "#myTable");

field.createField();
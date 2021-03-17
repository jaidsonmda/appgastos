class ListaCompra {
    constructor() {
        this._compras = [];
    }
    adiciona(compra) {
        this._compras.push(compra);
    }
    get compras() {
        return [].concat(this._compras);
    }
    esvazia() {
        this._compras = [];
    }
    remove(posicao) {
        this._compras = this._compras.filter((item, i) => { return i != posicao; });
    }
    seleciona(posicao) {
        console.log("entrou em selecionar");
        return this._compras.filter((item, i) => { return i == posicao; });
    }
    edita(item, unidade, quantidade, valor, posicao) {
        this._compras = this._compras.map((itemMap, i) => { if (i == posicao) {
            return new Compra(item, unidade, new Date(), quantidade, valor);
        } return itemMap; });
    }
}

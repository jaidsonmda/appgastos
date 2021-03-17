class ReceitaStorage {
    constructor() {
        this._listasReceitas = new ListaReceita();
        this._receitasStorage = [];
        this.receitasLocais = JSON.parse(localStorage.getItem("receita"));
        console.log(`Lendo ${this.receitasLocais} na storage`);
    }
    get storageReceitas() {
        if (this.receitasLocais) {
            this.receitasLocais.map(receitaLocal => {
                let receita = new Receita(new Date(receitaLocal.data), receitaLocal.descricao, receitaLocal.tipo, receitaLocal.valor);
                this._listasReceitas.adiciona(receita);
            });
            return this._listasReceitas;
        }
        else {
            return this._listasReceitas;
        }
    }
    salvaReceitas(listaReceitas) {
        console.log(listaReceitas);
        localStorage.setItem("receita", JSON.stringify(listaReceitas.receitas.map(receita => ({ data: receita.data, descricao: receita.descricao, tipo: receita.tipo, valor: receita.valor }))));
    }
    removeReceitas() {
        localStorage.removeItem("receita");
    }
}

import { DialogGasto } from '../dialog/DialogGasto';
class GastoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDescGasto = $('#descGasto');
        this._inputTipoGasto = $('#tipoGasto');
        this._inputValorGasto = $('#valorGasto');
        this._listaGastos = new ListaGasto();
        this._gastosStorage = new GastoStorage();
        this._listaGastos = this._gastosStorage.storageGastos;
        this._dialogGasto = new DialogGasto();
        this._dialogGastoView = new DialogGastoView($('#dialogGastoView'));
        this._gastosView = new GastosView($('#gastosView'));
        this._gastosView.update(this._listaGastos);
        this._snackMensagem = new SnackBar();
        // this._mensagem = new Mensagem();
        // this._mensagemView= new MensagemView($('#mensagemView'));
        // this._mensagemView.update(this._mensagem);
        // console.log(`Lendo ${this._listaGastos} no controler`);
    }
    adiciona(event) {
        event.preventDefault();
        /*console.log(this._inputTipoGasto.value);
        console.log(this._inputData.value.split('-'));
        console.log(this._inputQuantidade.value);*/
        /*console.log(negociacao);
        let diaMesAno =  DateHelper.dataParaTexto(negociacao.data);
        console.log(diaMesAno);*/
        this._listaGastos.adiciona(this._criaGasto());
        this._gastosStorage.salvaGastos(this._listaGastos);
        this._gastosView.update(this._listaGastos);
        this.close();
        this._snackMensagem.mensagemSnack = this._inputDescGasto.value + " adicionado com sucesso!";
        // this._mensagem.texto = "Gasto adicionado com sucesso!"
        // this._mensagemView.update(this._mensagem)
        this._limpaFormulario();
    }
    apaga(event) {
        event.preventDefault();
        console.log(" tamanho lista gasto" + this._listaGastos.gastos.length);
        this._listaGastos.esvazia();
        this._gastosStorage.removeGastos();
        this._gastosView.update(this._listaGastos);
        this._snackMensagem.mensagemSnack = "Gastos excluidos com sucesso!";
        this.close();
    }
    _criaGasto() {
        return new Gasto(new Date(), this._inputDescGasto.value, this._inputTipoGasto.value, this._inputValorGasto.value);
    }
    _limpaFormulario() {
        this._inputValorGasto.value = 0.0;
        this._inputTipoGasto.value = '';
        this._inputDescGasto.focus();
        this._inputDescGasto.value = '';
    }
    apagaUm(event, posicao) {
        event.preventDefault();
        this._listaGastos.remove(posicao);
        this._gastosStorage.salvaGastos(this._listaGastos);
        this._gastosView.update(this._listaGastos);
        this._snackMensagem.mensagemSnack = "Gasto excluído com sucesso!";
        console.log("Excluír : " + posicao);
    }
    /* editaUm(event, posicao){
        console.log("Editar : "+posicao);
    } */
    pegaUm(event, posicao) {
        event.preventDefault();
        console.log("entrou em pegaUm");
        let gasto = this._listaGastos.seleciona(posicao);
        console.log(gasto);
        this._dialogGastoView.updateEditar(gasto, posicao);
        this._dialogGasto.showDialogButton();
    }
    editaUm(event, posicao) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);
        let inputDescricao = $('#descricaoGastoEditar').value;
        let inputTipo = $('#tipoGastoEditar').value;
        let inputValor = $('#valorGastoEditar').value;
        this._listaGastos.edita(inputDescricao, inputTipo, inputValor, posicao);
        console.log(this._listaGastos);
        this._gastosStorage.salvaGastos(this._listaGastos);
        this._gastosView.update(this._listaGastos);
        this._dialogGasto.close();
        this._snackMensagem.mensagemSnack = "Compra atualizada com sucesso!";
    }
    abreDialogExcluiTudo(event) {
        console.log("chamou!");
        event.preventDefault();
        if (this._listaGastos.gastos.length >= 1) {
            this._dialogGasto.showExcluiTudo();
        }
        else {
            this._snackMensagem.mensagemSnack = "Não há gasto para ser excluído!";
        }
    }
    abreDialog(event) {
        event.preventDefault();
        this._dialogGasto.showDialogCadastra();
    }
    close() {
        event.preventDefault();
        this._dialogGasto.close();
    }
}

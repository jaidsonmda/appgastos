import { DialogCompra } from '../dialog/DialogCompra';
class PedidoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputItem = $('#item');
        this._inputUnidade = $('#unidade');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaCompras = new ListaCompra();
        this._comprasStorage = new CompraStorage();
        this._snackMensagem = new SnackBar();
        this._dialogCompra = new DialogCompra();
        this._listaCompras = this._comprasStorage.storageCompras;
        this._comprasView = new ComprasView($('#comprasView'));
        this._comprasView.update(this._listaCompras);
        this._dialogComprasView = new DialogCompraView($('#dialogCompraView'));
        this._mensagem = new Mensagem();
    }
    adiciona(event) {
        event.preventDefault();
        /*console.log(this._inputValor.value);
        console.log(this._inputData.value.split('-'));
        console.log(this._inputQuantidade.value);*/
        /*console.log(negociacao);
        let diaMesAno =  DateHelper.dataParaTexto(negociacao.data);
        console.log(diaMesAno);*/
        this._listaCompras.adiciona(this._criaCompra());
        this._comprasStorage.salvaCompras(this._listaCompras);
        this._comprasView.update(this._listaCompras);
        this._dialogCompra.close();
        this._snackMensagem.mensagemSnack = this._inputItem.value + " adicionado com sucesso!";
        this._limpaFormulario();
        console.log(this._listaCompras.compras);
    }
    apaga(event) {
        event.preventDefault();
        console.log(" tamanho lista compra" + this._listaCompras.compras.length);
        this._listaCompras.esvazia();
        this._comprasStorage.removeCompras();
        this._comprasView.update(this._listaCompras);
        this._snackMensagem.mensagemSnack = "Lista de compras esvaziada com sucesso!";
        this.close(event);
    }
    _criaCompra() {
        return new Compra(this._inputItem.value, this._inputUnidade.value, new Date(), this._inputQuantidade.value, this._inputValor.value);
    }
    _limpaFormulario() {
        this._inputValor.value = "";
        this._inputQuantidade.value = "";
        this._inputItem.focus();
        this._inputItem.value = '';
        this._inputUnidade.value = '';
    }
    apagaUm(event, posicao) {
        event.preventDefault();
        this._listaCompras.remove(posicao);
        this._comprasStorage.salvaCompras(this._listaCompras);
        this._comprasView.update(this._listaCompras);
        this._snackMensagem.mensagemSnack = "Compra excluída com sucesso!";
        console.log("Excluír : " + posicao);
    }
    abreDialogExcluiTudo(event) {
        console.log("chamou!");
        event.preventDefault();
        if (this._listaCompras.compras.length >= 1) {
            this._dialogCompra.showExcluiTudo();
        }
        else {
            this._snackMensagem.mensagemSnack = "A lista já está vazia!";
        }
    }
    abreDialog(event) {
        event.preventDefault();
        this._dialogCompra.showDialogCadastra();
    }
    pegaUm(event, posicao) {
        event.preventDefault();
        console.log("entrou em pegaUm");
        let compra = this._listaCompras.seleciona(posicao);
        console.log("compra :" + compra._item);
        this._dialogComprasView.updateEditar(compra, posicao);
        this._dialogCompra.showDialogButton();
    }
    editaUm(event, posicao) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);
        let inputItem = $('#itemEditar').value;
        let inputUnidade = $('#unidadeEditar').value;
        let inputQuantidade = $('#quantidadeEditar').value;
        let inputValor = $('#valorEditar').value;
        this._listaCompras.edita(inputItem, inputUnidade, inputQuantidade, inputValor, posicao);
        this._comprasStorage.salvaCompras(this._listaCompras);
        this._comprasView.update(this._listaCompras);
        this._dialogCompra.close();
        this._snackMensagem.mensagemSnack = "Compra atualizada com sucesso!";
        console.log("Editar : " + posicao + " " + inputItem + " " + inputUnidade + " " + inputQuantidade + " " + inputValor);
    }
    close(event) {
        event.preventDefault();
        this._dialogCompra.close();
    }
}

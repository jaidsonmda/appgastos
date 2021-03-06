class ReceitaController{
	constructor(){
		let $ = document.querySelector.bind(document);
		
		this._inputDesc = $('#descReceita');
		this._inputTipo = $('#tipoReceita');
		this._inputValor = $('#valorReceita');

		this._listaReceitas = new ListaReceita();
		this._receitasStorage = new ReceitaStorage();
		this._dialogReceita = new DialogReceita();
		this._dialogReceitaView = new DialogReceitaView($('#dialogReceitaView'));
		this._listaReceitas = this._receitasStorage.storageReceitas;

		this._receitasView = new ReceitasView($('#receitasView'));
		this._receitasView.update(this._listaReceitas);

		this._snackMensagem = new SnackBar();

		// this._mensagem = new Mensagem();
		// this._mensagemView= new MensagemView($('#mensagemView'));
		// this._mensagemView.update(this._mensagem);
	}
	adiciona(event){
		event.preventDefault();
		
		this._listaReceitas.adiciona(this._criaReceita());
		this._receitasStorage.salvaReceitas(this._listaReceitas);
		this._receitasView.update(this._listaReceitas);
		this._dialogReceita.close();
		this._snackMensagem.mensagemSnack=this._inputDesc.value+" adicionado(a) com sucesso!";
		this._limpaFormulario();
		console.log(this._listaReceitas.receitas);
	}
	apaga(event) {
		event.preventDefault();
		console.log(" tamanho lista receita"+this._listaReceitas.receitas.length);
		
		    this._listaReceitas.esvazia();
		    
		    this._receitasStorage.removeReceitas();
		    this._receitasView.update(this._listaReceitas);
		    this._snackMensagem.mensagemSnack="Receitas excluídas com sucesso!";
		
		this.close();
	}
	_criaReceita(){
		return new Receita(new Date(), this._inputDesc.value, this._inputTipo.value,
			this._inputValor.value);
	}
	_limpaFormulario(){
		this._inputValor.value='';
		
		this._inputTipo.value='';
		this._inputDesc.focus();
		this._inputDesc.value='';
		
	}
	apagaUm(event, posicao){
		event.preventDefault();
		this._listaReceitas.remove(posicao);
		this._receitasStorage.salvaReceitas(this._listaReceitas);
		this._receitasView.update(this._listaReceitas);
		this._snackMensagem.mensagemSnack="Receita excluída com sucesso!";
		console.log("Excluír : "+posicao);
	}
	pegaUm(event, posicao){
		event.preventDefault();
		console.log("entrou em pegaUm");
		
		let receita = this._listaReceitas.seleciona(posicao);
		console.log(receita);
		this._dialogReceitaView.updateEditar(receita, posicao);
		this._dialogReceita.showDialogButton();
		

	}
	editaUm(event, posicao){
		event.preventDefault();
		let $ = document.querySelector.bind(document);
		let inputDescricao = $('#descricaoReceitaEditar').value;
		let inputTipo = $('#tipoReceitaEditar').value;
		let inputValor = $('#valorReceitaEditar').value;
		this._listaReceitas.edita(inputDescricao, inputTipo, inputValor, posicao);
		console.log(this._listaReceitas);
		this._receitasStorage.salvaReceitas(this._listaReceitas);
		this._receitasView.update(this._listaReceitas);
		this._dialogReceita.close();
		this._snackMensagem.mensagemSnack="Compra atualizada com sucesso!";

		

	}
	abreDialog(event){
		event.preventDefault();
		this._dialogReceita.showDialogCadastra();

	}
	abreDialogExcluiTudo(event){
		console.log("chamou!");
		event.preventDefault();
		if(this._listaReceitas.receitas.length >=1){
		
		this._dialogReceita.showExcluiTudo();
		}
		else{
			this._snackMensagem.mensagemSnack="Não há receita para ser excluída!";
		}

	}
	close(){
		event.preventDefault();
		this._dialogReceita.close();
	}
}
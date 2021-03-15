

class DialogGasto{
  dialogPolyfill = require('dialog-polyfill')
  _dialog
  _dialogExclui;
  _dialogExcluiTudo;
  _dialogCadastra;
  
	constructor(){
		let $ = document.querySelector.bind(document);
		this._dialogCadastra= $('#cadastraGasto');
    	this._dialog = $('#dialogGastoView');
    	this._dialogExclui = $('#excluiGasto');
    	this._dialogExcluiTudo = $('#excluiGastoTudo');
    	if (! this._dialog.showModal) {
      		this.dialogPolyfill.registerDialog(this._dialog);
    	}
    	if (! this._dialogCadastra.showModal) {
      		this.dialogPolyfill.registerDialog(this._dialogCadastra);
    	}
      if (! this._dialogExcluiTudo.showModal) {
          this.dialogPolyfill.registerDialog(this._dialogExcluiTudo);
      }
      if (! this._dialogExclui.showModal) {
          this.dialogPolyfill.registerDialog(this._dialogExclui);
      }
	}
    showDialogButton(){
      this._dialog.showModal();
    }
    showDialogCadastra(){
      this._dialogCadastra.showModal();
    }
    showExclui(){
      this._dialogExclui.showModal();
    }
    showExcluiTudo(){
    	console.log("chamou exclui!");
      this._dialogExcluiTudo.showModal();
    }
    close(){
      if(this._dialog.open){
          this._dialog.close();
      }
      if(this._dialogCadastra.open){
          this._dialogCadastra.close();
      }
      if(this._dialogExclui.open){
          this._dialogExclui.close();
      }
      if(this._dialogExcluiTudo.open){
          this._dialogExcluiTudo.close();
      }
      
    }

}
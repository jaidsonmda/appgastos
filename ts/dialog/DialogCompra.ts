import dialogPolyfill from 'node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js';
class DialogCompra {
     dialogPoly= dialogPolyfill;
    _dialog;
    _dialogCadastra;
    _dialogExclui;
    _dialogExcluiTudo;
    constructor() {
        let $ = document.querySelector.bind(document);
        this._dialogCadastra = $('#cadastraItem');
        this._dialog = $('#dialogCompraView');
        this._dialogExclui = $('#excluiCompra');
        this._dialogExcluiTudo = $('#excluiCompraTudo');
        if (!this._dialog.showModal) {
           dialogPolyfill.registerDialog(this._dialog);
        }
        if (!this._dialogCadastra.showModal) {
            this.dialogPoly.registerDialog(this._dialogCadastra);
        }
        if (!this._dialogExcluiTudo.showModal) {
            this.dialogPoly.registerDialog(this._dialogExcluiTudo);
        }
        if (!this._dialogExclui.showModal) {
            dialogPolyfill.registerDialog(this._dialogExclui);
        }
    }

    showDialogButton() {
        this._dialog.showModal();
    }

    showDialogCadastra() {
        this._dialogCadastra.showModal();
    }

    showExclui() {
        this._dialogExclui.showModal();
    }

    showExcluiTudo() {
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
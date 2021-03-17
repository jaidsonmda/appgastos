import { dialogPolyfill } from 'node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js';
export class DialogReceita {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._dialogCadastra = $('#cadastraReceita');
        this._dialog = $('#dialogReceitaView');
        this._dialogExclui = $('#excluiReceita');
        this._dialogExcluiTudo = $('#excluiReceitaTudo');
        if (!this._dialog.showModal) {
            dialogPolyfill.registerDialog(this._dialog);
        }
        if (!this._dialogCadastra.showModal) {
            dialogPolyfill.registerDialog(this._dialogCadastra);
        }
        if (!this._dialogExcluiTudo.showModal) {
            dialogPolyfill.registerDialog(this._dialogExcluiTudo);
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
    close() {
        if (this._dialog.open) {
            this._dialog.close();
        }
        if (this._dialogCadastra.open) {
            this._dialogCadastra.close();
        }
        if (this._dialogExclui.open) {
            this._dialogExclui.close();
        }
        if (this._dialogExcluiTudo.open) {
            this._dialogExcluiTudo.close();
        }
    }
}

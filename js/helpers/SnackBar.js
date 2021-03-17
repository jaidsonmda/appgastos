class SnackBar {
    constructor() {
        this.snackbarContainer = document.querySelector('#demo-toast-example');
    }
    set mensagemSnack(mensagem) {
        let data = { message: mensagem };
        this.snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
}

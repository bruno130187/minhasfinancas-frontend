import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "10000",
    "hideDuration": "10000",
    "timeOut": "5000",
    "extendedTimeOut": "5000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export function mostrarMensagem(titulo, mensagem, tipo) {
    toastr[tipo](mensagem, titulo);
}

export function mensagemErro(mensagem) {
    mostrarMensagem('Erro', mensagem, 'error');
}

export function mensagemSucesso(mensagem) {
    mostrarMensagem('Sucesso', mensagem, 'success');
}

export function mensagemAlerta(mensagem) {
    mostrarMensagem('Alerta', mensagem, 'warning');
}
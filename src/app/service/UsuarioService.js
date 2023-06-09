import ApiService from '../Apiservice';

class UsuarioService extends ApiService {

    constructor() {
        super('/api/usuarios');
    }

    autenticar(credenciais) {
        return this.post('/autenticar', credenciais);
    }

    obterSaldoPorUsuario(id) {
        return this.get(`/${id}/saldo`);
    }

    salvar(usuario) {
        return this.post('', usuario);
    }

    validar(usuario) {
        const erros = [];

        if (usuario.action === 'login') {
            if (!usuario.email) {
                erros.push('O campo Email é obrigatório!');
            }
            if (!usuario.senha) {
                erros.push('O campo Senha é obrigatório!');
            }
        } else if (usuario.action === 'insert') {
            if (!usuario.nome) {
                erros.push('O campo Nome é obrigatório!');
            }

            if (!usuario.email) {
                erros.push('O campo Email é obrigatório!');
            } else if (!usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
                erros.push('Informe um Email válido!');
            }

            if (!usuario.senha || !usuario.senhaRepeticao) {
                erros.push('Digite a mesma senha nos campos de senha!');
            } else if (usuario.senha.length < 6 || usuario.senhaRepeticao.length < 6) {
                erros.push('Mínimo 6 caracteres para a Senha!');
            } else if (usuario.senha !== usuario.senhaRepeticao) {
                erros.push('As senhas não são iguais!');
            }
        }

        return erros;

    }

}

export default UsuarioService;
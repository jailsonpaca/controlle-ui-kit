/* eslint-disable no-template-curly-in-string */
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const defaultValidateMessages = {
    default: 'Você precisa inserir um ${name}',
    required: 'Você precisa inserir um ${name}',
    pattern: {
        mismatch: 'Você precisa inserir um ${name} correto',
    },
};

export const ALLOWED_ROUTES = [
    'sair',
    'login',
    'login/cadastro',
    'nova-entidade',
    'empresas-que-participo',
    'minha-conta',
];

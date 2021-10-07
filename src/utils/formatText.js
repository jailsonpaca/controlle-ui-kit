export const formatCep = cep => {
    if (cep) {
        return String(cep).replace(/(\d{5})(\d{3})/, '$1-$2');
    }

    return null;
};

export const formatPhone = phone => {
    if (phone) {
        return String(phone).replace(/(\d{2})(\d{5}|\d{4})(\d{4})/, '($1) $2-$3');
    }

    return null;
};

function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}
function mascaraCnpj(valor) {
    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
}

export function formatCpfCnpj(campoTexto) {
    if (campoTexto.length <= 11) {
        return mascaraCpf(campoTexto);
    }
    return mascaraCnpj(campoTexto);
}

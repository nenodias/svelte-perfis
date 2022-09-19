function buscaUsuario(nome: string) {
    return fetch(
        `https://api.github.com/users/${nome}`
    );
}

function buscaRepositorios(nome: string) {
    return fetch(
        `https://api.github.com/users/${nome}/repos?sort=created&per_page=5`
    );
}

export { buscaUsuario, buscaRepositorios };
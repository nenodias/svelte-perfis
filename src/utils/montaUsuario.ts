import type IRepositorio from "../interfaces/IRepositorio";
import type IUsuario from "../interfaces/IUsuario";

export default function montaUsuario(dadosUsuario: any, dadosRepositorio: any):IUsuario {
    const repositorios_recentes = dadosRepositorio.map((repositorio) => {
        return {
            nome: repositorio.name,
            url: repositorio.html_url
        } as IRepositorio;
    });
    return {
        nome: dadosUsuario.name,
        avatar_url: dadosUsuario.avatar_url,
        login: dadosUsuario.login,
        perfil_url: dadosUsuario.html_url,
        repositorios_publicos: dadosUsuario.public_repos,
        seguidores: dadosUsuario.followers,
        repositorios_recentes: repositorios_recentes
    }
}
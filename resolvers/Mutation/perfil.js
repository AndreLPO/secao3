const { perfis, proximoIdP } = require("../../data/db");

module.exports = {
  novoPerfil(_, args) {
    const nomeExistente = perfis.some((p) => p.nome === args.nome);
    if (nomeExistente) {
      throw new Error("Perfil já cadastrado");
    }
    const novo = {
      id: proximoIdP(),
      nome: args.nome,
    };

    perfis.push(novo);
    console.log(novo);
    return novo;
  },

  excluirPerfil(_, { id }) {
    const i = perfis.findIndex((u) => u.id === id);
    if (i < 0) {
      return null;
    }
    const excluido = perfis.splice(i, 1);

    return excluido ? excluido[0] : null;
  },

  alteraPerfil(_, args) {
    const i = perfis.findIndex((u) => u.id === args.id);
    if (i < 0) {
      return null;
    }

    const perfil = {
      ...perfis[i],
      ...args,
    };

    perfis.splice(i, 1, perfil);

    return perfil;
  },
};

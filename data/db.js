let id = 1;
let id_p = 1;
function proximoId() {
  return id++;
}
function proximoIdP() {
  return id_p++;
}

const perfis = [
  { id: proximoIdP(), nome: "comum" },
  { id: proximoIdP(), nome: "administrador" },
];

const usuarios = [
  {
    id: proximoId(),
    nome: "João Silva",
    email: "jsilva@zemail.com",
    idade: 29,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: proximoId(),
    nome: "Rafael Junior",
    email: "rafajun@wemail.com",
    idade: 31,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: proximoId(),
    nome: "Daniela Smith",
    email: "danismi@umail.com",
    idade: 24,
    perfil_id: 1,
    status: "BLOQUEADO",
  },
];

module.exports = { usuarios, perfis, proximoId, proximoIdP };

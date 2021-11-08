import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf) //alt shift f = indentar
        this.bonificacao = 1.1;
    }
}
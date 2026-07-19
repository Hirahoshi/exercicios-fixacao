/**
 * Arquivo Principal (Main)
 * Responsável por importar e executar todos os módulos do projeto,
 * demonstrando o conceito de Modularização.
 */

// 1. Importando os módulos de cada pasta
const executarEstruturada = require('./programacao_estruturada/combateBasico');
const executarOO = require('./orientacao_objetos/Personagens');
const executarEncapsulamento = require('./visibilidade_encapsulamento/PersonagemSeguro');
const executarHeranca = require('./encapsulamento_condicionais_heranca/ClassesEspecializadas');

console.log("==================================================");
console.log("⚔️ INICIANDO O SISTEMA DE RPG - TESTE COMPLETO ⚔️");
console.log("==================================================\n");

console.log("--- 1. PROGRAMAÇÃO ESTRUTURADA ---");
executarEstruturada();

console.log("\n--- 2. ORIENTAÇÃO A OBJETOS ---");
executarOO();

console.log("\n--- 3. VISIBILIDADE E ENCAPSULAMENTO ---");
executarEncapsulamento();

console.log("\n--- 4. ENCAPSULAMENTO, CONDICIONAIS E HERANÇA ---");
executarHeranca();

console.log("\n==================================================");
console.log("✅ TODOS OS MÓDULOS FORAM EXECUTADOS COM SUCESSO");
console.log("==================================================");
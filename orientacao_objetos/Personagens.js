/**
 * Exercício 2: Orientação a Objetos
 * Foco: Classes, construtor, atributos públicos e métodos.
 */

class Personagem {
    constructor(nome, hp, ataque, defesa) {
      this.nome = nome;
      this.hp = hp; // Atributo ainda público (vulnerável)
      this.ataque = ataque;
      this.defesa = defesa;
    }
  
    receberDano(danoBruto) {
      const danoReal = danoBruto - this.defesa;
      if (danoReal > 0) {
        this.hp -= danoReal;
        if (this.hp < 0) this.hp = 0;
        console.log(`${this.nome} sofreu ${danoReal} de dano. HP: ${this.hp}`);
      }
    }
  
    atacar(alvo) {
      console.log(`${this.nome} ataca ${alvo.nome}!`);
      alvo.receberDano(this.ataque);
    }
  }
  
  // Teste
  const heroi = new Personagem("Arthur", 100, 20, 10);
  const inimigo = new Personagem("Goblin", 40, 15, 2);
  heroi.atacar(inimigo);


  function executar() {
    const heroi = new Personagem("Arthur", 100, 20, 10);
    const inimigo = new Personagem("Goblin", 40, 15, 2);
    heroi.atacar(inimigo);
  }
  
  // Exporta a função para o main.js
  module.exports = executar;

  
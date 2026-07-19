/**
 * Exercício 3: Visibilidade e Encapsulamento
 * Foco: Atributos privados (#) e métodos de acesso (getters).
 */

class PersonagemSeguro {
    #hp; // Agora é privado
  
    constructor(nome, hpMaximo, ataque, defesa) {
      this.nome = nome;
      this.#hp = hpMaximo;
      this.ataque = ataque;
      this.defesa = defesa;
    }
  
    // Permite ler o HP de fora, mas não alterar
    get hp() {
      return this.#hp;
    }
  
    receberDano(danoBruto) {
      const danoReal = danoBruto - this.defesa;
      if (danoReal > 0) {
        this.#hp -= danoReal;
        if (this.#hp < 0) this.#hp = 0;
        console.log(`${this.nome} sofreu ${danoReal} de dano. HP Restante: ${this.#hp}`);
      }
    }
  }
  
  // Teste
  const cavaleiro = new PersonagemSeguro("Lancelot", 150, 25, 15);
  cavaleiro.receberDano(30);
  // cavaleiro.#hp = 9999; // ERRO: O encapsulamento impede essa trapaça.


  function executar() {
    const cavaleiro = new PersonagemSeguro("Lancelot", 150, 25, 15);
    cavaleiro.receberDano(30);
  }
  
  // Exporta a função para o main.js
  module.exports = executar;
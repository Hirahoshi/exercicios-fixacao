/**
 * Exercício 4: Herança, Condicionais e Encapsulamento
 * Foco: extends, super, polimorfismo e lógicas condicionais.
 */

// Usando a lógica da etapa 3 como base
class Entidade {
    #hp;
    constructor(nome, hpMaximo, defesa) {
      this.nome = nome;
      this.#hp = hpMaximo;
      this.defesa = defesa;
    }
    get hp() { return this.#hp; }
    
    receberDano(dano) {
      const real = dano - this.defesa;
      if (real > 0) {
        this.#hp = this.#hp - real < 0 ? 0 : this.#hp - real;
      }
    }
  }
  
  // Herança 1: Guerreiro (Condicional de Acerto Crítico)
  class Guerreiro extends Entidade {
    constructor(nome, hpMaximo, defesa, forca) {
      super(nome, hpMaximo, defesa);
      this.forca = forca;
    }
  
    atacar(alvo) {
      let danoFinal = this.forca;
      const acertoCritico = Math.random() > 0.7; // 30% de chance
      
      if (acertoCritico) {
        console.log(`💥 CRÍTICO! ${this.nome} dobra sua força!`);
        danoFinal *= 2;
      }
      alvo.receberDano(danoFinal);
    }
  }
  
  // Herança 2: Mago (Condicional de recurso encapsulado)
  class Mago extends Entidade {
    #mana;
  
    constructor(nome, hpMaximo, defesa, poderMagico, manaInicial) {
      super(nome, hpMaximo, defesa);
      this.poderMagico = poderMagico;
      this.#mana = manaInicial;
    }
  
    atacar(alvo) {
      if (this.#mana >= 15) {
        this.#mana -= 15;
        console.log(`✨ ${this.nome} lança magia! (Mana: ${this.#mana})`);
        alvo.receberDano(this.poderMagico); // Dano mágico
      } else {
        console.log(`💨 Sem mana! ${this.nome} ataca fraco.`);
        alvo.receberDano(5); // Dano físico base
      }
    }
  }
  
  // Teste Final
  const heroi = new Guerreiro("Aragorn", 120, 5, 25);
  const feiticeiro = new Mago("Saruman", 80, 2, 40, 20);
  
  heroi.atacar(feiticeiro);
  feiticeiro.atacar(heroi);
  feiticeiro.atacar(heroi); // O segundo ataque falhará por falta de mana (condicional)



  function executar() {
    const heroi = new Guerreiro("Aragorn", 120, 5, 25);
    const feiticeiro = new Mago("Saruman", 80, 2, 40, 20);
  
    heroi.atacar(feiticeiro);
    feiticeiro.atacar(heroi);
    feiticeiro.atacar(heroi);
  }
  
  // Exporta a função para o main.js
  module.exports = executar;
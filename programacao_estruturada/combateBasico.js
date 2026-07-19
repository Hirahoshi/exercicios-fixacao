/**
 * Exercício 1: Programação Estruturada
 * Foco: Variáveis, funções e estruturas de controle básicas.
 */

function calcularDanoReal(ataque, defesa) {
    const dano = ataque - defesa;
    return dano > 0 ? dano : 0;
  }
  
  function simularTurno(nomeAtacante, ataque, nomeDefensor, hpDefensor, defesa) {
    const dano = calcularDanoReal(ataque, defesa);
    let hpRestante = hpDefensor - dano;
    
    if (hpRestante < 0) hpRestante = 0;
  
    console.log(`${nomeAtacante} atacou!`);
    console.log(`Dano causado: ${dano} | HP de ${nomeDefensor}: ${hpRestante}`);
    
    return hpRestante;
  }
  
  // Teste
  let vidaMonstro = 50;
  vidaMonstro = simularTurno("Guerreiro", 15, "Orc", vidaMonstro, 5);
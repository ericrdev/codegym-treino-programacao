const exercises = [
  {
    id: 'fundamentos-soma', level: 1, title: 'Soma de dois valores', category: 'Variáveis', difficulty: 'Fácil', language: 'python',
    description: 'Crie uma função `resolver(a, b)` que devolve a soma de dois números. Antes de programar, identifique as entradas e a saída.',
    examples: [{ input: '2, 3', output: '5' }, { input: '-4, 10', output: '6' }],
    starterCode: 'def resolver(a, b):\n    # escreva sua solução aqui\n    pass',
    tests: [{ args: [2, 3], expected: 5 }, { args: [-4, 10], expected: 6 }, { args: [0, 0], expected: 0 }],
    hints: ['O problema tem duas entradas numéricas e uma saída numérica.', 'Use o operador aritmético de adição (+).', 'A função deve retornar a soma: pense em `a + b`.'],
    solution: 'def resolver(a, b):\n    return a + b', explanation: 'Somar é uma operação direta: a função recebe os dois valores e retorna o resultado, sem imprimir.'
  },
  {
    id: 'condicoes-par', level: 2, title: 'Número par?', category: 'Condições', difficulty: 'Fácil', language: 'python',
    description: 'Crie `resolver(numero)` que retorna `True` quando o número é par e `False` nos demais casos.',
    examples: [{ input: '8', output: 'True' }, { input: '7', output: 'False' }],
    starterCode: 'def resolver(numero):\n    # retorne True ou False\n    pass',
    tests: [{ args: [8], expected: true }, { args: [7], expected: false }, { args: [0], expected: true }, { args: [-12], expected: true }],
    hints: ['Tente encontrar uma característica que todos os pares têm.', 'O operador módulo (`%`) informa o resto da divisão.', 'Um número é par quando o resto de sua divisão por 2 é igual a zero.'],
    solution: 'def resolver(numero):\n    return numero % 2 == 0', explanation: 'A expressão `numero % 2 == 0` já produz um valor booleano, portanto pode ser retornada diretamente.'
  },
  {
    id: 'repeticao-soma-lista', level: 3, title: 'Somando a lista', category: 'Repetição', difficulty: 'Médio', language: 'python',
    description: 'Crie `resolver(numeros)` que calcula a soma dos valores de uma lista usando repetição. Não use `sum`.',
    examples: [{ input: '[1, 2, 3]', output: '6' }, { input: '[-2, 5]', output: '3' }],
    starterCode: 'def resolver(numeros):\n    total = 0\n    # percorra a lista\n    return total',
    tests: [{ args: [[1,2,3]], expected: 6 }, { args: [[-2,5]], expected: 3 }, { args: [[]], expected: 0 }, { args: [[10,-1,4]], expected: 13 }],
    hints: ['Comece pensando no valor neutro de uma soma.', 'Você precisará de um acumulador e de um `for`.', 'Inicie `total` em 0; para cada número, acrescente-o a `total`.'],
    solution: 'def resolver(numeros):\n    total = 0\n    for numero in numeros:\n        total += numero\n    return total', explanation: 'O acumulador guarda o resultado parcial. A cada volta, ele recebe o próximo valor da lista.'
  },
  {
    id: 'strings-palindromo', level: 5, title: 'Espelho de palavras', category: 'Strings', difficulty: 'Médio', language: 'python',
    description: 'Crie `resolver(texto)` que retorna se um texto é igual ao seu inverso. Considere letras minúsculas sem espaços.',
    examples: [{ input: '"arara"', output: 'True' }, { input: '"codigo"', output: 'False' }],
    starterCode: 'def resolver(texto):\n    pass',
    tests: [{ args: ['arara'], expected: true }, { args: ['ovo'], expected: true }, { args: ['codigo'], expected: false }, { args: ['a'], expected: true }],
    hints: ['Compare o texto original com uma versão transformada.', 'Strings podem ser percorridas pelos índices; fatias também podem inverter uma sequência.', 'A fatia `texto[::-1]` cria uma versão invertida. Compare-a com o original.'],
    solution: 'def resolver(texto):\n    return texto == texto[::-1]', explanation: 'A fatia com passo -1 produz a string invertida; a comparação retorna `True` ou `False`.'
  },
  {
    id: 'funcoes-maior', level: 6, title: 'Maior valor', category: 'Funções', difficulty: 'Médio', language: 'python',
    description: 'Crie `resolver(numeros)` que devolve o maior número de uma lista não vazia sem usar `max`.',
    examples: [{ input: '[3, 9, 2]', output: '9' }],
    starterCode: 'def resolver(numeros):\n    maior = numeros[0]\n    # compare os demais valores\n    return maior',
    tests: [{ args: [[3,9,2]], expected: 9 }, { args: [[-5,-2,-8]], expected: -2 }, { args: [[4]], expected: 4 }],
    hints: ['Você não precisa ordenar a lista para encontrar o maior.', 'Guarde o maior valor visto até agora e compare cada item.', 'Inicie com o primeiro item; se um próximo número for maior, atualize a variável.'],
    solution: 'def resolver(numeros):\n    maior = numeros[0]\n    for numero in numeros:\n        if numero > maior:\n            maior = numero\n    return maior', explanation: 'A variável `maior` mantém o melhor candidato até o momento e só é atualizada quando encontra um valor maior.'
  }
];
module.exports = { exercises };

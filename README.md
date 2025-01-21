Juros Compostos

Um sistema simples para calcular juros compostos, desenvolvido para demonstrar boas práticas de versionamento, organização e documentação no Git e GitHub.
Descrição

O sistema calcula o valor final de um investimento ou empréstimo aplicando a fórmula de juros compostos. Ele também inclui testes automatizados para validar os cálculos.
Funcionalidades

    Cálculo do valor final com base no principal, taxa de juros e período.
    Tratamento de cenários com valores negativos.
    Testes para validar os resultados com diferentes cenários.

Exemplos de Entrada e Saída
// Importar a função
const calcularJurosCompostos = require('./src/calculo');

// Cálculo com valores positivos
console.log(calcularJurosCompostos(1000, 0.05, 12)); // Saída: ~1795.85

// Cálculo com valores negativos
console.log(calcularJurosCompostos(1500, -0.02, 10)); // Saída: ~1221.68

Fórmula Utilizada:

A fórmula usada no cálculo é:
FV=PV×(1+i)n
FV=PV×(1+i)n

Onde:

    FV: Valor futuro.
    PV: Valor principal.
    i: Taxa de juros.
    n: Número de períodos.

Como Executar o Projeto
Requisitos

    Node.js instalado no sistema.

Passos para executar

Clone o repositório:
    git clone https://github.com/arthur1804/juros-compostos.git

Acesse o diretório do projeto:
  cd juros-compostos
Instale as dependências (se necessário):
  npm install

Execute o código principal:
  node src/calculo.js
Para rodar os testes:
  node tests/test_calculo.js


juros-compostos/
├── src/
│   └── calculo.js        # Código principal para cálculo de juros compostos
├── tests/
│   └── test_calculo.js   # Testes do sistema
├── docs/                 # Documentação adicional (futura expansão)
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Documentação principal

Release

A versão atual é a v1.0.0.

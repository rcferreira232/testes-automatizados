# 📦 Testes Automatizados

Repositório destinado à disciplina de **Testes Automatizados**, contendo exemplos práticos e exercícios com foco em **testes de software utilizando TypeScript e Jest**.

---

## 🚀 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)

---

## 📚 Exemplos e Exercícios

### 📊 Exemplo 1: Calculadora

Exemplo de uma calculadora simples com testes automatizados.

```bash
# 1. Navegar até a pasta do exemplo
cd calculadora

# 2. Inicializar o projeto Node
npm init -y

# 3. Instalar dependências de desenvolvimento
npm install --save-dev typescript jest ts-jest @types/jest

# 4. Criar o arquivo tsconfig.json
npx tsc --init

# 5. Inicializar a configuração do Jest para TypeScript
npx ts-jest config:init

# 6. Executar os testes
npm test
```

### 📊 Exemplo 2:

Exemplo de api com testes automatizados para resolver um puzzle aleatório do site ???.

```bash
# 1. Navegar até a pasta do exemplo
cd random-puzzle

# 2. Inicializar o projeto Node
npm init -y

# 3. Instalar dependências
npm install fastify @fastify/cors tsx

# 4. Instalar dependências de desenvolvimento
npm install --save-dev typescript jest ts-jest @types/jest @types/node

# 5. Criar o arquivo tsconfig.json
npx tsc --init

# 6. Inicializar a configuração do Jest para TypeScript
npx ts-jest config:init

# 7. Executar os testes
npm test
```

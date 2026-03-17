# Portfólio Marciano

> Uma landing page de portfólio desenvolvida em **React + TypeScript + Vite** com arquitetura em camadas e componentes reutilizáveis.

---

## 🚀 Sobre

Este projeto é um portfólio pessoal que apresenta uma landing page com seções de **Home**, **Sobre**, **Projetos** e **Contato**, usando:

- **React 18** como biblioteca de UI
- **TypeScript** para tipagem estática
- **Vite** para bundling e desenvolvimento rápido
- **Tailwind CSS** para estilização utilitária
- **Framer Motion** para animações suaves e interações
- **React Router v6** para navegação entre páginas

O código segue uma arquitetura em camadas inspirada em Clean Architecture, com separação clara entre domínios, casos de uso e implementação de repositório.

---

## 🧩 Estrutura do Projeto

```
src/
  application/          # Casos de uso (Use Cases)
  domain/               # Entidades + Interfaces de Repositório
  infra/                # Implementações concretas (ex: Mock Repository)
  presentation/         # UI (páginas, componentes, rotas)
    components/
    pages/
    routes/
  index.css
  main.tsx
  App.tsx
```

### Camadas Principais

- **Domain**: modelos (entidades) e contratos (interfaces) usados em toda a aplicação.
- **Application**: lógica de negócio (use cases) que consome as interfaces do domínio.
- **Infra**: implementação concreta de repositórios (simulação de API).
- **Presentation**: componentes React, páginas e roteamento.

---

## ✅ Funcionalidades Principais

- Navegação entre páginas (`/`, `/sobre`, `/projetos`, `/contato`)
- Carregamento assíncrono de projetos (mock) com estado de loading e erro
- Cartões de projeto reutilizáveis com animação
- Layout responsivo com Tailwind CSS

---

## 🛠️ Tecnologias

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **React Router v6**
- **Lucide Icons**

---

## ▶️ Como Executar

### 1) Instalar dependências

```bash
npm install
```

### 2) Iniciar servidor de desenvolvimento

```bash
npm run dev
```

### 3) Build de produção

```bash
npm run build
```

### 4) Pré-visualizar build

```bash
npm run preview
```

---

## 🧪 Onde Alterar os Projetos

Os projetos usados na página de projetos são fornecidos pelo repositório simulado:

- `src/infra/repositories/MockProjectRepository.ts`

Você pode substituir esta implementação por uma chamada real à API (fetch/axios) criando outra classe que implemente `IProjectRepository`:

- `src/domain/repositories/IProjectRepository.ts`

---

## 🧭 Dicas de Extensão

- Substituir `MockProjectRepository` por um repositório que consome uma API real
- Adicionar formulário funcional na página de contato
- Incluir testes automatizados (Jest/Testing Library)
- Adicionar i18n para suporte multilíngue

---

## 📄 Licença

Este projeto está disponível sob a [MIT License](LICENSE) (adapte conforme necessário).

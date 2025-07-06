# RedFlow Landing Page

Uma landing page moderna, responsiva e acessível desenvolvida com **Next.js**, **React**, **TypeScript** e **TailwindCSS** para apresentar o sistema **RedFlow** de gestão de bancos de sangue. Ela consome dados em tempo real da **API RedFlow**, exibindo informações sobre doações, estatísticas e equipe médica.

---

## 📌 Visão Geral

Este projeto foi criado como parte de um mini projeto acadêmico, com o objetivo de demonstrar como tecnologias web modernas podem construir interfaces bonitas, performáticas e funcionais. O **RedFlow** aborda um problema crítico da saúde pública: a gestão eficiente de bancos de sangue — conectando doadores, hospitais e pacientes para salvar vidas.

---

## 🛠️ Tecnologias Utilizadas

* **Next.js (13.5.1)** — Framework React para aplicações web modernas e performáticas
* **React (18.2.0)** — Biblioteca para criação de interfaces reativas
* **TypeScript (5.2.2)** — Superset do JavaScript com tipagem estática
* **TailwindCSS (3.3.3)** — Framework CSS utility-first
* **Lucide React (0.446.0)** — Ícones modernos e acessíveis
* **ESLint (8.49.0)** — Ferramenta de análise estática de código

---

## 📋 Funcionalidades

* **Design Responsivo**: Mobile-first com breakpoints otimizados
* **Integração com API**: Consome dados em tempo real com tratamento de erros
* **Animações Modernas**: Transições suaves e efeitos interativos
* **Componentização**: Código limpo e reutilizável com TypeScript
* **Performance Otimizada**: Renderização e prefetch via Next.js
* **Acessibilidade**: WCAG-ready com HTML semântico

---

## 🎯 Integração com API

A landing page consome os seguintes endpoints da [API RedFlow](https://github.com/Tayssa2212/RedFlow-API):

* `/api/donations` — Doações ativas
* `/api/stats` — Métricas em tempo real
* `/api/team` — Equipe médica

Cada seção implementa:

* **Carregamento Assíncrono**
* **Fallback para Demonstração**
* **Mensagens de Erro Informativas**

---

## 📦 Instalação e Configuração

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/redflow-landing-page.git
cd redflow-landing-page

# Instale as dependências
npm install
```

Edite os endpoints da API nos seguintes arquivos:

* `components/FlowsSection.tsx`
* `components/StatsSection.tsx`
* `components/UsersSection.tsx`

```bash
# Inicie o servidor local
npm run dev
# Acesse: http://localhost:3000
```

---

## 🏠 Estrutura de Pastas

```
├── app/
│   ├── globals.css        # Estilos globais + Tailwind config
│   ├── layout.tsx         # Layout da aplicação
│   └── page.tsx           # Página principal
├── components/
│   ├── Navigation.tsx     # Header com scroll suave
│   ├── Hero.tsx           # Seção Hero com CTA
│   ├── FlowsSection.tsx   # Doações
│   ├── StatsSection.tsx   # Estatísticas
│   ├── UsersSection.tsx   # Equipe médica
│   └── Footer.tsx         # Rodapé
├── lib/
│   └── utils.ts           # Funções utilitárias
└── public/                # Assets estáticos
```

---

## 🎨 Sistema de Design

* **Paleta de Cores**: Tons de vermelho e rosa (tema médico)
* **Tipografia**: Fonte *Inter*, com espaçamento consistente
* **Grid**: Sistema de 8px
* **Componentes**: Cards com estados hover
* **Animações**: Micro-interações suaves

---

## 📱 Breakpoints

* **Mobile**: `< 768px`
* **Tablet**: `768px - 1024px`
* **Desktop**: `> 1024px`

---

## 🚀 Deploy

Para exportar a landing page de forma estática:

```bash
npm run build
```

Os arquivos finais estarão em `/out`, prontos para deploy em plataformas como Vercel, Netlify, GitHub Pages, etc.

---

## 📪 Impacto Médico

O RedFlow resolve problemas reais na gestão de bancos de sangue:

* **Rastreabilidade**: Doação até o uso
* **Compatibilidade**: Matching inteligente entre doadores e receptores
* **Emergências**: Resposta ágil
* **Qualidade**: Controle rigoroso de processos
* **Disponibilidade**: Monitoramento de estoques em tempo real

---

## 🤝 Contribuição

```bash
# Fork o projeto
# Crie uma branch: git checkout -b feature/nova-funcionalidade
# Faça seus commits: git commit -m "Adiciona nova funcionalidade"
# Push: git push origin feature/nova-funcionalidade
# Crie um Pull Request 🚀
```

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo `LICENSE`.

---

## 📬 Contato

* **LinkedIn**: [Seu Perfil](https://linkedin.com/in/tayssa-ramos-6523a2318/)
* **GitHub**: [Tayssa2212](https://github.com/Tayssa2212)

---

> Este projeto foi criado como uma demonstração educacional de práticas modernas de desenvolvimento web e técnicas de integração com APIs, com foco na área da saúde e gestão de bancos de sangue.

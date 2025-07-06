# RedFlow - Sistema de Gestão para Banco de Sangue

Uma landing page moderna e responsiva desenvolvida com Next.js, React, TypeScript e TailwindCSS que apresenta o sistema RedFlow de gestão para bancos de sangue, consumindo dados da API RedFlow para exibir informações sobre doações, estatísticas e equipe médica.

## 🩸 Visão Geral do Projeto

Este projeto foi desenvolvido como parte de um mini projeto acadêmico para demonstrar como tecnologias web modernas podem ser utilizadas para criar interfaces bonitas e funcionais que consomem dados de APIs. O RedFlow resolve o problema crítico de gestão eficiente de bancos de sangue, conectando doadores, hospitais e pacientes para salvar vidas.

## 🛠️ Tecnologias Utilizadas

- **Next.js**: 13.5.1 - Framework React para produção
- **React**: 18.2.0 - Biblioteca JavaScript para construção de interfaces
- **TypeScript**: 5.2.2 - Superset tipado do JavaScript
- **TailwindCSS**: 3.3.3 - Framework CSS utility-first
- **Lucide React**: 0.446.0 - Biblioteca de ícones moderna
- **ESLint**: 8.49.0 - Linting e formatação de código

## 📋 Funcionalidades

- **Design Responsivo**: Abordagem mobile-first com breakpoints para todos os dispositivos
- **Integração com API**: Consome múltiplos endpoints da API RedFlow com tratamento de erros
- **Animações Modernas**: Transições suaves e efeitos hover em toda a aplicação
- **Arquitetura de Componentes**: Componentes React limpos e reutilizáveis com TypeScript
- **Otimizado para Performance**: Construído com Next.js para velocidades de carregamento otimais
- **Acessibilidade**: Compatível com WCAG e HTML semântico adequado

## 🎯 Integração com API

A landing page consome dados da API RedFlow através dos seguintes endpoints:

- **Endpoint de Doações**: `/api/donations` - Exibe doações ativas de sangue
- **Endpoint de Estatísticas**: `/api/stats` - Mostra métricas de performance em tempo real
- **Endpoint da Equipe**: `/api/team` - Apresenta informações da equipe médica

Cada seção inclui estados de carregamento, tratamento de erros e dados de fallback para fins de demonstração.

## 📦 Instalação e Configuração

1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/redflow-landing-page.git
cd redflow-landing-page
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Atualize os endpoints da API**:
Edite as URLs da API nos seguintes arquivos para corresponder à sua API RedFlow:
- `components/FlowsSection.tsx`
- `components/StatsSection.tsx`
- `components/UsersSection.tsx`

4. **Execute o servidor de desenvolvimento**:
```bash
npm run dev
```

5. **Abra seu navegador**:
Navegue para `http://localhost:3000` para ver a landing page.

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais e configuração do Tailwind
│   ├── layout.tsx          # Componente de layout raiz
│   └── page.tsx            # Componente da página principal
├── components/
│   ├── Navigation.tsx      # Navegação do cabeçalho com scroll suave
│   ├── Hero.tsx           # Seção hero com call-to-action
│   ├── FlowsSection.tsx   # Seção de exibição de doações
│   ├── StatsSection.tsx   # Seção de estatísticas de performance
│   ├── UsersSection.tsx   # Seção da equipe médica
│   └── Footer.tsx         # Rodapé com informações da empresa
├── lib/
│   └── utils.ts           # Funções utilitárias
└── public/                # Assets estáticos
```

## 🎨 Sistema de Design

A landing page implementa um sistema de design médico abrangente:

- **Paleta de Cores**: Tons de vermelho e rosa representando sangue e cuidados médicos
- **Tipografia**: Família de fontes Inter com dimensionamento e espaçamento consistentes
- **Espaçamento**: Sistema de grid de 8px para layouts consistentes
- **Componentes**: Designs de cards reutilizáveis com estados hover
- **Animações**: Transições suaves e micro-interações

## 🔗 Links Relacionados

- **Repositório da API RedFlow**: [https://github.com/Tayssa2212/RedFlow-API](https://github.com/Tayssa2212/RedFlow-API)
- **Demo ao Vivo**: [URL do seu site implantado]
- **Post no LinkedIn**: [Seu post de apresentação no LinkedIn]

## 📱 Breakpoints Responsivos

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

O projeto está configurado para exportação estática e pode ser implantado em várias plataformas:

```bash
npm run build
```

Os arquivos construídos estarão no diretório `out`, prontos para implantação.

## 🩺 Contexto Médico

O RedFlow aborda desafios críticos na gestão de bancos de sangue:

- **Rastreabilidade**: Acompanhamento completo desde a doação até o uso
- **Compatibilidade**: Sistema inteligente de matching entre doadores e receptores
- **Emergências**: Resposta rápida para situações críticas
- **Qualidade**: Controle rigoroso de qualidade e segurança
- **Disponibilidade**: Monitoramento em tempo real dos estoques

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 📧 Contato

Para dúvidas ou suporte, entre em contato:
- Email: seu-email@exemplo.com
- LinkedIn: [Seu Perfil no LinkedIn]
- GitHub: [Seu Perfil no GitHub]

---

**Nota**: Este projeto foi criado como uma demonstração educacional de práticas modernas de desenvolvimento web e técnicas de integração com APIs, com foco na área da saúde e gestão de bancos de sangue.

## 🏥 Sobre Bancos de Sangue

Os bancos de sangue são instituições fundamentais no sistema de saúde, responsáveis por:

- Coleta, processamento e armazenamento de sangue
- Testes de compatibilidade e segurança
- Distribuição para hospitais e clínicas
- Manutenção de estoques estratégicos
- Atendimento a emergências médicas

O RedFlow moderniza esses processos através da tecnologia, garantindo maior eficiência e segurança para todos os envolvidos.
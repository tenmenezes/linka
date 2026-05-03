# 🔗 Linka

> Um ecossistema que conecta estudantes e empresas através de projetos acadêmicos, oportunidades e inovação.

---

## Sobre o Projeto

O **Linka** é uma plataforma desenvolvida para conectar alunos universitários e empresas através de projetos acadêmicos.

A proposta é simples: criar um ambiente onde estudantes possam **exibir seus projetos**, enquanto empresas podem **descobrir talentos, investir em ideias e criar oportunidades reais**.

O Linka não é apenas um repositório de projetos, é um **ecossistema de conexão**, aprendizado e crescimento profissional.

---

## Objetivo

Criar uma ponte entre:

- Estudantes (de qualquer área)
- Empresas
- Projetos acadêmicos
- Oportunidades reais

Um app que realmente **"Linka" todos nós**.

---

## Funcionalidades

### Para estudantes

- Publicar projetos acadêmicos
- Criar portfólio(perfil) dentro da plataforma
- Receber contatos de empresas
- Receber investimentos em projetos
- Participar de eventos e oportunidades

### Para empresas

- Descobrir talentos
- Investir em projetos
- Publicar vagas
- Criar eventos (hackathons, palestras, cursos)
- Se conectar com estudantes de diversas áreas

### Plataforma

- Aba de projetos
- Aba de oportunidades
- Aba de vagas
- Aba de eventos
- Sistema de autenticação
- Perfil de usuário

---

## Tecnologias Utilizadas / Planejadas

### Frontend
- React
- React Native
- NativeWind
- Zod

### Backend (API / AUTH / DB)
- Supabase

### APIs Externas

- Pagamentos
- - Stripe js: 
- - - https://docs.stripe.com/js
- Autenticação
- - Supabase Auth: 
- - - https://supabase.com/docs/guides/auth
- Notificações
- - Expo Notifications: 
- - - https://docs.expo.dev/versions/latest/sdk/notifications/
- - OneSignal: 
- - - https://documentation.onesignal.com/docs/en/react-native-sdk-setup
- Backend mais robusto
- - Supabase Edge Functions:
- - - https://supabase.com/docs/guides/functions
- - Supabase Storage: 
- - - https://supabase.com/docs/guides/storage
- Chat / Feed em tempo real
- - Supabase RealTime: 
- - - https://supabase.com/docs/guides/realtime
- Análise de usuários / eventos
- - FireBase Analytics: 
- - - https://firebase.google.com/docs/analytics?hl=pt-br

---

## Estrutura do Projeto

```bash
├── app
│   ├── (auth)
│   │   ├── _layout.jsx
│   │   ├── cadastro.jsx
│   │   ├── login.jsx
│   │   └── redefinir-senha.jsx
│   ├── (tabs)
│   │   ├── _layout.jsx
│   │   ├── about.jsx
│   │   ├── home.jsx
│   │   ├── opportunities.jsx
│   │   └── profile.jsx
│   ├── _layout.jsx
│   └── index.jsx
├── assets
│   ├── fonts
│   │   ├── AtkinsonHyperlegible-Bold.ttf
│   │   └──  AtkinsonHyperlegible-Regular.ttf
│   ├── images
│   │   ├── members
│   │   │   ├── membro1.png
│   │   │   ├── membro2.jpeg
│   │   │   ├── membro3.png
│   │   │   └── membro4.png
│   │   ├── logoDark2Linka.png
│   │   ├── logoDarkIcon.png
│   │   ├── logoDarkLinka.png
│   │   ├── logoDarkMode.png
│   │   ├── logoDarkMode2.png
│   │   ├── logoLight.png
│   │   └── logoLightLinka.png
│   └── public
│       ├── favicon.png
│       ├── icon.png
│       └── splash-icon.png
├── components
│   ├── auth
│   │   ├── login
│   │   └── register
│   ├── home
│   │   ├── ProjectCard
│   │   │   └── index.jsx
│   │   └── navigation
│   │       └── index.jsx
│   └── ui
│       ├── base
│       │   ├── avatar
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── badge
│       │   │   ├── conf.ts
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── button
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── curved-bottom-tabs
│       │   │   ├── helper.ts
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── empty-state
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── otp-input
│       │   │   ├── const.ts
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── scrollable-search
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── tabs
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   └── title
│       │       ├── const.ts
│       │       ├── helpers.ts
│       │       ├── index.tsx
│       │       └── types.ts
│       ├── micro-interactions
│       │   ├── animated-theme-toggle
│       │   │   ├── const.ts
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── gooey-switch
│       │   │   ├── const.ts
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── hamburger
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   └── spin-button
│       │       ├── conf.ts
│       │       ├── index.tsx
│       │       └── types.ts
│       ├── molecules
│       │   ├── Shimmer
│       │   │   ├── Shimmer.tsx
│       │   │   ├── Shimmer.types.ts
│       │   │   └── const.ts
│       │   ├── Toast
│       │   │   ├── context
│       │   │   │   └── ToastContext.tsx
│       │   │   ├── hooks
│       │   │   │   └── useToast.ts
│       │   │   ├── Toast.tsx
│       │   │   ├── Toast.types.ts
│       │   │   ├── ToastViewPort.tsx
│       │   │   └── index.tsx
│       │   ├── accordion
│       │   │   ├── index.tsx
│       │   │   ├── presets.ts
│       │   │   └── types.ts
│       │   ├── animated-chip
│       │   │   ├── AnimatedChip.tsx
│       │   │   ├── Chip.tsx
│       │   │   └── Chip.types.ts
│       │   ├── circle-loader
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── disclosure-group
│       │   │   ├── conf.ts
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── orbiting-dots
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   └── search-bar
│       │       ├── SearchBar.tsx
│       │       └── SearchBar.types.ts
│       ├── organisms
│       │   ├── circular-progress
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── dialog
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   ├── dropdown
│       │   │   ├── const.ts
│       │   │   ├── index.tsx
│       │   │   └── types.ts
│       │   └── theme-switch
│       │       ├── conf.ts
│       │       ├── context.tsx
│       │       ├── helpers.ts
│       │       ├── hooks.ts
│       │       ├── theme.tsx
│       │       └── types.ts
│       └── templates
│           └── bottom-sheet
│               ├── conf.ts
│               ├── index.tsx
│               ├── types.ts
│               └── utils.ts
├── constants
│   └── layout.ts
├── .gitignore
├── LICENSE
├── README.md
├── RULES_COMMIT.md
├── app.json
├── babel.config.js
├── component.config.json
├── eas.json
├── eslint.config.js
├── global.css
├── metro.config.js
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## Como Rodar o Projeto Localmente

> 📋 Pré-requisitos

- Node.js instalado
- Git instalado
- Conta no Supabase

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/linka.git
cd linka
```

### Criar arquivo `.env` baseado no `.env.example`

### Rodando Projeto (React Native)

```bash
cd frontend
npx expo start
```

---

## Como Contribuir

> Contribuições são muito bem-vindas!

### Passo a passo

1. Faça um fork do projeto

2. Crie uma branch:

```bash
git checkout -b feature/minha-feature
```

3. Faça suas alterações

4. Commit:

```bash
git commit -m "feat: minha nova funcionalidade"
```

5. Push:

```bash
git push origin feature/minha-feature
```

6. Abra um Pull Request

---

## Boas práticas de Commit

Para que o seu pull request e suas alterações sejam aceitas, é necessário que siga as boas práticas de commit.

### Acesse Aqui: [Boas Práticas de Commit](./RULES_COMMIT.md)

---

## Equipe

### Desenvolvedores / Contribuidores

|  |  |
|--|--|
| <div align="center"><img src="https://github.com/tenmenezes.png" width="150px"/><br/><br/><a href="https://github.com/tenmenezes"><strong>Ten Menezes</strong></a></div> | <div align="center"><img src="https://github.com/mclarabastos.png" width="150px"/><br/><br/><a href="https://github.com/mclarabastos"><strong>Maria Clara</strong></a></div> |
| <div align="center"><img src="https://github.com/YasmimMantovani.png" width="150px"/><br/><br/><a href="https://github.com/YasmimMantovani"><strong>Yasmim</strong></a></div> | <div align="center"><img src="https://github.com/tutunery.png" width="150px"/><br/><br/><a href="https://github.com/tutunery"><strong>Arthur</strong></a></div> |

---

## Status do Projeto
> 🚧 Em desenvolvimento

## Visão futura

- Sistema de investimento em projetos
- Integração com banco
- Criação das APIs e das rotas
- Integração com universidades

> Não é só sobre código.
> > É sobre criar oportunidades reais.
# AeroCode

Sistema web (Single Page Application) de gestão da produção de aeronaves — do cadastro inicial à entrega final.

## Sobre

O AeroCode é uma aplicação de alta fidelidade desenvolvida com foco em Arquitetura **MVVM** (Model-View-ViewModel) para gerenciar o ciclo completo de produção de aeronaves. O sistema atende a empresas do setor aeroespacial no controle rigoroso de etapas construtivas, inventário de peças, validação de testes de qualidade, gestão de funcionários e geração de relatórios.

## Tecnologias

- **React 19**
- **React Router DOM**
- **Vite**

## Como rodar

```bash
# Clone o Projeto
git clone <url-do-repositorio>

# Acesse o diretório principal do projeto web
cd aerocode-gui

# Instale as dependências
npm install

# Rode o ambiente de desenvolvimento
npm run dev
```

## Estrutura de Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Tela Inicial: Autenticação (Login) |
| `/dashboard` | Painel Principal com atalhos para os módulos |
| `/aeronaves` | Listagem e cadastro global de aeronaves |
| `/aeronaves/:codigo` | Detalhes completos da Aeronave (Visão central) |
| `/aeronaves/:codigo/pecas` | Inventário Global e associação de peças |
| `/aeronaves/:codigo/etapas` | Controle do fluxo lógico de montagem |
| `/aeronaves/:codigo/testes` | Módulo de Qualidade e aprovação |
| `/equipe` | Atribuição de Funcionários e restrições de permissão |

## Níveis de Acesso

| Nível | Responsabilidade Principal |
| --- | --- |
| **ADMINISTRADOR** | Gestão de equipe, visão macro e relatórios finais. |
| **ENG. AERONÁUTICO** | Avaliação e resultados de testes técnicos (elétricos/hidráulicos). |
| **ENG. DE PRODUÇÃO** | Controle das etapas pendentes de fabricação e peças. |

## Acesso Rápido ao Protótipo

Como se trata de um protótipo MVVM simulado para apresentação, a tela de login possui uma validação de usuários *mockados* que simulam os três níveis de acesso exigidos.

**Usuários Disponíveis:**
- `admin` (Administrador)
- `eng_aero` (Engenheiro Aeronáutico)
- `eng_prod` (Engenheiro de Produção)

**Senha para todos:** `123`

## Entidades e Regras de Negócio (AV1 & AV2)

O projeto mapeia de forma rígida as entidades do Diagrama de Classes e as regras de negócio via *TypeScript Enums*:

### Aeronave
- **Identificador Único:** Código estruturado (ex: `AC-737-001`, `AC-F39-002`). Sem duplicidade.
- **Tipos Restritos:** `COMERCIAL` ou `MILITAR`.
- Atua como a raiz para o vínculo de Peças, Etapas e Testes.

### Peça
- **Origem Controlada:** `NACIONAL` ou `IMPORTADA`.
- **Fluxo de Status em Tempo Real:** `EM_PRODUCAO`, `EM_TRANSPORTE` ou `PRONTA`.

### Etapa
- **Trava de Progressão Linear:** Uma etapa de montagem **só pode ser iniciada se a etapa imediatamente anterior estiver com o status `CONCLUIDA`**. O sistema bloqueia fisicamente o avanço caso contrário.
- **Status Permitidos:** `PENDENTE`, `ANDAMENTO` ou `CONCLUIDA`.

### Teste
- **Tipologia:** `ELETRICO`, `HIDRAULICO` ou `AERODINAMICO`.
- **Auditoria de Qualidade:** `APROVADO` ou `REPROVADO`. Todos os testes exigem aprovação unânime para a geração e liberação do PDF do Relatório Final de Entrega.

### Funcionário
- Acesso autenticado associando o perfil às permissões exigidas no chão de fábrica.
- Prevenção de duplicidade na alocação de responsabilidades em uma mesma etapa.

# EventHub

Aplicação ServiceNow para planejar, divulgar e gerenciar eventos internos (treinamentos, talks, workshops) com inscrições controladas, aprovação pelo RH e check-ins no dia do evento. Inclui Workspace dedicado, KPIs de engajamento/efetividade, e governança por papéis e perfis de acesso.

## ✳️ Objetivos

- Centralizar o ciclo de vida de eventos internos (ideação → aprovação → divulgação → execução → avaliação).
- Controlar vagas e inscrições, com trilha de auditoria.
- Agilizar a operação do dia com check-in rápido e indicadores em tempo real.
- Fornecer relatórios e insights para Gestores.

## 🧭 Escopo e Arquitetura

- **Plataforma:** ServiceNow (Scoped App).
- **Nome da aplicação:** EventHub
- **Scope:** x_<company>_eventhub
- Artefatos e tecnologias utilizadas:
  - Flow Designer (fluxos de aprovação e notificações)
  - Workspace (UI Builder)
  - Tabelas Scoped (x_…)
  - ACLs + UI Policies/Client Scripts
  - Script Include
  - REST Message

## 👥 Papéis (Personas)

- **Organizador:** cria/edita eventos; acompanha inscrições e realiza check-ins.
- **Participante:** inscreve-se em eventos publicados; recebe confirmações/lembrentes.
- **RH/Aprovador:** avalia e aprova eventos antes da publicação.
- **Gestor:** acompanha KPIs, custos e efetividade; gerencia patrocinadores.

## 🔐 Roles (Funções de Acesso)

| Role	                          | Descrição          | Principais permissões                                                             |
| ------------------------------- | ------------------ | --------------------------------------------------------------------------------- |
| x_<company>_eventhub.agente     |	Agente/Organizador |	Criar/editar seus eventos; gerenciar inscrições do seu evento; realizar check-in |
| x_<company>_eventhub.aprovador  |	RH/Aprovador       |	Aprovar/reprovar eventos abertos; ver fila de aprovações                         |
| x_<company>_eventhub.gerente    |	Gestor             |	Visualizar relatórios/KPIs/custos, cadastrar patrocinador                        |

> As ACLs restringem RLS (Row-Level Security) para que agentes só manipulem eventos que organizam.

## 🗃️ Modelo de Dados (Tabelas)

1) **Evento (x_<company>_eventhub_evento)**: Armazena os dados do evento.
2) **Inscrição (x_<company>_eventhub_inscricao):** Solicitação de participante para um evento.
3) **Participante (x_<company>_eventhub_participante):** Dados de pessoa (interna ou externa).
4) **Patrocinador (x_<company>_eventhub_patrocinador):** Organização ou unidade financiadora.

## 🔄 Fluxos de Negócio

### Aprovação de Evento
1) Organizador cria evento → rascunho.
2) Solicita aprovação → aguardando_aprovacao.
3) RH/Aprovador avalia:
  - Aprova → aprovado → Publicação automática (status publicado) + notificações.
  - Reprova → retorna a rascunho com justificativa.
4) Pós-evento → encerrado (após data/hora fim) + coleta de feedback (opcional).

## 🧩 Workspace (UI Builder)

- **Visão Geral (Home):** KPIs gerais, próximos eventos, alertas (capacidade/pendências).
- **Meus Eventos (Agente):** lista filtrada do organizador; atalhos para editar/divulgar/encerrar.
- **Detalhe do Evento:** visão 360º (dados, inscrições, check-ins, feedback, custos).
- **Inscrições (Visão Global):** busca/gestão cross-eventos (RH/Operação).
- **Check-in Rápido (Operação do dia):** fluxo enxuto, responsivo.
- **Aprovações (RH/Aprovador):** fila, decisão em lote, políticas, trilha de auditoria.
- **Participantes:** cadastro, deduplicação e vinculação a sys_user.
- **Patrocinadores:** CRUD, associação a eventos, orçamento.
- **Relatórios & Insights:** dashboards de engajamento/efetividade/custos.
- **Admin & Configurações:** parâmetros de configuração.

## 🔔 Notificações & SLA (opcional)

- Aprovação pendente (notificar RH/Aprovador).
- Mudança de status (cancelamento, promoção da lista de espera).

## 🛡️ Segurança & Compliance

- ACLs de leitura/escrita por role + condições por proprietário (Organizador).

# 🛣️ Roadmap

- ✅ v1: CRUD completo + Aprovação + Workspace 1.0
- 🔭 v2: Criação da Solicitação de Incrição e Check-in.

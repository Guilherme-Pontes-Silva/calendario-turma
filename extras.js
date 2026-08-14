/* ===================================================================
   DADOS DO PAINEL — VERSÃO 2
   -------------------------------------------------------------------
   Mesma lógica do eventos.js: dados separados da apresentação.

   IMPORTANTE — leia antes de preencher qualquer coisa aqui:
   Critérios de aprovação, regras de fichamento e pesos de nota são
   informação que, se errada, custa nota real de gente real. Todo
   campo abaixo tem um estado "confirmado" ou "pendente". Nunca mude
   um item de "pendente" para "confirmado" sem ter a fonte oficial
   (plano de ensino, e-mail do professor, ou aviso em aula) — e anote
   a fonte no próprio campo, do mesmo jeito que o eventos.js já faz.
   =================================================================== */

const PAINEL = {

  /* A grade semanal de aulas não é duplicada aqui — a aba "Grade de
     aulas" lê direto de CALENDARIO.grade (em eventos.js), que é a
     fonte publicada. Só existe um lugar para editar o horário. */

  /* ---------------- 6. DIRETÓRIO DE CONTATOS ----------------
     E-mail institucional: nenhuma fonte oficial foi conferida ainda.
     Não preenchi nenhum — inventar um padrão de e-mail e errar é
     pior do que não ter o dado. Confirme no Portal do Aluno, no
     rodapé de um e-mail já recebido do professor, ou perguntando
     na secretaria, e preencha aqui. */
  professores: [
    { sigla:"TGD",         disciplina:"Teoria Geral do Direito",                       nome:"Prof. Dr. Luiz Eduardo de Almeida",        email:"", telefone:"" },
    { sigla:"Prát. Ext.",  disciplina:"Prática Extensionista — Conhecendo e Divulgando", nome:"Profa. Gisele Meirelles Fonseca",         email:"", telefone:"" },
    { sigla:"IDP",         disciplina:"Introdução ao Direito Privado, Pessoas e Bens",  nome:"Prof. Dr. Marco Antonio dos Anjos",        email:"", telefone:"" },
    { sigla:"Hist. Dir.",  disciplina:"História do Direito",                           nome:"Prof. Dr. Alexandre Aparecido de Lima",    email:"alexandre.lima@mackenzie.br", telefone:"" },
    { sigla:"Ética",       disciplina:"Ética e Cidadania",                             nome:"Prof. Ms. Ailton Gonçalves Dias Filho",    email:"rev.ailton@ipamericana.org.br", telefone:"(19) 99100-6433" },
    { sigla:"Econ. Pol.",  disciplina:"Economia Política",                             nome:"Prof. Dr. Luiz Carlos Lemos Junior",       email:"", telefone:"" },
    { sigla:"CTS",         disciplina:"Ciência, Tecnologia e Sociedade no Direito",     nome:"Prof. Ms. Renan Thiago Alencar Moreira",   email:"", telefone:"" },
    { sigla:"Ciên. Pol.",  disciplina:"Ciência Política",                              nome:"Prof. Ms. Renan Thiago Alencar Moreira",   email:"", telefone:"" },
    { sigla:"Antrop. Jur.",disciplina:"Antropologia Jurídica",                         nome:"Prof. Dr. Ricardo Ferreira Nunes",         email:"", telefone:"" }
  ],

  /* ---------------- 1. CRITÉRIOS DE APROVAÇÃO ----------------
     "confirmado": true  → todo o resumo veio de fonte oficial (plano
                           de aula, cronograma) e foi conferido.
     "confirmado": false → o que estiver em "resumo" é o que já foi
                           confirmado até agora (pode ser parcial);
                           "faltaConfirmar" lista o que ainda falta. */
  criterios: [
    {
      sigla:"TGD", disciplina:"Teoria Geral do Direito", confirmado:false,
      resumo:"A1 e A2 seguem a mesma composição: Prova dissertativa e individual (peso 7) + Seminário em grupo (peso 2) + Manuscritos (peso 1), cada item pontuado de 0 a 10. O seminário tem 4 temas possíveis — norma jurídica; Julgamento de Nuremberg; Direito natural e Direito positivo; tipos de norma jurídica —, dura de 10 a 15 minutos por grupo e pede apresentação oral mais o arquivo de slides no Moodle; a nota é do grupo, não individual, e os grupos não são fixos.",
      faltaConfirmar:"⚠ As fontes se contradizem sobre o manuscrito: o plano de aula dá peso 1 a ele, mas o professor disse em sala que “não é obrigatório e não será avaliado formalmente” (só pede uma opinião crítica, como exercício). Também falta a nota mínima para aprovação e a fórmula que fecha a média final do semestre.",
      fonte:"Plano de aula da disciplina, 2º semestre de 2026, e esclarecimentos do professor em sala, 12/08/2026."
    },
    {
      sigla:"Econ. Pol.", disciplina:"Economia Política", confirmado:false,
      resumo:"NI1 = NI1-A (60%) + NI1-B (40%). NI2 = NI2-A (30%) + NI2-B (peso ainda não divulgado pelo professor).",
      faltaConfirmar:"O peso da NI2-B, a nota mínima para aprovação e a fórmula da média final do semestre.",
      fonte:"Plano de aulas 2S 2026 1P Economia Política."
    },
    { sigla:"Prát. Ext.",  disciplina:"Prática Extensionista", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda. Sabemos as datas de entrega (ver calendário), não os pesos.", fonte:"" },
    { sigla:"Antrop. Jur.",disciplina:"Antropologia Jurídica", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda.", fonte:"" },
    { sigla:"IDP",         disciplina:"Introdução ao Direito Privado", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda.", fonte:"" },
    { sigla:"Hist. Dir.",  disciplina:"História do Direito", confirmado:false, resumo:"", faltaConfirmar:"O plano de ensino publicado na sala é do 1º semestre de 2026 — não vale para este semestre. Sabemos como funcionam as apresentações semanais (ver Fichamento e Trabalhos), mas a fórmula de aprovação em si não está confirmada.", fonte:"" },
    { sigla:"Ética",       disciplina:"Ética e Cidadania", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda.", fonte:"" },
    { sigla:"CTS",         disciplina:"Ciência, Tecnologia e Sociedade no Direito", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda.", fonte:"" },
    {
      sigla:"Ciên. Pol.", disciplina:"Ciência Política", confirmado:false,
      resumo:"Avaliação de 25/09 vale 40% da nota; uma prova de múltipla escolha vale os outros 60%. Atenção à estrutura N1/N2: trabalhos e atividades feitos antes, mesmo concluídos ainda dentro do período de N1, só entram no cômputo da nota em N2.",
      faltaConfirmar:"A data da prova de múltipla escolha (60%) e a nota mínima para aprovação.",
      fonte:"Anotado em aula pelo representante da turma, 12/08/2026."
    }
  ],

  /* ---------------- 7. GUIA DE FICHAMENTO E TRABALHOS ----------------
     Nenhuma exigência específica de professor foi confirmada ainda
     (formatação, número de páginas, norma, estrutura). Preencher só
     depois de ler o enunciado oficial ou confirmar com o professor —
     nunca por "o que geralmente se pede". */
  fichamento: [
    { sigla:"TGD", exigencias:"Não é um fichamento tradicional — é um manuscrito, feito à mão pelo próprio aluno. Formato livre: pode ser em folha sulfite, folha de fichamento, caderno almaço, entre outros suportes, organizado em tópicos, texto corrido, mapa mental ou qualquer formato que o aluno já use para estudar. O objetivo é fazer o aluno ler o material e produzir suas próprias anotações. Não é obrigatório nem avaliado formalmente (mas ver o aviso em Critérios de Aprovação — essa informação contradiz o peso 1 do plano de aula). O professor pede que o aluno inclua uma opinião crítica sobre a obra, como exercício. Esclarecido pelo professor em sala, 12/08/2026." },
    { sigla:"Prát. Ext.",   exigencias:"" },
    { sigla:"IDP",          exigencias:"" },
    { sigla:"Hist. Dir.",   exigencias:"As apresentações em grupo (10 a 15 minutos) acontecem toda semana, um grupo por vez, sempre sobre o tema do dia — há um cronograma de temas, cada um com texto e bibliografia próprios. O professor avalia com uma ficha própria, olhando: respeito ao tema, qualidade dos slides, se os principais pontos foram abordados e se o assunto foi bem tratado. Grupos de 2 a 3 pessoas, podendo ser maiores; recomenda-se manter os mesmos grupos das apresentações, mas é permitido trocar. Também há atividades em grupo feitas em sala (texto em grupo de 2 a 3 pessoas, com orientação do professor durante a aula e entrega no final da própria aula)." },
    { sigla:"Ética",        exigencias:"" },
    { sigla:"Econ. Pol.",   exigencias:"" },
    { sigla:"CTS",          exigencias:"" },
    { sigla:"Ciên. Pol.",   exigencias:"Fichamento manuscrito — formato e elaboração livres, o que importa é o conteúdo. Registro de leitura em ficha, frente e verso, conforme modelo do professor: fichas de cerca de 10 cm, uma para cada texto (são 7 textos ao todo). Entrega presencial, ficha por ficha. Pode ser colorida e no tamanho que o aluno preferir, mas precisa ser manuscrita, com caneta azul ou preta." },
    { sigla:"Antrop. Jur.", exigencias:"" }
  ],

  /* ---------------- CALCULADORA — componentes de A1 e A2 ----------------
     Isto NÃO inclui a fórmula que combina A1+A2 em média final, nem a
     nota de corte, nem a fórmula do exame — nada disso está confirmado
     em lugar nenhum (ver "criterios" acima). Isto aqui é só o que já
     apuramos sobre COMO cada etapa (A1 ou A2) se compõe internamente.
     pesosConfirmados é por etapa, não por matéria — em Economia
     Política, por exemplo, a etapa A1 (NI1) está confirmada e a A2
     (NI2) só em parte. */
  calculadora: [
    { sigla:"TGD",
      a1:{ nome:"A1", componentes:[
        { nome:"Prova A1",    peso:70 }, { nome:"Seminário", peso:20 }, { nome:"Manuscritos", peso:10 }
      ], pesosConfirmados:true },
      a2:{ nome:"A2", componentes:[
        { nome:"Prova A2",    peso:70 }, { nome:"Seminário", peso:20 }, { nome:"Manuscritos", peso:10 }
      ], pesosConfirmados:true }
    },
    { sigla:"Econ. Pol.",
      a1:{ nome:"NI1", componentes:[
        { nome:"NI1-A", peso:60 }, { nome:"NI1-B", peso:40 }
      ], pesosConfirmados:true },
      a2:{ nome:"NI2", componentes:[
        { nome:"NI2-A", peso:30 }, { nome:"NI2-B (peso ainda não confirmado — usando 70 só pra simular)", peso:70 }
      ], pesosConfirmados:false }
    },
    { sigla:"Prát. Ext.",    a1:null, a2:null },
    { sigla:"Antrop. Jur.",  a1:null, a2:null },
    { sigla:"IDP",           a1:null, a2:null },
    { sigla:"Hist. Dir.",    a1:null, a2:null },
    { sigla:"Ética",         a1:null, a2:null },
    { sigla:"CTS",           a1:null, a2:null },
    { sigla:"Ciên. Pol.",    a1:null, a2:null }
  ],

  /* ---------------- 8. GRUPOS DE TRABALHO ----------------
     Estrutura por período (N1 / N2), porque o aluno agora escolhe
     a etapa antes de ver o grupo. Confirmado pelo Guilherme em
     14/08/2026: as 7 duplas de Economia Política são de N1. */
  grupos: {
    "Econ. Pol.": {
      n1: [
        { grupo:"Dupla 1", integrantes:"Andressa de Souza Grana e Thiago Richard de Souza Pereira", tema:"Aporofobia, a Aversão ao Pobre: Um Desafio para a Democracia", autor:"Adela Cortina" },
        { grupo:"Dupla 2", integrantes:"Emilly Pereira da Silva e Ryan de Sá Santos", tema:"Capitalismo e Pulsão de Morte", autor:"Gilles Dostaler e Bernard Maris" },
        { grupo:"Dupla 3", integrantes:"Gabriele de Carvalho Fontenele e Pedro de Oliveira Mafra", tema:"O Código do Capital: Como o Direito Cria Riqueza e Desigualdade", autor:"Katharina Pistor" },
        { grupo:"Dupla 4", integrantes:"Giulia Grintaci Bertolini e Pamela Cristina Barreto Reis Rosa", tema:"Fascismo e Liberalismo: Afinidades Seletivas", autor:"Alvaro Bianchi" },
        { grupo:"Dupla 5", integrantes:"Guilherme Pontes da Silva e Luiza Santos Gonçalves", tema:"Parcelado: Dinâmicas de Consumo na Periferia", autor:"Kauê Lopes dos Santos" },
        { grupo:"Dupla 6", integrantes:"Heloísa Farias Barbieri e Luiza Corbetta de Souza", tema:"Os Bilionários Não Pagam Imposto de Renda e Nós Vamos Acabar Com Isso", autor:"Gabriel Zucman" },
        { grupo:"Dupla 7", integrantes:"Louise dos Reis de Sousa e Luís Henrique Oliveira Penteado Vargas", tema:"Tecno Feudalismo: O que Matou o Capitalismo", autor:"Yanis Varoufakis" }
      ],
      n2: []
    },
    "TGD":          { n1:[], n2:[] },
    "Prát. Ext.":   { n1:[], n2:[] },
    "Antrop. Jur.": { n1:[], n2:[] },
    "IDP":          { n1:[], n2:[] },
    "Hist. Dir.":   { n1:[], n2:[] },
    "Ética":        { n1:[], n2:[] },
    "CTS":          { n1:[], n2:[] },
    "Ciên. Pol.":   { n1:[], n2:[] }
  },

  /* ---------------- 5. CONTADOR DE FÉRIAS ----------------
     19/12/2026 é a data de fim do período letivo, a mesma que está
     no cabeçalho da grade de aulas (fonte: Quadro de Horário do
     Portal do Aluno). Não é necessariamente o último dia de prova —
     o período de provas finais vai até 09/12, este é o fim do
     semestre letivo em si. */
  ferias: {
    data: "2026-12-19",
    rotulo: "Fim do período letivo",
    fonte: "Quadro de Horário do Portal do Aluno."
  },

  /* ---------------- 4. FEEDBACK ----------------
     Sem link ainda. Este painel não cria o formulário sozinho —
     crie um Google Forms anônimo (Configurações → não coletar
     e-mail) e cole o link aqui. */
  feedback: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdBs0uJc8jI5jXxWIH57xClaYiJjb1R7n69OEeXXI3dHCH6vw/viewform?usp=header"
  }
};

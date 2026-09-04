/* ===================================================================
   DADOS DO CALENDÁRIO DA TURMA
   -------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser trocado quando o calendário
   mudar. O index.html não precisa ser tocado.

   Campos de cada evento:
     data       "AAAA-MM-DD"  (obrigatório)
     hora       "HH:MM" ou null  — null = dia todo, sem hora marcada
     dataFim    (opcional) "AAAA-MM-DD" — para o que atravessa vários
                dias, como a Semana Jurídica. Vira um compromisso só,
                e não um registro por dia.
     horaFim    (opcional) "HH:MM" — término no último dia
     disciplina "TGD" | "Econ. Pol." | "Prát. Ext." | "Antrop. Jur." |
                "Ciên. Pol." | "Hist. Dir." | "CTS" | "Geral"
     tipo       PROVA | AVALIACAO | ENTREGA | TAREFA | MANUSCRITO |
                APRESENTACAO | COMPETICAO | EVENTO | AULA | FERIADO
     titulo     título curto
     descricao  o que é o compromisso
     oQueFazer  (opcional) a ação prática: onde entrega, o que levar
     fonte      (opcional) de onde veio a data, quando não é do Moodle
     confirmar  (opcional) true = data ainda não fixada pelo professor
   =================================================================== */

const CALENDARIO = {
  turma: "Direito · 1º período noturno · Campus Campinas",
  semestre: "2º semestre de 2026",
  atualizadoEm: "2026-09-04T13:35:00-03:00",
  fonte: "calendário do Moodle, salas das disciplinas, enunciados das tarefas, planos de ensino e cronogramas dos professores, o mural do Portal do Aluno, e anotações de aula do representante da turma",
  fusoHorario: "-03:00",

  /* Grade fixa de aulas da semana, do Quadro de Horário do Portal do Aluno.
     Muda pouco; quando mudar, é só editar aqui. */
  grade: {
    periodo: "10 de agosto a 19 de dezembro de 2026",
    sala: "2º Andar — Sala 201",
    dias: [
      { n:1, nome:"Segunda", aulas:[
        { h:"18h30 – 19h20", sigla:"Prát. Ext.",   nome:"Prática Extensionista" },
        { h:"19h20 – 21h00", sigla:"Antrop. Jur.", nome:"Antropologia Jurídica" },
        { h:"21h10 – 22h50", sigla:"TGD",          nome:"Teoria Geral do Direito" }
      ]},
      { n:2, nome:"Terça", aulas:[
        { h:"21h10 – 22h50", sigla:"Ética",        nome:"Ética e Cidadania" }
      ]},
      { n:3, nome:"Quarta", aulas:[
        { h:"18h30 – 20h10", sigla:"Econ. Pol.",   nome:"Economia Política" },
        { h:"20h10 – 21h00", sigla:"Prát. Ext.",   nome:"Prática Extensionista" },
        { h:"21h10 – 22h50", sigla:"IDP",          nome:"Introdução ao Direito Privado" }
      ]},
      { n:4, nome:"Quinta", aulas:[
        { h:"18h30 – 20h10", sigla:"TGD",          nome:"Teoria Geral do Direito" },
        { h:"20h10 – 21h00", sigla:"Ciên. Pol.",   nome:"Ciência Política" },
        { h:"21h10 – 22h50", sigla:"Hist. Dir.",   nome:"História do Direito" }
      ]},
      { n:5, nome:"Sexta", aulas:[
        { h:"18h30 – 20h10", sigla:"CTS",          nome:"Ciência, Tecnologia e Sociedade" },
        { h:"20h10 – 21h00", sigla:"Ciên. Pol.",   nome:"Ciência Política" },
        { h:"21h10 – 22h50", sigla:"IDP",          nome:"Introdução ao Direito Privado" }
      ]}
    ]
  },

  eventos: [
    /* ---------------- AGOSTO DE 2026 ---------------- */
    {
      data: "2026-08-12", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Dia do Evangélico (feriado municipal de Campinas)",
      descricao: "Feriado municipal de Campinas. Não há aula neste dia.",
      oQueFazer: "Nada a fazer. Só lembre que a tarefa de Economia Política vence hoje mesmo assim, porque o prazo é no Moodle e não depende de ter aula."
    },
    {
      data: "2026-08-12", hora: "23:59", disciplina: "Econ. Pol.", tipo: "TAREFA",
      titulo: "Conceituar as Ideologias",
      descricao: "Tarefa da sala de Economia Política no Moodle, com prazo até 23h59.",
      oQueFazer: "Enviar pelo Moodle até 23h59. Passou do horário, o envio fecha sozinho."
    },
    {
      data: "2026-08-17", hora: "18:30", disciplina: "Prát. Ext.", tipo: "AULA",
      titulo: "Encontro na sala e ida para o Ateliê (2º subsolo)",
      descricao: "A aula não começa no lugar de sempre. A turma se encontra na sala de aula habitual às 18h30 e a professora Gisele Meirelles Fonseca leva todo mundo até a sala Ateliê, no 2º subsolo. Pelo cronograma da disciplina, o tema da aula é “O que é ser um universitário”.",
      oQueFazer: "Estar na sala de sempre às 18h30. Quem chegar depois não vai encontrar a turma lá — vá direto ao Ateliê, no 2º subsolo.",
      fonte: "Aviso dado pela professora em aula no dia 11/08/2026. Não consta no Moodle nem no Portal do Aluno."
    },
    {
      data: "2026-08-20", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli, Introdução ao Direito — Lição IV",
      descricao: "Resumo manuscrito da Lição IV (“Leis físicas, culturais e éticas”) de BETIOLI, Antonio Bento. Introdução ao Direito. 16ª ed. São Paulo: Saraiva, 2023.",
      oQueFazer: "Ler a Lição IV, escrever o resumo à mão e enviar a digitalização pelo Moodle até 23h59. A tarefa já está aberta na sala de TGD — a seção de entrega dos manuscritos, que estava vazia até 12/08, agora tem as treze tarefas do semestre publicadas.",
      fonte: "Tarefa 1022913 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-08-21", hora: null, disciplina: "Ciên. Pol.", tipo: "ENTREGA", confirmar: true,
      titulo: "Fichamento 1 — Bonavides, capítulo 3",
      descricao: "Fichamento do capítulo 3 de Paulo Bonavides, “A Sociedade e o Estado”, texto trabalhado na aula de 14/08. Manuscrito, escrito à mão, no suporte que o aluno preferir. O professor publicou o PDF do capítulo na sala do Moodle em 17/08/2026, com o título “Ciência Política - Paulo Bonavides - Cap. 3 - 63-79” — são as páginas 63 a 79.",
      oQueFazer: "Baixe o PDF na sala de Ciência Política no Moodle: o texto agora está publicado, não é mais só a citação dos slides. A entrega é presencial, em mãos, ao professor — não há envio pelo Moodle. A data continua sendo dedução da regra “entrega na semana seguinte”, e não anúncio do professor: confirme com ele na aula de 21/08 se é esse o dia.",
      fonte: "Texto e arquivo: PDF “Ciência Política - Paulo Bonavides - Cap. 3 - 63-79”, publicado na sala do Moodle em 17/08/2026. Data de entrega: regra da semana seguinte, do arquivo “Aula 1 — Plano de Aulas, Avaliações e Conceitos Fundamentais.pdf”."
    },
    {
      data: "2026-08-24", hora: "18:30",
      dataFim: "2026-08-26", horaFim: "22:50",
      disciplina: "Geral", tipo: "EVENTO",
      titulo: "Semana Jurídica",
      descricao: "Semana Jurídica da universidade, de 24 a 26 de agosto. É um compromisso só, do começo do primeiro dia ao fim do último, e não um registro por dia. Durante todo o período não há aulas.",
      oQueFazer: "Comparecer às palestras: a participação conta como presença. Acompanhe a programação divulgada pela universidade para saber o que assistir em cada dia.",
      fonte: "Informado pelo representante da turma em 20/08/2026, fixando as datas que os cronogramas das disciplinas divergiam."
    },
    {
      data: "2026-08-27", hora: "18:30",
      dataFim: "2026-08-28", horaFim: "22:50",
      disciplina: "Geral", tipo: "EVENTO",
      titulo: "Encontro Internacional de Direitos Humanos",
      descricao: "Encontro Internacional de Direitos Humanos, nos dias 27 e 28 de agosto. Também é um compromisso único, do começo do primeiro dia ao fim do segundo. Durante o período não há aulas.",
      oQueFazer: "Comparecer às palestras: a participação conta como presença.",
      fonte: "Informado pelo representante da turma em 20/08/2026, fixando as datas que os cronogramas das disciplinas divergiam."
    },
    {
      data: "2026-08-24", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição V",
      descricao: "Resumo manuscrito da Lição V (“notas distintivas do direito”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia da Semana Jurídica, que substitui a aula normal — mas o prazo é no Moodle e não depende de ter aula.",
      fonte: "Tarefa 1022916 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-08-24", hora: "18:30", disciplina: "Prát. Ext.", tipo: "AULA",
      titulo: "Orientação sobre a organização da Semana Jurídica",
      descricao: "Encontro da turma com a professora Gisele Meirelles Fonseca, no horário da Prática Extensionista, para orientar sobre a organização da Semana Jurídica.",
      oQueFazer: "Estar na sala às 18h30, no horário normal da disciplina. Vale anotar as tarefas que a professora distribuir: é a partir desta orientação que a turma se organiza para a Semana Jurídica. Atenção: o cronograma da disciplina marca a própria Semana Jurídica neste mesmo dia e diz que não há aula comum. O aviso da professora é mais recente e é o que vale, mas se houver dúvida, confirme com ela.",
      fonte: "Anotado pelo representante da turma, 18/08/2026. Não consta no Moodle nem no Portal do Aluno."
    },
    {
      data: "2026-08-27", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Montoro, Introdução à Ciência do Direito — cap. 1",
      descricao: "Resumo manuscrito do capítulo 1 (“Conceito de direito”) de MONTORO, André Franco. Introdução à ciência do direito.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia do Encontro Internacional de Direitos Humanos, que substitui a aula.",
      fonte: "Tarefa 1022917 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-08-31", hora: null, disciplina: "TGD", tipo: "APRESENTACAO",
      titulo: "Seminário 1 — Norma Jurídica (Norberto Bobbio)",
      descricao: "Primeiro dos quatro seminários de Teoria Geral do Direito, que compõem o peso 2 da nota A1. Apresentação oral em sala, de 10 a 15 minutos por grupo. Apresentam Andressa S., David B., Pamela C. e Thiago R.",
      oQueFazer: "O arquivo da apresentação precisa estar no Moodle antes de subir para apresentar — o enunciado pede no mínimo 1 dia de antecedência. Basta 1 integrante postar pelo grupo inteiro.",
      fonte: "Cronograma dos seminários exibido pelo professor em sala, 12/08/2026."
    },
    {
      data: "2026-08-31", hora: "23:59", disciplina: "TGD", tipo: "ENTREGA",
      titulo: "Arquivo do Seminário 1 (Norma Jurídica)",
      descricao: "Envio, pelo Moodle, do arquivo de slides usado no Seminário 1. É o segundo item obrigatório do seminário: sem o arquivo, a apresentação não fecha a nota.",
      oQueFazer: "PDF, com o nome completo de todos os integrantes e o título do tema. Basta 1 integrante postar pelo grupo. O prazo geral da tarefa no Moodle é 10/09, mas quem apresenta hoje precisa postar até hoje.",
      fonte: "Enunciado da tarefa no Moodle e cronograma dos seminários exibido em sala, 12/08/2026."
    },
    {
      data: "2026-08-31", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XI",
      descricao: "Resumo manuscrito da Lição XI (“a norma jurídica”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Ler a Lição XI, escrever à mão e enviar a digitalização pelo Moodle.",
      fonte: "Tarefa 1022920 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },

    /* ---------------- SETEMBRO DE 2026 ---------------- */
    {
      data: "2026-09-01", hora: "17:00",
      dataFim: "2026-09-01", horaFim: "18:30",
      disciplina: "Geral", tipo: "EVENTO", confirmar: true,
      titulo: "Conversation club — início da temporada",
      descricao: "Encontros gratuitos de prática de inglês, organizados pelo escritório de internacionalização. Acontecem toda terça-feira, das 17h às 18h30, a partir de 1º de setembro. Esta entrada marca o primeiro encontro da temporada; os seguintes se repetem semanalmente e não estão lançados um a um.",
      oQueFazer: "É de participação livre e não vale nota. Cai antes do horário das aulas da noite, então dá para emendar. Atenção à data: o slide diz “1º de setembro” sem o ano, e o ano de 2026 foi deduzido do título do arquivo — confirme com o escritório de internacionalização antes de contar com ela.",
      fonte: "Arquivo “Informações sobre internacionalização” (módulo 1021545), publicado na sala de Prática Extensionista. O conteúdo é oficial; o ano veio do título do arquivo, “2026.2”, e não do slide."
    },
    {
      data: "2026-09-03", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen, Teoria Pura do Direito — cap. 1",
      descricao: "Resumo manuscrito do capítulo 1 (“Direito e natureza”) de KELSEN, Hans. Teoria pura do direito — versão condensada pelo autor.",
      oQueFazer: "Atenção à edição: o cronograma pede a versão condensada pelo autor, não a completa. Escrever à mão e enviar a digitalização pelo Moodle. É o primeiro de uma sequência de manuscritos sobre o Kelsen.",
      fonte: "Tarefa 1022921 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-09-03", hora: null, disciplina: "TGD", tipo: "APRESENTACAO",
      titulo: "Seminário 2 — Julgamento de Nuremberg",
      descricao: "Segundo seminário de Teoria Geral do Direito. Cai no mesmo dia do Seminário 3: são dois grupos apresentando na mesma aula. Apresentam Emilly P., Guilherme P. e Ryan S.",
      oQueFazer: "Arquivo no Moodle antes de apresentar (no mínimo 1 dia de antecedência, pelo enunciado). Apresentação de 10 a 15 minutos.",
      fonte: "Cronograma dos seminários exibido pelo professor em sala, 12/08/2026."
    },
    {
      data: "2026-09-03", hora: "23:59", disciplina: "TGD", tipo: "ENTREGA",
      titulo: "Arquivo do Seminário 2 (Julgamento de Nuremberg)",
      descricao: "Envio, pelo Moodle, do arquivo de slides do Seminário 2.",
      oQueFazer: "PDF, com nome completo de todos os integrantes e o título do tema. Basta 1 integrante postar pelo grupo.",
      fonte: "Enunciado da tarefa no Moodle e cronograma dos seminários exibido em sala, 12/08/2026."
    },
    {
      data: "2026-09-03", hora: null, disciplina: "TGD", tipo: "APRESENTACAO",
      titulo: "Seminário 3 — Direito Natural e Direito Positivo",
      descricao: "Terceiro seminário de Teoria Geral do Direito, na mesma aula do Seminário 2. Apresentam Gabriele C., Heloísa F., Luís H. e Luiza S.",
      oQueFazer: "Arquivo no Moodle antes de apresentar. Apresentação de 10 a 15 minutos.",
      fonte: "Cronograma dos seminários exibido pelo professor em sala, 12/08/2026."
    },
    {
      data: "2026-09-03", hora: "23:59", disciplina: "TGD", tipo: "ENTREGA",
      titulo: "Arquivo do Seminário 3 (Direito Natural e Direito Positivo)",
      descricao: "Envio, pelo Moodle, do arquivo de slides do Seminário 3.",
      oQueFazer: "PDF, com nome completo de todos os integrantes e o título do tema. Basta 1 integrante postar pelo grupo.",
      fonte: "Enunciado da tarefa no Moodle e cronograma dos seminários exibido em sala, 12/08/2026."
    },
    {
      data: "2026-09-03", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO",
      titulo: "Apresentação 1 — Direito na Grécia",
      descricao: "Primeira apresentação em grupo de História do Direito, de 10 a 15 minutos. Apresentam David B., Emilly P. e Pamela C. Material: “Direito na Grécia Antiga” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 31-42.",
      oQueFazer: "O fichamento deste mesmo texto é entregue na aula da apresentação. Apresentação de 10 a 15 minutos, avaliada pela ficha do Moodle. A apresentação do grupo vale 20% da N2.",
      fonte: "Cronograma publicado pelo professor na sala do Moodle em 20/08/2026."
    },
    {
      data: "2026-09-10", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO",
      titulo: "Apresentação 2 — Direito em Roma",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Apresentam Guilherme P. e Melissa S. Material: “Direito em Roma” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 44-55.",
      oQueFazer: "O fichamento deste mesmo texto é entregue na aula da apresentação. Apresentação de 10 a 15 minutos, avaliada pela ficha do Moodle. A apresentação do grupo vale 20% da N2.",
      fonte: "Cronograma publicado pelo professor na sala do Moodle em 20/08/2026."
    },
    {
      data: "2026-09-17", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO",
      titulo: "Apresentação 3 — Direito na Idade Média",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Apresentam Luís H. e Luiza S. Material: “O Direito na Idade Média” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 57-76.",
      oQueFazer: "O fichamento deste mesmo texto é entregue na aula da apresentação. Apresentação de 10 a 15 minutos, avaliada pela ficha do Moodle. A apresentação do grupo vale 20% da N2.",
      fonte: "Cronograma publicado pelo professor na sala do Moodle em 20/08/2026."
    },
    {
      data: "2026-09-04", hora: null, disciplina: "Ciên. Pol.", tipo: "AULA",
      titulo: "Aula em que o texto do fichamento 2 é passado",
      descricao: "Aula 5 do cronograma, sobre a segunda parte da evolução do pensamento político moderno. É dela que sai o texto do segundo fichamento.",
      oQueFazer: "Anote qual é o texto passado nesta aula: é ele que você vai fichar para a entrega seguinte.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 5 do cronograma."
    },
    {
      data: "2026-09-07", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Independência do Brasil",
      descricao: "Feriado nacional. Não há aula."
    },
    {
      data: "2026-09-09", hora: null, disciplina: "Prát. Ext.", tipo: "ENTREGA",
      titulo: "Atividade 1 — Planejamento",
      descricao: "Primeira atividade avaliada da Prática Extensionista, sobre planejamento. É o trabalho individual que compõe a nota N1.",
      oQueFazer: "Enviar pelo Moodle. A data da nossa turma, a 1P, é 09/09 — no plano de aula aparece também 10/09, mas essa é da turma 1F."
    },
    {
      data: "2026-09-09", hora: "23:59", disciplina: "Econ. Pol.", tipo: "TAREFA",
      titulo: "Fichamento — Revista Piauí",
      descricao: "Leitura e fichamento de dois artigos da Revista Piauí sobre políticas públicas: “Luz, câmera, internação” e “Como o Bope virou o Bope”. Os dois links estão no enunciado da tarefa no Moodle.",
      oQueFazer: "Entrega pelo Moodle até 23h59. A tarefa abriu em 02/09.",
      fonte: "Tarefa publicada pelo professor na sala de Economia Política no Moodle, aberta em 02/09/2026."
    },
    {
      data: "2026-09-10", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen — caps. 2 e 3",
      descricao: "Resumo manuscrito de dois capítulos do Kelsen (versão condensada): capítulo 2 (“Direito e moral”) e capítulo 3 (“o conceito de direito e a proposição jurídica”).",
      oQueFazer: "São dois capítulos, não um. Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia do prazo do arquivo do seminário — são duas entregas diferentes, não confunda.",
      fonte: "Tarefa 1022923 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-09-10", hora: null, disciplina: "TGD", tipo: "APRESENTACAO",
      titulo: "Seminário 4 — Tipos de Normas Jurídicas",
      descricao: "Último dos quatro seminários de Teoria Geral do Direito. Tema: norma legal, norma jurisdicional, norma negocial e norma costumeira. Apresentam Louise R., Luiza C. e Pedro O.",
      oQueFazer: "Arquivo no Moodle antes de apresentar. Apresentação de 10 a 15 minutos. Este é o dia mais carregado do semestre em TGD: caem também o manuscrito do Kelsen e o prazo final da tarefa dos seminários.",
      fonte: "Cronograma dos seminários exibido pelo professor em sala, 12/08/2026."
    },
    {
      data: "2026-09-10", hora: "23:59", disciplina: "TGD", tipo: "ENTREGA",
      titulo: "Arquivo do Seminário 4 (Tipos de Normas Jurídicas)",
      descricao: "Envio, pelo Moodle, do arquivo de slides do Seminário 4.",
      oQueFazer: "PDF, com nome completo de todos os integrantes e o título do tema. Basta 1 integrante postar pelo grupo.",
      fonte: "Enunciado da tarefa no Moodle e cronograma dos seminários exibido em sala, 12/08/2026."
    },
    {
      data: "2026-09-10", hora: "23:59", disciplina: "TGD", tipo: "TAREFA",
      titulo: "A1 — Prazo final da tarefa dos seminários no Moodle",
      descricao: "A tarefa “Entrega do arquivo e apresentação do seminário” abriu na segunda-feira, 03/08/2026, às 00h00, e fecha hoje às 23h59. É a mesma tarefa para os quatro grupos: quem apresentou em 31/08 ou 03/09 já deveria ter postado na sua data.",
      oQueFazer: "Regras do enunciado: arquivo em PDF; nome completo de todos os integrantes do grupo; postado no mínimo 1 dia antes da apresentação em sala; basta 1 integrante postar pelo grupo inteiro. Passou das 23h59, o envio fecha sozinho."
    },
    {
      data: "2026-09-11", hora: null, disciplina: "Ciên. Pol.", tipo: "ENTREGA", confirmar: true,
      titulo: "Fichamento 2",
      descricao: "Fichamento do texto passado na aula de 04/09, sobre a segunda parte da evolução do pensamento político moderno. Manuscrito, em ficha própria.",
      oQueFazer: "A data vem da regra de entrega na semana seguinte, não de anúncio do professor. Confirme com ele.",
      fonte: "Cronograma do plano de ensino, aula 5, mais a regra de entrega na semana seguinte."
    },
    {
      data: "2026-09-11", hora: null, disciplina: "CTS", tipo: "APRESENTACAO",
      titulo: "Seminários em grupo (peso 3 da NI1)",
      descricao: "Apresentação dos seminários em grupo de Ciência, Tecnologia e Sociedade no Direito. Valem peso 3 da primeira nota intermediária; os outros 7 vêm da prova escrita de 18/09.",
      oQueFazer: "Organize o grupo com antecedência — o seminário vale 3 dos 10 pontos da NI1, e a apresentação é uma semana antes da prova. O tema e a composição dos grupos ainda não estão registrados neste calendário: assim que forem definidos, entram na aba Grupos de Trabalho.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 6 do cronograma, e critérios de avaliação do mesmo arquivo."
    },
    {
      data: "2026-09-14", hora: null, disciplina: "TGD", tipo: "PROVA",
      titulo: "Prova A1 (N1)",
      descricao: "Prova dissertativa de Teoria Geral do Direito. Pelo plano de aula, a nota A1 se compõe de três instrumentos: a prova, com peso 7; o seminário, com peso 2; e os manuscritos, com peso 1. Cada um é pontuado de 0 a 10.",
      oQueFazer: "É de longe o que mais pesa na nota. Estudar o conteúdo dos manuscritos entregues até aqui: Betioli (Lições IV, V e XI), Montoro (cap. 1) e Kelsen (caps. 1 a 3)."
    },
    {
      data: "2026-09-16", hora: null, disciplina: "Prát. Ext.", tipo: "ENTREGA",
      titulo: "Atividade 2 — Pesquisa e extensão",
      descricao: "Segunda atividade avaliada da Prática Extensionista, sobre pesquisa e extensão.",
      oQueFazer: "Enviar pelo Moodle."
    },
    {
      data: "2026-09-16", hora: "23:59", disciplina: "Econ. Pol.", tipo: "TAREFA",
      titulo: "Fichamento — As políticas keynesianas na atualidade",
      descricao: "Fichamento do texto “O fim do laissez-faire”, de John Maynard Keynes, publicado no site A Terra é Redonda. O link está no enunciado da tarefa no Moodle.",
      oQueFazer: "Entrega pelo Moodle até 23h59. A tarefa abre em 09/09.",
      fonte: "Tarefa publicada pelo professor na sala de Economia Política no Moodle."
    },
    {
      data: "2026-09-18", hora: null, disciplina: "Ciên. Pol.", tipo: "PROVA",
      titulo: "Prova escrita NI1",
      descricao: "Prova escrita e individual de Ciência Política, peso 7 da primeira nota intermediária. É permitida consulta a uma folha manuscrita.",
      oQueFazer: "Prepare a folha de consulta manuscrita com antecedência — ela é permitida e faz diferença.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 7 do cronograma."
    },
    {
      data: "2026-09-18", hora: null, disciplina: "Ciên. Pol.", tipo: "ENTREGA", confirmar: true,
      titulo: "Fichamento 3",
      descricao: "Fichamento do texto da aula de 11/09, sobre a primeira parte da evolução do Estado moderno. Manuscrito, em ficha própria.",
      oQueFazer: "Cai no mesmo dia da prova NI1. A data vem da regra de entrega na semana seguinte, não de anúncio do professor — confirme com ele.",
      fonte: "Cronograma do plano de ensino, aula 6, mais a regra de entrega na semana seguinte."
    },
    {
      data: "2026-09-18", hora: null, disciplina: "CTS", tipo: "PROVA",
      titulo: "Prova escrita individual NI1 (peso 7)",
      descricao: "Prova escrita e individual de Ciência, Tecnologia e Sociedade no Direito, peso 7 da primeira nota intermediária. É permitida consulta a uma folha manuscrita.",
      oQueFazer: "Prepare a folha de consulta manuscrita com antecedência — ela é permitida e faz diferença. Cuidado com o acúmulo: neste mesmo dia caem a prova NI1 de Ciência Política e o fichamento 3, também do mesmo professor.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 7 do cronograma, e critérios de avaliação do mesmo arquivo."
    },
    {
      data: "2026-09-20", hora: "23:59", disciplina: "IDP", tipo: "ENTREGA",
      titulo: "Trabalho em grupo — N1",
      descricao: "Trabalho em grupo de Introdução ao Direito Privado, postado no Moodle. É um dos dois instrumentos da N1, junto com a prova de 23/09; os dois têm o mesmo peso dentro do bimestre.",
      oQueFazer: "Postar no Moodle até 23h59. Cai num domingo, e o prazo do Moodle fecha sozinho — não deixe para o fim de semana. A prova da mesma nota é três dias depois, em 23/09.",
      fonte: "Quadro de avaliações da disciplina, informado pelo representante da turma em 18/08/2026."
    },
    {
      data: "2026-09-21", hora: null, disciplina: "Antrop. Jur.", tipo: "AVALIACAO",
      titulo: "1ª avaliação",
      descricao: "Avaliação de Antropologia Jurídica em duas partes: prova individual sem consulta e trabalho sobre “Raízes do Brasil”.",
      oQueFazer: "São duas coisas no mesmo dia. Estudar para a prova sem consulta e ter o trabalho de “Raízes do Brasil” pronto."
    },
    {
      data: "2026-09-21", hora: null, disciplina: "TGD", tipo: "AULA",
      titulo: "Correção e vista da prova A1",
      descricao: "Aula em que o professor corrige a prova A1 e a turma tem vista da prova.",
      oQueFazer: "É a chance de conferir a correção e pedir revisão de questão. Quem falta perde a vista."
    },
    {
      data: "2026-09-22", hora: "23:59", disciplina: "Econ. Pol.", tipo: "TAREFA",
      titulo: "Fichamento — Descrédito Democrático",
      descricao: "Fichamento do artigo da Revista Piauí “Do crédito público ao descrédito democrático”. O PDF está anexado ao enunciado da tarefa no Moodle.",
      oQueFazer: "Entrega pelo Moodle até 23h59. A tarefa abre em 16/09. Cai numa terça, e não no dia da aula.",
      fonte: "Tarefa publicada pelo professor na sala de Economia Política no Moodle."
    },
    {
      data: "2026-09-23", hora: null, disciplina: "Prát. Ext.", tipo: "APRESENTACAO",
      titulo: "Proposta do produto extensionista",
      descricao: "Apresentação em sala da proposta do produto extensionista. No plano de aula corresponde à entrevista em grupo que compõe a nota N1.",
      oQueFazer: "Apresentação em grupo, em sala. A data da turma 1P é 23/09 — 24/09 no plano é da turma 1F."
    },
    {
      data: "2026-09-23", hora: null, disciplina: "IDP", tipo: "PROVA",
      titulo: "1ª Prova (N1)",
      descricao: "Primeira prova de Introdução ao Direito Privado, Pessoas e Bens. Cobre 100% do conteúdo do bimestre e é um dos dois instrumentos da N1, junto com o trabalho em grupo entregue em 20/09.",
      oQueFazer: "Estudar o conteúdo do bimestre inteiro — a prova não é por recorte. É quarta-feira, dia de aula da disciplina, das 21h10 às 22h50. Cai no mesmo dia da apresentação da proposta do produto extensionista.",
      fonte: "Quadro de avaliações da disciplina, informado pelo representante da turma em 18/08/2026."
    },
    {
      data: "2026-09-24", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição sobre o ordenamento jurídico",
      descricao: "Resumo manuscrito da lição do Betioli sobre “ordenamento jurídico” (Introdução ao Direito, 16ª ed., Saraiva, 2023). O cronograma não numera esta lição.",
      oQueFazer: "Escrever o resumo à mão, você mesmo, e enviar a digitalização pelo Moodle.",
      fonte: "Tarefa 1022926 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-09-25", hora: null, disciplina: "Ciên. Pol.", tipo: "AULA",
      titulo: "Vista da prova NI1",
      descricao: "Aula de vista da prova NI1, seguida do conteúdo sobre análise teórica do Estado moderno.",
      oQueFazer: "É a chance de conferir a correção e pedir revisão de questão. Quem falta perde a vista.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 8 do cronograma."
    },
    {
      data: "2026-09-25", hora: null, disciplina: "CTS", tipo: "AULA",
      titulo: "Vista da prova NI1",
      descricao: "Aula de vista da prova NI1 de CTS, seguida do conteúdo sobre mudança social e participação democrática.",
      oQueFazer: "É a chance de conferir a correção e pedir revisão de questão. Quem falta perde a vista. Cai no mesmo dia da vista de Ciência Política, do mesmo professor — as duas são na sexta.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 8 do cronograma."
    },
    {
      data: "2026-09-30", hora: null, disciplina: "Econ. Pol.", tipo: "AVALIACAO",
      titulo: "Avaliações NI1-A e NI1-B",
      descricao: "Aplicação das duas avaliações do primeiro bimestre de Economia Política. Conforme o plano, os pesos são de 60% para a NI1-A e 40% para a NI1-B.",
      oQueFazer: "As duas caem no mesmo dia. A NI1-A vale mais, então priorize o conteúdo dela ao estudar."
    },

    /* ---------------- OUTUBRO DE 2026 ---------------- */
    {
      data: "2026-10-01", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen — caps. 4 e 5",
      descricao: "Resumo manuscrito de dois capítulos do Kelsen (versão condensada): capítulo 4 (“Dualismo da teoria do direito e sua dominação”) e capítulo 5 (“Ordenamento jurídico e seu escalonamento”).",
      oQueFazer: "São dois capítulos. Escrever à mão e enviar a digitalização pelo Moodle.",
      fonte: "Tarefa 1022930 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-10-05", hora: null, disciplina: "TGD", tipo: "COMPETICAO",
      titulo: "Hackathon",
      descricao: "Competição Hackathon, marcada no cronograma de aulas da Teoria Geral do Direito.",
      oQueFazer: "Atividade no lugar da aula normal. Acompanhe a divulgação da universidade sobre inscrição e formato."
    },
    {
      data: "2026-10-05", hora: null, disciplina: "Prát. Ext.", tipo: "EVENTO",
      titulo: "Hackathon e Jornada de IC",
      descricao: "Hackathon e Jornada de Iniciação Científica, no cronograma da Prática Extensionista. É o mesmo bloco de atividades marcado em TGD.",
      oQueFazer: "Não haverá aula comum."
    },
    {
      data: "2026-10-07", hora: null, disciplina: "Prát. Ext.", tipo: "EVENTO",
      titulo: "Hackathon e Jornada de IC",
      descricao: "Segundo dia do Hackathon e da Jornada de Iniciação Científica.",
      oQueFazer: "Não haverá aula comum."
    },
    {
      data: "2026-10-07", hora: null, disciplina: "Econ. Pol.", tipo: "EVENTO",
      titulo: "Evento CCT",
      descricao: "Evento da CCT no lugar da aula de Economia Política. Coincide com o Hackathon e a Jornada de IC.",
      oQueFazer: "Não haverá aula de Economia Política."
    },
    {
      data: "2026-10-08", hora: null, disciplina: "TGD", tipo: "COMPETICAO",
      titulo: "Hackathon",
      descricao: "Terceiro dia da competição Hackathon, no cronograma da Teoria Geral do Direito.",
      oQueFazer: "Atividade no lugar da aula normal."
    },
    {
      data: "2026-10-08", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen — cap. 6 (Interpretação)",
      descricao: "Resumo manuscrito do capítulo 6 (“Interpretação”) do Kelsen, versão condensada pelo autor. É o último capítulo da sequência do Kelsen.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia do Hackathon, que substitui a aula.",
      fonte: "Tarefa 1022935 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-10-09", hora: null, disciplina: "Ciên. Pol.", tipo: "EVENTO",
      titulo: "Semana Internacional de Direitos Humanos, sem aula",
      descricao: "A aula 10 de Ciência Política é substituída pela Semana Internacional de Direitos Humanos.",
      oQueFazer: "Não haverá aula de Ciência Política. Atenção: esta data contradiz o cronograma de Teoria Geral do Direito, que marca o Encontro Internacional de Direitos Humanos em 27/08. As duas ficaram no calendário, cada uma na sua disciplina — confirme com a coordenação qual vale.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 10 do cronograma."
    },
    {
      data: "2026-10-09", hora: null, disciplina: "CTS", tipo: "EVENTO",
      titulo: "Semana Internacional de Direitos Humanos, sem aula",
      descricao: "A aula 10 de Ciência, Tecnologia e Sociedade no Direito é substituída pela Semana Internacional de Direitos Humanos.",
      oQueFazer: "Não haverá aula de CTS. O plano de CTS confirma a mesma data que o de Ciência Política, o que reforça o 08 e 09 de outubro para a semana de Direitos Humanos — mas ainda contradiz o cronograma de TGD, que marca o Encontro Internacional em 27/08. Lembre que os dois planos que concordam são do mesmo professor.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 10 do cronograma."
    },
    {
      data: "2026-10-12", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Nossa Senhora Aparecida",
      descricao: "Feriado nacional. Não há aula."
    },
    {
      data: "2026-10-15", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XXX",
      descricao: "Resumo manuscrito da Lição XXX (“Hermenêutica jurídica”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Começa aqui o bloco de hermenêutica e interpretação, que continua em 22/10.",
      fonte: "Tarefa 1022937 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-10-22", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO",
      titulo: "Apresentação 4 — Direito na América Espanhola e Portuguesa",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Apresentam Luiza C. e Pedro O. Material: “Direito e barbárie na conquista da América indígena” (texto em PDF e slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, e texto disponibilizado no Moodle.",
      oQueFazer: "O fichamento deste mesmo texto é entregue na aula da apresentação. Apresentação de 10 a 15 minutos, avaliada pela ficha do Moodle. A apresentação do grupo vale 20% da N2.",
      fonte: "Cronograma publicado pelo professor na sala do Moodle em 20/08/2026."
    },
    {
      data: "2026-10-29", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO",
      titulo: "Apresentação 5 — Revolução Francesa e Direito Moderno",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Apresentam Louise R. e Ryan S. Material: “A Revolução Francesa e a Evolução do Estado Liberal ao Estado Democrático de Direito” (slides no Moodle). Bibliografia: GRIVOT, Débora C. H. et al. História do Direito. Grupo A, 2017 (Minha Biblioteca), pp. 127-150.",
      oQueFazer: "O fichamento deste mesmo texto é entregue na aula da apresentação. Apresentação de 10 a 15 minutos, avaliada pela ficha do Moodle. A apresentação do grupo vale 20% da N2.",
      fonte: "Cronograma publicado pelo professor na sala do Moodle em 20/08/2026."
    },
    {
      data: "2026-10-22", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XXXI",
      descricao: "Resumo manuscrito da Lição XXXI (“escolas de interpretação”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever o resumo à mão, você mesmo, e enviar a digitalização pelo Moodle.",
      fonte: "Tarefa 1022940 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-10-23", hora: null, disciplina: "CTS", tipo: "AULA",
      titulo: "Oficina de análise crítica de uma aplicação de inteligência artificial",
      descricao: "Oficina prática em aula, em que a turma analisa criticamente uma aplicação de inteligência artificial. É a aula que prepara a prova prática em grupo da semana seguinte.",
      oQueFazer: "Não é avaliação, mas é a aula que monta a prova de 30/10, que vale peso 7 da NI2. Faltar aqui é chegar na prova prática sem o método. Vá e anote o roteiro da análise.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 12 do cronograma."
    },
    {
      data: "2026-10-29", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Barroso — Neoconstitucionalismo",
      descricao: "Resumo manuscrito do texto de BARROSO, Luiz Roberto, sobre neoconstitucionalismo. É o único item do cronograma que não sai de livro.",
      oQueFazer: "Atenção: a tarefa de entrega existe, mas o texto em si ainda não foi publicado na sala de TGD. Sem ele não dá para começar o resumo — vale cobrar do professor com antecedência, e não na véspera.",
      fonte: "Tarefa 1022943 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },

    /* ---------------- NOVEMBRO DE 2026 ---------------- */
    {
      data: "2026-11-05", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO",
      titulo: "Apresentação 6 — Direito no Império",
      descricao: "Última apresentação em grupo do cronograma, de 10 a 15 minutos. Apresentam Heloísa F. e Thiago R. Material: “Brasil Império — História do Direito” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 128-143.",
      oQueFazer: "O fichamento deste mesmo texto é entregue na aula da apresentação. Apresentação de 10 a 15 minutos, avaliada pela ficha do Moodle. A apresentação do grupo vale 20% da N2.",
      fonte: "Cronograma publicado pelo professor na sala do Moodle em 20/08/2026."
    },
    {
      data: "2026-10-30", hora: null, disciplina: "Ciên. Pol.", tipo: "APRESENTACAO",
      titulo: "Seminários em grupo",
      descricao: "Apresentação dos seminários em grupo de Ciência Política, peso 3 da segunda nota intermediária.",
      oQueFazer: "Organize o grupo com antecedência — o seminário vale 3 dos 10 pontos da NI2.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 13 do cronograma."
    },
    {
      data: "2026-10-30", hora: null, disciplina: "CTS", tipo: "PROVA",
      titulo: "Prova prática em grupo NI2 (peso 7)",
      descricao: "Prova prática, feita em grupo, peso 7 da segunda nota intermediária. Diferente da NI1, que é prova escrita individual: aqui a avaliação é prática e coletiva, e cobra o método trabalhado na oficina de 23/10.",
      oQueFazer: "Prova em grupo — o grupo precisa estar formado antes do dia. Revise o que foi feito na oficina de 23/10, que é o ensaio desta prova. Cai no mesmo dia dos seminários de Ciência Política, do mesmo professor.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 13 do cronograma, e critérios de avaliação do mesmo arquivo."
    },
    {
      data: "2026-11-02", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Finados",
      descricao: "Feriado nacional. Não há aula."
    },
    {
      data: "2026-11-04", hora: null, disciplina: "Econ. Pol.", tipo: "PROVA",
      titulo: "Prova Integrada",
      descricao: "Prova Integrada, marcada no plano de Economia Política. A mesma data aparece em Prática Extensionista, o que indica ser uma prova única para as duas disciplinas.",
      oQueFazer: "Ainda não há instrução divulgada sobre formato e conteúdo. No mural do Portal do Aluno existe um cartão “Prova Integrada” com botão “Acessar”, mas ele não traz data, disciplina nem instrução. Como não dá para saber se o botão apenas informa ou se abre a avaliação, pergunte à coordenação a que ele se refere antes de clicar."
    },
    {
      data: "2026-11-04", hora: null, disciplina: "Prát. Ext.", tipo: "PROVA",
      titulo: "Prova integrada",
      descricao: "Mesma Prova Integrada do dia, registrada também no cronograma da Prática Extensionista.",
      oQueFazer: "Aparece duas vezes porque está marcada nas duas disciplinas. É um compromisso só."
    },
    {
      data: "2026-11-05", hora: "23:59", disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XLI",
      descricao: "Resumo manuscrito da Lição XLI (“A teoria da justiça”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. É o último manuscrito do cronograma: depois dele só vem a prova A2.",
      fonte: "Tarefa 1022945 na sala de TGD no Moodle (curso 39157), com prazo até 23h59."
    },
    {
      data: "2026-11-06", hora: null, disciplina: "Ciên. Pol.", tipo: "PROVA",
      titulo: "Prova escrita NI2",
      descricao: "Prova escrita e individual de Ciência Política, peso 7 da segunda nota intermediária. É permitida consulta a uma folha manuscrita.",
      oQueFazer: "Mesmo formato da NI1: prepare a folha de consulta manuscrita com antecedência.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 14 do cronograma."
    },
    {
      data: "2026-11-06", hora: null, disciplina: "CTS", tipo: "APRESENTACAO",
      titulo: "Seminários em grupo (peso 3 da NI2)",
      descricao: "Segunda rodada de seminários em grupo de CTS, peso 3 da segunda nota intermediária. Fecha a NI2 junto com a prova prática de 30/10.",
      oQueFazer: "Com este seminário a NI2 de CTS está completa: 7 da prova prática de 30/10 mais 3 daqui. Cai no mesmo dia da prova escrita NI2 de Ciência Política — dois compromissos do mesmo professor na mesma sexta.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 14 do cronograma, e critérios de avaliação do mesmo arquivo."
    },
    {
      data: "2026-11-09", hora: null, disciplina: "TGD", tipo: "PROVA",
      titulo: "Prova A2 (N2)",
      descricao: "Prova dissertativa de Teoria Geral do Direito. A nota A2 segue a mesma composição da A1: prova com peso 7, seminário com peso 2 e manuscritos com peso 1.",
      oQueFazer: "Estudar o conteúdo da segunda metade: Kelsen (caps. 4 a 6), hermenêutica e escolas de interpretação (Betioli XXX e XXXI), Barroso e teorias da justiça (Betioli XLI)."
    },
    {
      data: "2026-11-09", hora: null, disciplina: "Prát. Ext.", tipo: "ENTREGA",
      titulo: "Produto extensionista",
      descricao: "Entrega do produto extensionista, em grupo. É a primeira das duas avaliações que compõem a nota N2 da disciplina.",
      oQueFazer: "Entrega em grupo, pelo Moodle. Cai no mesmo dia da prova A2 de TGD — organize o grupo com antecedência. A data da 1P é 09/11; 05/11 no plano é da turma 1F."
    },
    {
      data: "2026-11-11", hora: null, disciplina: "Econ. Pol.", tipo: "AVALIACAO",
      titulo: "Avaliação NI2-A",
      descricao: "Primeira avaliação do segundo bimestre de Economia Política. Peso de 30% conforme o plano.",
      oQueFazer: "Estudar o conteúdo do segundo bimestre da disciplina."
    },
    {
      data: "2026-11-11", hora: null, disciplina: "IDP", tipo: "PROVA",
      titulo: "2ª Prova (N2)",
      descricao: "Segunda prova de Introdução ao Direito Privado, Pessoas e Bens. Cobre 100% do conteúdo do bimestre e é um dos dois instrumentos da N2, junto com o trabalho em grupo entregue em 15/11. A N2 pesa mais que a N1 no fechamento da disciplina.",
      oQueFazer: "Estudar o conteúdo do segundo bimestre inteiro. É quarta-feira, dia de aula da disciplina. Cai no mesmo dia da avaliação NI2-A de Economia Política — são duas provas no mesmo dia.",
      fonte: "Quadro de avaliações da disciplina, informado pelo representante da turma em 18/08/2026."
    },
    {
      data: "2026-11-13", hora: null, disciplina: "Ciên. Pol.", tipo: "AULA",
      titulo: "Vista da prova NI2",
      descricao: "Aula de vista da prova NI2 de Ciência Política.",
      oQueFazer: "Última chance de conferir a correção e pedir revisão antes do fechamento das notas.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 15 do cronograma."
    },
    {
      data: "2026-11-13", hora: null, disciplina: "CTS", tipo: "AULA",
      titulo: "Vista da prova NI2",
      descricao: "Aula de vista da prova da segunda nota intermediária de CTS.",
      oQueFazer: "Última chance de conferir a correção e pedir revisão antes do fechamento das notas. Cai no mesmo dia da vista de Ciência Política.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 15 do cronograma."
    },
    {
      data: "2026-11-15", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Proclamação da República",
      descricao: "Feriado nacional, que este ano cai num domingo.",
      oQueFazer: "Cuidado: três entregas vencem hoje mesmo, às 23h59 — os dois fichamentos de Economia Política e o trabalho em grupo de Introdução ao Direito Privado. Ser feriado e domingo não adia o prazo do Moodle."
    },
    {
      data: "2026-11-15", hora: "23:59", disciplina: "Econ. Pol.", tipo: "TAREFA",
      titulo: "Fichamento — Livro Ideologia (Marilena Chauí)",
      descricao: "Fichamento do livro “Ideologia”, de Marilena Chauí, entregue pelo Moodle até 23h59.",
      oQueFazer: "Há um modelo de fichamento postado na sala da disciplina — baixe e siga o modelo. Vence num domingo, então não deixe para o fim de semana."
    },
    {
      data: "2026-11-15", hora: "23:59", disciplina: "Econ. Pol.", tipo: "TAREFA",
      titulo: "Fichamento — Livro Seminário",
      descricao: "Fichamento do livro do seminário, entregue pelo Moodle até 23h59. Cada grupo fica com um livro diferente, dos sete sorteados para a turma — a lista de quem está em qual grupo e com qual livro está na aba Grupos de Trabalho, em Economia Política, N1.",
      oQueFazer: "São dois fichamentos diferentes no mesmo prazo, este e o da Marilena Chauí. Use o mesmo modelo postado na sala. Confira na aba Grupos de Trabalho qual é o livro do seu grupo antes de começar."
    },
    {
      data: "2026-11-15", hora: "23:59", disciplina: "IDP", tipo: "ENTREGA",
      titulo: "Trabalho em grupo — N2",
      descricao: "Trabalho em grupo de Introdução ao Direito Privado, postado no Moodle. Fecha a N2 junto com a prova de 11/11; os dois têm o mesmo peso dentro do bimestre.",
      oQueFazer: "Postar no Moodle até 23h59. É o terceiro prazo do mesmo domingo — os dois fichamentos de Economia Política vencem no mesmo horário. Feriado e domingo não adiam nada.",
      fonte: "Quadro de avaliações da disciplina, informado pelo representante da turma em 18/08/2026."
    },
    {
      data: "2026-11-16", hora: null, disciplina: "Antrop. Jur.", tipo: "AVALIACAO",
      titulo: "2ª avaliação",
      descricao: "Avaliação de Antropologia Jurídica em duas partes: prova individual sem consulta e resenha crítica de “O Povo Brasileiro”.",
      oQueFazer: "Mesmo formato da primeira avaliação. Ter a resenha crítica pronta e estudar para a prova sem consulta."
    },
    {
      data: "2026-11-16", hora: null, disciplina: "TGD", tipo: "AULA",
      titulo: "Correção e vista da prova A2",
      descricao: "Aula em que o professor corrige a prova A2 e a turma tem vista da prova.",
      oQueFazer: "Última chance de conferir a correção e pedir revisão antes do fechamento das notas."
    },
    {
      data: "2026-11-18", hora: null, disciplina: "Econ. Pol.", tipo: "AULA",
      titulo: "Devolutiva e correção das avaliações",
      descricao: "Aula de devolutiva e correção das avaliações de Economia Política.",
      oQueFazer: "Atenção: a NI2-B pode cair justamente nesta data, se o professor decidir aplicá-la em 18/11. Chegue preparado."
    },
    {
      data: "2026-11-20", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Dia da Consciência Negra",
      descricao: "Feriado nacional. Não há aula."
    },
    {
      data: "2026-11-23", hora: null, disciplina: "Prát. Ext.", tipo: "ENTREGA",
      titulo: "Relatório de impacto extensionista",
      descricao: "Entrega individual do relatório de impacto extensionista. É a segunda das duas avaliações que compõem a nota N2 da disciplina.",
      oQueFazer: "Entrega individual, pelo Moodle. A data da 1P é 23/11; 19/11 no plano é da turma 1F."
    },
    {
      data: "2026-11-25", hora: null, disciplina: "Econ. Pol.", tipo: "AVALIACAO", confirmar: true,
      titulo: "Avaliação NI2-B",
      descricao: "Segunda avaliação do segundo bimestre de Economia Política. O professor ainda não fixou o dia: cai em algum ponto entre 18 e 25 de novembro.",
      oQueFazer: "Está marcada em 25/11 porque é a data lançada no calendário do Moodle, mas esteja pronto já em 18/11 e fique atento ao anúncio do professor."
    },
    {
      data: "2026-11-25", hora: null, disciplina: "Prát. Ext.", tipo: "AULA",
      titulo: "Fechamento do semestre",
      descricao: "Última aula da Prática Extensionista, de fechamento do semestre.",
      oQueFazer: "É a aula de encerramento. Boa hora para resolver qualquer pendência de entrega da disciplina."
    },
    {
      data: "2026-11-29", hora: null, disciplina: "Geral", tipo: "EVENTO", confirmar: true,
      titulo: "ENADE — cursos de bacharelado",
      descricao: "Data do ENADE para os cursos de bacharelado, divulgada no banner do Portal do Aluno. A participação é obrigatória pelo MEC para quem está na lista de avaliados.",
      oQueFazer: "Confira no Portal do Aluno se você está entre os alunos convocados. O exame costuma avaliar concluintes, então é provável que não alcance o 1º período — mas confirme, porque a ausência de quem foi convocado trava a colação de grau.",
      fonte: "Banner do Portal do Aluno, seção ENADE: “Cursos de Bacharelado e Superiores de Tecnologia — 29 de novembro de 2026”."
    },
    {
      data: "2026-11-30", hora: null, disciplina: "Prát. Ext.", tipo: "PROVA",
      titulo: "Período de prova substitutiva",
      descricao: "Início do período de prova substitutiva da Prática Extensionista.",
      oQueFazer: "Só faz quem perdeu alguma avaliação. Confirme com a secretaria se precisa solicitar."
    },
    {
      data: "2026-11-30", hora: null, disciplina: "TGD", tipo: "PROVA", confirmar: true,
      titulo: "Período das avaliações substitutivas",
      descricao: "Início do período das avaliações substitutivas de Teoria Geral do Direito.",
      oQueFazer: "Só faz quem perdeu a A1 ou a A2. O próprio cronograma avisa que a data vale conforme o calendário oficial, que ainda será divulgado.",
      fonte: "Arquivo “CRONOGRAMA DE AULAS” da disciplina: “AV. SUBSTITUTIVAS E AV. FINAIS CONFORME CALENDÁRIO OFICIAL A SER DIVULGADO”."
    },

    /* ---------------- DEZEMBRO DE 2026 ---------------- */
    {
      data: "2026-12-02", hora: null, disciplina: "Econ. Pol.", tipo: "PROVA",
      titulo: "Período das avaliações substitutivas",
      descricao: "Período das avaliações substitutivas de Economia Política.",
      oQueFazer: "Só faz quem perdeu alguma avaliação do semestre."
    },
    {
      data: "2026-12-02", hora: null, disciplina: "Prát. Ext.", tipo: "PROVA",
      titulo: "Período de prova substitutiva",
      descricao: "Período de prova substitutiva da Prática Extensionista.",
      oQueFazer: "Só faz quem perdeu alguma avaliação."
    },
    {
      data: "2026-12-03", hora: null, disciplina: "TGD", tipo: "PROVA", confirmar: true,
      titulo: "Período das avaliações substitutivas",
      descricao: "Segundo dia do período das avaliações substitutivas de Teoria Geral do Direito.",
      oQueFazer: "Só faz quem perdeu a A1 ou a A2. O próprio cronograma avisa que a data vale conforme o calendário oficial, que ainda será divulgado.",
      fonte: "Arquivo “CRONOGRAMA DE AULAS” da disciplina: “AV. SUBSTITUTIVAS E AV. FINAIS CONFORME CALENDÁRIO OFICIAL A SER DIVULGADO”."
    },
    {
      data: "2026-12-04", hora: null, disciplina: "Ciên. Pol.", tipo: "PROVA",
      titulo: "Período das avaliações substitutivas",
      descricao: "Período das avaliações substitutivas de Ciência Política.",
      oQueFazer: "Só faz quem perdeu alguma avaliação do semestre.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 16 do cronograma."
    },
    {
      data: "2026-12-04", hora: null, disciplina: "CTS", tipo: "PROVA",
      titulo: "Avaliações substitutivas",
      descricao: "Período das avaliações substitutivas de CTS, que cobrem ausência na NI1 ou na NI2.",
      oQueFazer: "Só faz quem perdeu alguma avaliação do semestre. Confirme com a secretaria se precisa solicitar.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 16 do cronograma."
    },
    {
      data: "2026-12-07", hora: null, disciplina: "Prát. Ext.", tipo: "PROVA",
      titulo: "Período de prova final",
      descricao: "Período de prova final da Prática Extensionista.",
      oQueFazer: "Só faz quem não atingiu a média. Confira sua situação no Portal do Aluno."
    },
    {
      data: "2026-12-07", hora: null, disciplina: "TGD", tipo: "PROVA", confirmar: true,
      titulo: "Período das avaliações finais",
      descricao: "Início do período das avaliações finais de Teoria Geral do Direito.",
      oQueFazer: "Só faz quem não atingiu a média. O próprio cronograma avisa que a data vale conforme o calendário oficial, que ainda será divulgado.",
      fonte: "Arquivo “CRONOGRAMA DE AULAS” da disciplina: “AV. SUBSTITUTIVAS E AV. FINAIS CONFORME CALENDÁRIO OFICIAL A SER DIVULGADO”."
    },
    {
      data: "2026-12-09", hora: null, disciplina: "Econ. Pol.", tipo: "PROVA",
      titulo: "Período das avaliações finais",
      descricao: "Período das avaliações finais de Economia Política.",
      oQueFazer: "Só faz quem não atingiu a média."
    },
    {
      data: "2026-12-09", hora: null, disciplina: "Prát. Ext.", tipo: "PROVA",
      titulo: "Período de prova final",
      descricao: "Período de prova final da Prática Extensionista.",
      oQueFazer: "Só faz quem não atingiu a média."
    },
    {
      data: "2026-12-11", hora: null, disciplina: "Ciên. Pol.", tipo: "PROVA",
      titulo: "Período das avaliações finais",
      descricao: "Período das avaliações finais de Ciência Política.",
      oQueFazer: "Só faz quem não atingiu a média.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 17 do cronograma."
    },
    {
      data: "2026-12-11", hora: null, disciplina: "CTS", tipo: "PROVA",
      titulo: "Período das avaliações finais",
      descricao: "Período das avaliações finais de CTS.",
      oQueFazer: "Só faz quem não atingiu a média. Confira sua situação no Portal do Aluno.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 17 do cronograma."
    },
    {
      data: "2026-12-10", hora: null, disciplina: "TGD", tipo: "PROVA", confirmar: true,
      titulo: "Período das avaliações finais",
      descricao: "Último dia do período das avaliações finais de Teoria Geral do Direito.",
      oQueFazer: "Só faz quem não atingiu a média. O próprio cronograma avisa que a data vale conforme o calendário oficial, que ainda será divulgado.",
      fonte: "Arquivo “CRONOGRAMA DE AULAS” da disciplina: “AV. SUBSTITUTIVAS E AV. FINAIS CONFORME CALENDÁRIO OFICIAL A SER DIVULGADO”."
    },
    {
      data: "2026-12-14", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Aniversário de Campinas (feriado municipal)",
      descricao: "Feriado municipal de Campinas. Não há aula."
    },

    /* ---------- HISTÓRIA DO DIREITO — cronograma da disciplina ----------
       Fichamentos, atividades em sala, exames, devolutivas e as datas de
       N1 e N2, informados pelo representante da turma em 20/08/2026.
       Ficam juntos aqui, e não espalhados pelos meses, porque são o
       cronograma de uma disciplina só — a página ordena por data. */
    {
      data: "2026-08-20", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Fichamento — Civilizações Antigas",
      descricao: "Fichamento do texto sobre as civilizações antigas: ROCHA, José Manuel de S. História do Direito no Ocidente. Grupo GEN, 2015, páginas 73 a 86, disponível na Minha Biblioteca.",
      oQueFazer: "Manuscrito, em ficha, frente e verso, caneta azul ou preta, entregue em mãos ao professor. O modelo e as exigências estão na aba Fichamento e Trabalhos.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-09-03", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Fichamento — Direito na Grécia",
      descricao: "Fichamento do texto do Direito na Grécia, tema apresentado nesta mesma aula.",
      oQueFazer: "Manuscrito, em ficha, entregue em mãos ao professor.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-09-10", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Fichamento — Direito em Roma",
      descricao: "Fichamento do texto do Direito em Roma, tema apresentado nesta mesma aula.",
      oQueFazer: "Manuscrito, em ficha, entregue em mãos ao professor.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-09-17", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Fichamento — Direito na Idade Média",
      descricao: "Fichamento do texto do Direito na Idade Média, tema apresentado nesta mesma aula.",
      oQueFazer: "Manuscrito, em ficha, entregue em mãos ao professor.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-09-24", hora: null, disciplina: "Hist. Dir.", tipo: "AVALIACAO",
      titulo: "Atividade em grupo — 40% da N1",
      descricao: "Atividade avaliativa feita durante a própria aula, em grupo de 2 a 3 alunos: o professor dá as orientações no início, o texto é produzido em sala e a entrega acontece ao fim do encontro. Vale 40% da N1; os outros 60% saem da prova individual de 01/10.",
      oQueFazer: "É feita e entregue na hora — não dá para repor depois. Quem falta perde 40% da primeira nota.",
      fonte: "Cronograma e pesos informados pelo professor, repassados pelo representante da turma em 21/08/2026."
    },
    {
      data: "2026-10-01", hora: null, disciplina: "Hist. Dir.", tipo: "PROVA",
      titulo: "Prova individual — 60% da N1",
      descricao: "Prova individual de História do Direito, do primeiro bimestre. É o que mais pesa na N1: vale 60%, contra 40% da atividade em grupo de 24/09.",
      oQueFazer: "Quinta-feira, no horário da disciplina, das 21h10 às 22h50. Com ela a N1 fecha.",
      fonte: "Cronograma e pesos informados pelo professor, repassados pelo representante da turma em 21/08/2026."
    },
    {
      data: "2026-10-03", hora: null, disciplina: "Hist. Dir.", tipo: "AVALIACAO",
      titulo: "N1",
      descricao: "Data de N1 no cronograma da disciplina, dois dias depois do exame do primeiro bimestre.",
      oQueFazer: "Cai num sábado, quando não há aula — pelo lugar que ocupa no cronograma, é a data de fechamento da nota, e não uma avaliação presencial. Confirme com o professor antes de contar com isso.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-10-15", hora: null, disciplina: "Hist. Dir.", tipo: "AULA",
      titulo: "Devolutiva do 1º bimestre",
      descricao: "Aula de devolutiva do primeiro bimestre, com a correção do que foi avaliado.",
      oQueFazer: "É a chance de conferir a correção e pedir revisão. Quem falta perde a devolutiva.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-10-22", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Fichamento — Direito na América Espanhola e Portuguesa",
      descricao: "Fichamento do texto do Direito na América Espanhola e Portuguesa.",
      oQueFazer: "Manuscrito, em ficha, entregue em mãos ao professor.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-10-29", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Fichamento — Revolução Francesa e Direito Moderno",
      descricao: "Fichamento do texto da Revolução Francesa e do Direito Moderno.",
      oQueFazer: "Manuscrito, em ficha, entregue em mãos ao professor.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-11-05", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Fichamento — Direito no Império",
      descricao: "Fichamento do texto do Direito no Império.",
      oQueFazer: "Manuscrito, em ficha, entregue em mãos ao professor. É o último fichamento do cronograma.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    },
    {
      data: "2026-11-12", hora: null, disciplina: "Hist. Dir.", tipo: "AVALIACAO",
      titulo: "Atividade em grupo — 20% da N2",
      descricao: "Segunda atividade avaliativa feita durante a aula, no mesmo formato da de 24/09: orientação no início, texto produzido em sala e entrega ao fim do encontro. Vale 20% da N2.",
      oQueFazer: "É feita e entregue na hora — não dá para repor depois. A N2 se divide em quatro partes: esta atividade (20%), a prova de 19/11 (40%), a apresentação do seu grupo (20%) e as fichas entregues em 26/11 (20%).",
      fonte: "Cronograma e pesos informados pelo professor, repassados pelo representante da turma em 21/08/2026."
    },
    {
      data: "2026-11-19", hora: null, disciplina: "Hist. Dir.", tipo: "PROVA",
      titulo: "Prova — 40% da N2",
      descricao: "Prova de História do Direito do segundo bimestre. É o maior peso da N2: vale 40%, contra 20% da atividade em grupo, 20% da apresentação e 20% das fichas.",
      oQueFazer: "Quinta-feira, no horário da disciplina, das 21h10 às 22h50.",
      fonte: "Cronograma e pesos informados pelo professor, repassados pelo representante da turma em 21/08/2026."
    },
    {
      data: "2026-11-26", hora: null, disciplina: "Hist. Dir.", tipo: "ENTREGA",
      titulo: "Entrega das fichas — 20% da N2, e devolutiva",
      descricao: "Entrega das fichas dos textos do semestre, que valem 20% da N2, no mesmo encontro da devolutiva do segundo bimestre.",
      oQueFazer: "Leve todas as fichas: é aqui que os fichamentos viram nota, e são 20% da N2. A devolutiva acontece no mesmo dia.",
      fonte: "Cronograma e pesos informados pelo professor, repassados pelo representante da turma em 21/08/2026."
    },
    {
      data: "2026-11-28", hora: null, disciplina: "Hist. Dir.", tipo: "AVALIACAO",
      titulo: "N2",
      descricao: "Data de N2 no cronograma da disciplina, dois dias depois da devolutiva do segundo bimestre.",
      oQueFazer: "Também cai num sábado, sem aula — mesma leitura da N1: é a data de fechamento da nota. Confirme com o professor.",
      fonte: "Cronograma da disciplina, informado pelo representante da turma em 20/08/2026."
    }
  ]
};

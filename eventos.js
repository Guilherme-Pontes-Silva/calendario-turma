/* ===================================================================
   DADOS DO CALENDÁRIO DA TURMA
   -------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser trocado quando o calendário
   mudar. O index.html não precisa ser tocado.

   Campos de cada evento:
     data       "AAAA-MM-DD"  (obrigatório)
     hora       "HH:MM" ou null  — null = dia todo, sem hora marcada
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
  atualizadoEm: "2026-08-18T00:35:00-03:00",
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
      data: "2026-08-20", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli, Introdução ao Direito — Lição IV",
      descricao: "Resumo manuscrito da Lição IV (“Leis físicas, culturais e éticas”) de BETIOLI, Antonio Bento. Introdução ao Direito. 16ª ed. São Paulo: Saraiva, 2023.",
      oQueFazer: "Ler a Lição IV, escrever o resumo à mão e enviar a digitalização pelo Moodle. Atenção: até 12/08 a seção “Entregas dos manuscritos para avaliação”, na sala de TGD, estava vazia, sem nenhuma tarefa aberta para envio. Se continuar assim perto do dia, cobre o professor."
    },
    {
      data: "2026-08-21", hora: null, disciplina: "Ciên. Pol.", tipo: "ENTREGA", confirmar: true,
      titulo: "Fichamento 1 — Bonavides, capítulo 3",
      descricao: "Fichamento do capítulo 3 de Paulo Bonavides, “A Sociedade e o Estado”, texto trabalhado na aula de 14/08. Manuscrito, escrito à mão, no suporte que o aluno preferir. O professor publicou o PDF do capítulo na sala do Moodle em 17/08/2026, com o título “Ciência Política - Paulo Bonavides - Cap. 3 - 63-79” — são as páginas 63 a 79.",
      oQueFazer: "Baixe o PDF na sala de Ciência Política no Moodle: o texto agora está publicado, não é mais só a citação dos slides. A entrega é presencial, em mãos, ao professor — não há envio pelo Moodle. A data continua sendo dedução da regra “entrega na semana seguinte”, e não anúncio do professor: confirme com ele na aula de 21/08 se é esse o dia.",
      fonte: "Texto e arquivo: PDF “Ciência Política - Paulo Bonavides - Cap. 3 - 63-79”, publicado na sala do Moodle em 17/08/2026. Data de entrega: regra da semana seguinte, do arquivo “Aula 1 — Plano de Aulas, Avaliações e Conceitos Fundamentais.pdf”."
    },
    {
      data: "2026-08-24", hora: null, disciplina: "Prát. Ext.", tipo: "EVENTO",
      titulo: "Semana Jurídica",
      descricao: "Atividade da universidade no lugar da aula normal. Aparece tanto no cronograma da Prática Extensionista quanto no da Teoria Geral do Direito.",
      oQueFazer: "Não haverá aula comum. Acompanhe a programação da Semana Jurídica divulgada pela universidade."
    },
    {
      data: "2026-08-24", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição V",
      descricao: "Resumo manuscrito da Lição V (“notas distintivas do direito”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia da Semana Jurídica, que substitui a aula normal — mas o prazo é no Moodle e não depende de ter aula."
    },
    {
      data: "2026-08-26", hora: null, disciplina: "Prát. Ext.", tipo: "EVENTO",
      titulo: "Semana Jurídica",
      descricao: "Segundo dia da Semana Jurídica. Atividade da universidade no lugar da aula normal, também marcada no plano de aulas de Economia Política.",
      oQueFazer: "Não haverá aula comum."
    },
    {
      data: "2026-08-27", hora: null, disciplina: "TGD", tipo: "EVENTO",
      titulo: "Encontro Internacional de Direitos Humanos",
      descricao: "Atividade da universidade que substitui a aula, conforme o cronograma de aulas da disciplina.",
      oQueFazer: "Comparecer ao evento no lugar da aula de TGD."
    },
    {
      data: "2026-08-27", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Montoro, Introdução à Ciência do Direito — cap. 1",
      descricao: "Resumo manuscrito do capítulo 1 (“Conceito de direito”) de MONTORO, André Franco. Introdução à ciência do direito.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia do Encontro Internacional de Direitos Humanos, que substitui a aula."
    },
    {
      data: "2026-08-28", hora: null, disciplina: "Ciên. Pol.", tipo: "EVENTO",
      titulo: "Semana Jurídica, sem aula",
      descricao: "A aula 4 de Ciência Política é substituída pela Semana Jurídica.",
      oQueFazer: "Não haverá aula de Ciência Política. Atenção: três cronogramas oficiais discordam sobre a data das semanas institucionais — veja o bloco de pontos a confirmar no fim da página.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 4 do cronograma."
    },
    {
      data: "2026-08-28", hora: null, disciplina: "CTS", tipo: "EVENTO",
      titulo: "Semana Jurídica, sem aula",
      descricao: "A aula 4 de Ciência, Tecnologia e Sociedade no Direito é substituída pela Semana Jurídica.",
      oQueFazer: "Não haverá aula de CTS. É o mesmo dia em que Ciência Política também perde a aula — as duas disciplinas são do mesmo professor e caem na sexta. Sobre a divergência de datas das semanas institucionais, veja o bloco de pontos a confirmar no fim da página.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 4 do cronograma, publicado na sala do Moodle."
    },
    {
      data: "2026-08-31", hora: null, disciplina: "TGD", tipo: "APRESENTACAO",
      titulo: "Seminário 1 — Norma Jurídica (Norberto Bobbio)",
      descricao: "Primeiro dos quatro seminários de Teoria Geral do Direito, que compõem o peso 2 da nota A1. Apresentação oral em sala, de 10 a 15 minutos por grupo.",
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
      data: "2026-08-31", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XI",
      descricao: "Resumo manuscrito da Lição XI (“a norma jurídica”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Ler a Lição XI, escrever à mão e enviar a digitalização pelo Moodle."
    },

    /* ---------------- SETEMBRO DE 2026 ---------------- */
    {
      data: "2026-09-03", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen, Teoria Pura do Direito — cap. 1",
      descricao: "Resumo manuscrito do capítulo 1 (“Direito e natureza”) de KELSEN, Hans. Teoria pura do direito — versão condensada pelo autor.",
      oQueFazer: "Atenção à edição: o cronograma pede a versão condensada pelo autor, não a completa. Escrever à mão e enviar a digitalização pelo Moodle. É o primeiro de uma sequência de manuscritos sobre o Kelsen."
    },
    {
      data: "2026-09-03", hora: null, disciplina: "TGD", tipo: "APRESENTACAO",
      titulo: "Seminário 2 — Julgamento de Nuremberg",
      descricao: "Segundo seminário de Teoria Geral do Direito. Cai no mesmo dia do Seminário 3: são dois grupos apresentando na mesma aula.",
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
      descricao: "Terceiro seminário de Teoria Geral do Direito, na mesma aula do Seminário 2.",
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
      data: "2026-09-03", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO", confirmar: true,
      titulo: "Apresentação 1 — Direito na Grécia",
      descricao: "Primeira apresentação em grupo de História do Direito, de 10 a 15 minutos. Material: “Direito na Grécia Antiga” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 31-42.",
      oQueFazer: "Data estimada. O cronograma do professor traz 04/03, uma quarta-feira do 1º semestre, quando a disciplina era às quartas; neste semestre ela é às quintas. A data foi reposicionada para a quinta equivalente. Confirme com o professor antes de fechar o cronograma do grupo.",
      fonte: "Cronograma de temas do professor, com datas do 1º semestre de 2026, reposicionado para os dias de aula deste semestre."
    },
    {
      data: "2026-09-10", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO", confirmar: true,
      titulo: "Apresentação 2 — Direito em Roma",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Material: “Direito em Roma” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 44-55.",
      oQueFazer: "Data estimada, reposicionada de 11/03 para a quinta equivalente deste semestre. Confirme com o professor.",
      fonte: "Cronograma de temas do professor, com datas do 1º semestre de 2026, reposicionado para os dias de aula deste semestre."
    },
    {
      data: "2026-09-17", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO", confirmar: true,
      titulo: "Apresentação 3 — Direito na Idade Média",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Material: “O Direito na Idade Média” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 57-76.",
      oQueFazer: "Data estimada, reposicionada de 18/03 para a quinta equivalente deste semestre. Confirme com o professor.",
      fonte: "Cronograma de temas do professor, com datas do 1º semestre de 2026, reposicionado para os dias de aula deste semestre."
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
      data: "2026-09-10", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen — caps. 2 e 3",
      descricao: "Resumo manuscrito de dois capítulos do Kelsen (versão condensada): capítulo 2 (“Direito e moral”) e capítulo 3 (“o conceito de direito e a proposição jurídica”).",
      oQueFazer: "São dois capítulos, não um. Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia do prazo do arquivo do seminário — são duas entregas diferentes, não confunda."
    },
    {
      data: "2026-09-10", hora: null, disciplina: "TGD", tipo: "APRESENTACAO",
      titulo: "Seminário 4 — Tipos de Normas Jurídicas",
      descricao: "Último dos quatro seminários de Teoria Geral do Direito. Tema: norma legal, norma jurisdicional, norma negocial e norma costumeira.",
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
      data: "2026-09-23", hora: null, disciplina: "Prát. Ext.", tipo: "APRESENTACAO",
      titulo: "Proposta do produto extensionista",
      descricao: "Apresentação em sala da proposta do produto extensionista. No plano de aula corresponde à entrevista em grupo que compõe a nota N1.",
      oQueFazer: "Apresentação em grupo, em sala. A data da turma 1P é 23/09 — 24/09 no plano é da turma 1F."
    },
    {
      data: "2026-09-24", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição sobre o ordenamento jurídico",
      descricao: "Resumo manuscrito da lição do Betioli sobre “ordenamento jurídico” (Introdução ao Direito, 16ª ed., Saraiva, 2023). O cronograma não numera esta lição.",
      oQueFazer: "Escrever o resumo à mão, você mesmo, e enviar a digitalização pelo Moodle."
    },
    {
      data: "2026-09-25", hora: null, disciplina: "Hist. Dir.", tipo: "AVALIACAO",
      titulo: "Atividade avaliativa (40% da nota)",
      descricao: "Atividade avaliativa de História do Direito. Vale 40% da nota; os outros 60% vêm de uma prova de questões objetivas ainda sem data marcada.",
      oQueFazer: "Atenção ao lançamento das notas: ainda que os trabalhos sejam feitos antes, todas as notas da disciplina são lançadas apenas em N2, e não em N1.",
      fonte: "Anotado em aula pelo representante da turma, 12/08/2026."
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
      data: "2026-10-01", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen — caps. 4 e 5",
      descricao: "Resumo manuscrito de dois capítulos do Kelsen (versão condensada): capítulo 4 (“Dualismo da teoria do direito e sua dominação”) e capítulo 5 (“Ordenamento jurídico e seu escalonamento”).",
      oQueFazer: "São dois capítulos. Escrever à mão e enviar a digitalização pelo Moodle."
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
      data: "2026-10-08", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Kelsen — cap. 6 (Interpretação)",
      descricao: "Resumo manuscrito do capítulo 6 (“Interpretação”) do Kelsen, versão condensada pelo autor. É o último capítulo da sequência do Kelsen.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Cai no mesmo dia do Hackathon, que substitui a aula."
    },
    {
      data: "2026-10-09", hora: null, disciplina: "Ciên. Pol.", tipo: "EVENTO",
      titulo: "Semana Internacional de Direitos Humanos, sem aula",
      descricao: "A aula 10 de Ciência Política é substituída pela Semana Internacional de Direitos Humanos.",
      oQueFazer: "Não haverá aula de Ciência Política. Atenção: esta data contradiz o cronograma de Teoria Geral do Direito, que marca o Encontro Internacional de Direitos Humanos em 27/08 — veja o bloco de pontos a confirmar.",
      fonte: "Arquivo “Plano de Ensino — Ciência Política.pdf”, linha 10 do cronograma."
    },
    {
      data: "2026-10-09", hora: null, disciplina: "CTS", tipo: "EVENTO",
      titulo: "Semana Internacional de Direitos Humanos, sem aula",
      descricao: "A aula 10 de Ciência, Tecnologia e Sociedade no Direito é substituída pela Semana Internacional de Direitos Humanos.",
      oQueFazer: "Não haverá aula de CTS. O plano de CTS confirma a mesma data que o de Ciência Política, o que reforça o 08/09 de outubro para a semana de Direitos Humanos — mas ainda contradiz o cronograma de TGD, que marca o Encontro Internacional em 27/08. Veja o bloco de pontos a confirmar.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 10 do cronograma."
    },
    {
      data: "2026-10-12", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Nossa Senhora Aparecida",
      descricao: "Feriado nacional. Não há aula."
    },
    {
      data: "2026-10-15", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XXX",
      descricao: "Resumo manuscrito da Lição XXX (“Hermenêutica jurídica”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. Começa aqui o bloco de hermenêutica e interpretação, que continua em 22/10."
    },
    {
      data: "2026-10-15", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO", confirmar: true,
      titulo: "Apresentação 4 — Direito na América Espanhola e Portuguesa",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Material: “Direito e barbárie na conquista da América indígena” (texto em PDF e slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, e texto disponibilizado no Moodle.",
      oQueFazer: "Data estimada, reposicionada de 15/04 para a quinta equivalente deste semestre. Confirme com o professor.",
      fonte: "Cronograma de temas do professor, com datas do 1º semestre de 2026, reposicionado para os dias de aula deste semestre."
    },
    {
      data: "2026-10-22", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO", confirmar: true,
      titulo: "Apresentação 5 — Revolução Francesa e Direito Moderno",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Material: “A Revolução Francesa e a Evolução do Estado Liberal ao Estado Democrático de Direito” (slides no Moodle). Bibliografia: GRIVOT, Débora C. H. et al. História do Direito. Grupo A, 2017 (Minha Biblioteca), pp. 127-150.",
      oQueFazer: "Data estimada, reposicionada de 22/04 para a quinta equivalente deste semestre. Confirme com o professor.",
      fonte: "Cronograma de temas do professor, com datas do 1º semestre de 2026, reposicionado para os dias de aula deste semestre."
    },
    {
      data: "2026-10-22", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XXXI",
      descricao: "Resumo manuscrito da Lição XXXI (“escolas de interpretação”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever o resumo à mão, você mesmo, e enviar a digitalização pelo Moodle."
    },
    {
      data: "2026-10-23", hora: null, disciplina: "CTS", tipo: "AULA",
      titulo: "Oficina de análise crítica de uma aplicação de inteligência artificial",
      descricao: "Oficina prática em aula, em que a turma analisa criticamente uma aplicação de inteligência artificial. É a aula que prepara a prova prática em grupo da semana seguinte.",
      oQueFazer: "Não é avaliação, mas é a aula que monta a prova de 30/10, que vale peso 7 da NI2. Faltar aqui é chegar na prova prática sem o método. Vá e anote o roteiro da análise.",
      fonte: "Plano de Ensino da disciplina (arquivo 1017334), aula 12 do cronograma."
    },
    {
      data: "2026-10-29", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Barroso — Neoconstitucionalismo",
      descricao: "Resumo manuscrito do texto de BARROSO, Luiz Roberto, sobre neoconstitucionalismo. É o único item do cronograma que não sai de livro: o texto é postado no Moodle.",
      oQueFazer: "Baixar o texto na sala de TGD no Moodle, ler, escrever o resumo à mão e enviar a digitalização pelo Moodle."
    },

    /* ---------------- NOVEMBRO DE 2026 ---------------- */
    {
      data: "2026-10-29", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO", confirmar: true,
      titulo: "Apresentação 6 — Direito no Império",
      descricao: "Apresentação em grupo de 10 a 15 minutos. Material: “Brasil Império — História do Direito” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 128-143.",
      oQueFazer: "Data estimada, reposicionada de 29/04 para a quinta equivalente deste semestre. Confirme com o professor.",
      fonte: "Cronograma de temas do professor, com datas do 1º semestre de 2026, reposicionado para os dias de aula deste semestre."
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
      oQueFazer: "Ainda não há instrução divulgada sobre formato e conteúdo. Vale cobrar isso da coordenação com antecedência — veja o bloco de pontos a confirmar no fim da página."
    },
    {
      data: "2026-11-04", hora: null, disciplina: "Prát. Ext.", tipo: "PROVA",
      titulo: "Prova integrada",
      descricao: "Mesma Prova Integrada do dia, registrada também no cronograma da Prática Extensionista.",
      oQueFazer: "Aparece duas vezes porque está marcada nas duas disciplinas. É um compromisso só."
    },
    {
      data: "2026-11-05", hora: null, disciplina: "Hist. Dir.", tipo: "APRESENTACAO", confirmar: true,
      titulo: "Apresentação 7 — Direito na República",
      descricao: "Última apresentação em grupo, de 10 a 15 minutos. Material: “A Construção da República no Brasil (1889-1943)” (slides no Moodle). Bibliografia: BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 144-172.",
      oQueFazer: "Data estimada, reposicionada de 06/05 para a quinta equivalente deste semestre. Atenção: são 7 temas para 6 apresentações — este pode ser o tema absorvido por outro grupo ou apresentado pelo próprio professor. Confirme com ele.",
      fonte: "Cronograma de temas do professor, com datas do 1º semestre de 2026, reposicionado para os dias de aula deste semestre."
    },
    {
      data: "2026-11-05", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XLI",
      descricao: "Resumo manuscrito da Lição XLI (“A teoria da justiça”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. É o último manuscrito do cronograma: depois dele só vem a prova A2."
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
      oQueFazer: "Cuidado: os dois fichamentos de Economia Política vencem hoje mesmo, às 23h59. Ser feriado e domingo não adia o prazo do Moodle."
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
      descricao: "Fichamento do livro do seminário, entregue pelo Moodle até 23h59.",
      oQueFazer: "São dois fichamentos diferentes no mesmo prazo, este e o da Marilena Chauí. Use o mesmo modelo postado na sala."
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
      data: "2026-11-30", hora: null, disciplina: "Prát. Ext.", tipo: "PROVA",
      titulo: "Período de prova substitutiva",
      descricao: "Início do período de prova substitutiva da Prática Extensionista.",
      oQueFazer: "Só faz quem perdeu alguma avaliação. Confirme com a secretaria se precisa solicitar."
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
      data: "2026-12-14", hora: null, disciplina: "Geral", tipo: "FERIADO",
      titulo: "Aniversário de Campinas (feriado municipal)",
      descricao: "Feriado municipal de Campinas. Não há aula."
    }
  ],

  pendencias: [
    {
      titulo: "Economia Política — Avaliação NI2-B, marcada aqui em 25/11",
      texto: "O “18/25 nov” que aparece no plano de aulas não é erro: o professor ainda não fixou o dia e a avaliação cai em algum ponto entre 18 e 25 de novembro. É por isso que a página da disciplina no Moodle repete “Avaliação NI2-B” nas duas semanas. Deixamos 25/11 porque é a data lançada no calendário, mas o ideal é estar pronto já em 18/11 e ficar atento ao anúncio do professor. Conferido de novo no Moodle em 12/08/2026: continua em 25/11, sem alteração."
    },
    {
      titulo: "Prática Extensionista — atenção ao olhar o plano de aula",
      texto: "O quadro “Data da Avaliação” do plano traz duas datas para cada avaliação, porque o mesmo plano atende as turmas 1F e 1P. As datas da nossa turma, a 1P, são 09/09, 23/09, 09/11 e 23/11, que são as que estão neste calendário. As outras (10/09, 24/09, 05/11 e 19/11) são da turma 1F e não valem para nós. Não confundir na hora de conferir."
    },
    {
      titulo: "Introdução ao Direito Privado — Trabalhos N1 e N2",
      texto: "As duas tarefas continuam abertas na sala do Moodle com prazos de 08/04 e 26/05 de 2026, anteriores a este semestre, provavelmente herdados da configuração antiga da sala. Os enunciados tratam de direitos morais de autor e do domicílio da pessoa natural. Confirmar com o professor se valem para 2026/2 e com que prazo. Por não terem data válida para este semestre, não entraram na lista acima."
    },
    {
      titulo: "TGD — não existe onde enviar os manuscritos",
      texto: "O plano de aula da disciplina é explícito: a nota se compõe de prova, seminário e “a entrega realizada no moodle de digitalização de MANUSCRITO pelo(a) próprio(a) aluno(a), conforme cronograma”. Ou seja, o resumo é escrito à mão pelo aluno e a digitalização é enviada pelo Moodle. Só que a sala de TGD tem uma seção chamada “ENTREGAS DOS MANUSCRITOS PARA AVALIAÇÃO” que está completamente vazia, sem nenhuma tarefa aberta, e o fórum de avisos não tem nenhuma publicação. Conferido em 12/08/2026. O primeiro manuscrito é 20/08, então vale cobrar do professor a abertura da entrega antes disso, e confirmar se aceita foto ou só PDF."
    },
    {
      titulo: "Duas disciplinas ainda não têm nenhuma data publicada",
      texto: "A turma tem nove disciplinas no Moodle. Ciência Política publicou seu plano de ensino em 14/08/2026 e Ciência, Tecnologia e Sociedade no Direito publicou o dela em 17/08/2026 — as duas já entraram no calendário com o cronograma completo do semestre. História do Direito tem a atividade de 25/09, anotada em aula. Sobram Ética e Cidadania e Introdução ao Direito Privado, que continuam sem nenhuma data válida para 2026/2: na sala de Ética e Cidadania não há nem plano de ensino. Vale cobrar as datas de avaliação dessas duas antes que o semestre avance."
    },
    {
      titulo: "Economia Política — os grupos mudaram, confira em qual você está",
      texto: "As sete duplas fechadas em 14/08 viraram cinco duplas e dois trios. O David entrou no grupo 2, de Capitalismo e Pulsão de Morte, e a Melissa entrou no grupo 4, de Fascismo e Liberalismo. Quem está nesses dois grupos tem um integrante a mais do que tinha no combinado original — vale conferir a aba Grupos de Trabalho antes de dividir as tarefas da leitura."
    },
    {
      titulo: "História do Direito — as 7 datas de apresentação são estimativa, não anúncio",
      texto: "O cronograma de temas do professor é o mesmo do 1º semestre de 2026 e traz as datas 04/03, 11/03, 18/03, 15/04, 22/04, 29/04 e 06/05 — todas quartas-feiras, porque naquele semestre a disciplina era às quartas. Neste semestre História do Direito é às quintas, das 21h10 às 22h50. As datas foram reposicionadas para as quintas equivalentes, mantendo exatamente o mesmo espaçamento entre as aulas do cronograma original: três semanas seguidas, um intervalo de quatro semanas e depois quatro semanas seguidas. O resultado é 03/09, 10/09, 17/09, 15/10, 22/10, 29/10 e 05/11, todas marcadas como data a confirmar. O intervalo cai justamente sobre o Hackathon de 08/10, o que reforça a estimativa, mas nada disso foi anunciado pelo professor. Confirme as datas com ele antes de o representante enviar a composição dos grupos."
    },
    {
      titulo: "História do Direito — a atividade de 25/09 cai numa sexta, e a aula é quinta",
      texto: "A atividade avaliativa que vale 40% da nota está anotada para 25 de setembro, mas 25/09/2026 é uma sexta-feira, e História do Direito acontece às quintas, das 21h10 às 22h50, conforme o Quadro de Horário do Portal do Aluno. Ou a data correta é 24/09, ou a atividade não é feita em aula, ou a anotação trocou o dia. A data foi mantida como está porque foi assim que veio da anotação de aula, mas vale confirmar com o professor antes de contar com ela."
    },
    {
      titulo: "História do Direito — os 7 grupos estão formados e precisam ser enviados ao professor",
      texto: "A dúvida antiga era se um dos sete temas ficaria sem grupo, porque as anotações de aula falavam em seis apresentações. Resolvido: são sete grupos, um para cada tema, seis duplas e um trio, já publicados na aba Grupos de Trabalho. Falta o passo seguinte, que é do representante: enviar ao professor a composição completa, em ordem cronológica das aulas. Lembre que as datas das apresentações continuam sendo estimativa, e não anúncio do professor."
    },
    {
      titulo: "História do Direito — falta a data da prova objetiva (60% da nota)",
      texto: "A atividade de 25/09 vale 40% da nota. Os outros 60% vêm de uma prova de questões objetivas que ainda não tem data divulgada. Assim que sair, atualizar o calendário. Lembrando que, nesta disciplina, todas as notas são lançadas apenas em N2, ainda que os trabalhos sejam feitos antes."
    },
    {
      titulo: "História do Direito — o plano publicado é do 1º semestre",
      texto: "O arquivo chamado “Plano de Ensino Atualizado” na sala de História do Direito, apesar do nome do arquivo dizer 2º semestre de 2026, traz um cronograma que vai de 11/02/2026 a 03/06/2026 e datas de avaliação em 23/03, 01/04, 20/05 e 27/05 — tudo do primeiro semestre. A “Ficha de Avaliação” postada na mesma sala também se chama “Ficha Avaliação Seminário 1S 2026”. A disciplina tem prova individual, fichamento de cada texto e seminário, mas nenhuma data válida para 2026/2. Precisa ser cobrado do professor."
    },
    {
      titulo: "Prova Integrada — o card do Portal continua sem informação",
      texto: "A prova está marcada para 04/11 em Economia Política e em Prática Extensionista. No mural do Portal do Aluno há um cartão “Prova Integrada” com botão “Acessar”, mas ele não traz data, disciplina nem instrução. Conferido de novo em 12/08/2026: segue igual, sem nenhuma informação. Como não dá para saber se o botão apenas informa ou se abre a avaliação, vale perguntar à coordenação a que ele se refere antes de clicar."
    },
    {
      titulo: "As semanas institucionais: três cronogramas oficiais discordam",
      texto: "Não dá para conciliar as fontes. O cronograma da Prática Extensionista situa a Semana Jurídica em 24 e 26 de agosto. O de Teoria Geral do Direito situa a Semana Jurídica em 24 de agosto e o Encontro Internacional de Direitos Humanos em 27 de agosto. O de Ciência Política, publicado em 14/08/2026, situa a Semana Jurídica entre 27 e 28 de agosto e a Semana Internacional de Direitos Humanos em 8 e 9 de outubro. O de Ciência, Tecnologia e Sociedade no Direito, publicado em 17/08/2026, repete exatamente essas duas últimas datas — 28 de agosto e 9 de outubro. Isso dá duas fontes independentes para a leitura “fim de agosto e começo de outubro”, mas note que as duas são do mesmo professor, o Renan Alencar, então pode ser uma fonte só contada duas vezes. Todas as datas foram mantidas no calendário, cada uma na sua disciplina, porque continua não havendo como saber qual está certa. Perguntar à coordenação do curso qual é o calendário institucional correto — isso afeta cinco disciplinas ao mesmo tempo."
    },
    {
      titulo: "Ciência Política — as datas dos três fichamentos são dedução, não anúncio",
      texto: "O professor Renan Alencar escreveu, no arquivo de aula, que os fichamentos são individuais e entregues “na semana seguinte”. Ele deu a regra, mas não escreveu os dias. Por isso os fichamentos 1, 2 e 3 entraram no calendário em 21/08, 11/09 e 18/09, aplicando a regra às aulas em que cada texto foi passado, e ficaram marcados como data a confirmar. Perguntar a ele, na aula de 21/08, se a entrega é naquele dia e em que formato — a mesma dúvida vale para os outros dois."
    },
    {
      titulo: "Ciência Política — por que vale sempre a segunda data do par",
      texto: "O cronograma da disciplina traz as datas em par, no formato “17 e 18/09”. Isso não é um intervalo: são as duas turmas do professor Renan Alencar, uma às quintas e outra às sextas. A nossa turma, 201814526.000.01P, tem Ciência Política às sextas-feiras, das 20h10 às 21h00 — confirmado na grade horária do Portal do Aluno, tela Plano de Aula, filtrada em 14/08/2026, uma sexta-feira. Por isso, de cada par, este calendário usa sempre a segunda data."
    }
  ]
};

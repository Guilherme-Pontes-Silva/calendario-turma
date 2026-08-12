/* ===================================================================
   DADOS DO CALENDÁRIO DA TURMA
   -------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser trocado quando o calendário
   mudar. O index.html não precisa ser tocado.

   Campos de cada evento:
     data       "AAAA-MM-DD"  (obrigatório)
     hora       "HH:MM" ou null  — null = dia todo, sem hora marcada
     disciplina "TGD" | "Econ. Pol." | "Prát. Ext." | "Antrop. Jur." | "Geral"
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
  atualizadoEm: "2026-08-12T21:00:00-03:00",
  fonte: "calendário do Moodle, salas das disciplinas, enunciados das tarefas e cronogramas dos professores, mais o mural do Portal do Aluno",
  fusoHorario: "-03:00",

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
      data: "2026-09-10", hora: "23:59", disciplina: "TGD", tipo: "TAREFA",
      titulo: "A1 — Arquivo da apresentação do seminário",
      descricao: "Envio, pelo Moodle, do arquivo que o grupo vai usar na apresentação em sala. A tarefa abriu em 03/08 e vence em 10/09 às 23h59.",
      oQueFazer: "Regras do enunciado: o arquivo tem de estar em PDF; precisa conter o nome completo de todos os integrantes do grupo; deve ser postado no mínimo 1 dia antes da apresentação em sala; e basta 1 integrante postar pelo grupo inteiro."
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
      data: "2026-10-22", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XXXI",
      descricao: "Resumo manuscrito da Lição XXXI (“escolas de interpretação”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever o resumo à mão, você mesmo, e enviar a digitalização pelo Moodle."
    },
    {
      data: "2026-10-29", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Barroso — Neoconstitucionalismo",
      descricao: "Resumo manuscrito do texto de BARROSO, Luiz Roberto, sobre neoconstitucionalismo. É o único item do cronograma que não sai de livro: o texto é postado no Moodle.",
      oQueFazer: "Baixar o texto na sala de TGD no Moodle, ler, escrever o resumo à mão e enviar a digitalização pelo Moodle."
    },

    /* ---------------- NOVEMBRO DE 2026 ---------------- */
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
      data: "2026-11-05", hora: null, disciplina: "TGD", tipo: "MANUSCRITO",
      titulo: "Betioli — Lição XLI",
      descricao: "Resumo manuscrito da Lição XLI (“A teoria da justiça”) do Betioli, Introdução ao Direito, 16ª ed., Saraiva, 2023.",
      oQueFazer: "Escrever à mão e enviar a digitalização pelo Moodle. É o último manuscrito do cronograma: depois dele só vem a prova A2."
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
      titulo: "Cinco disciplinas não têm nenhuma data publicada",
      texto: "A turma tem nove disciplinas no Moodle, mas só quatro alimentam o calendário: Teoria Geral do Direito, Economia Política, Prática Extensionista e Antropologia Jurídica. Não há nenhuma data lançada para Ciência Política, Ciência, Tecnologia e Sociedade no Direito, Ética e Cidadania, História do Direito e Introdução ao Direito Privado. Nas três primeiras a sala está vazia, sem nem plano de ensino. Vale cobrar as datas de avaliação dessas disciplinas antes que o semestre avance."
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
      titulo: "Encontro de 17/08 no Ateliê — veio de aviso em aula",
      texto: "O encontro de 17/08 às 18h30, com deslocamento para a sala Ateliê no 2º subsolo, foi avisado pela professora Gisele Meirelles Fonseca em aula no dia 11/08/2026. Ele não consta no Moodle nem no Portal do Aluno, então não há fonte oficial para conferir. Se a professora mudar o combinado, este item precisa ser corrigido à mão."
    }
  ]
};

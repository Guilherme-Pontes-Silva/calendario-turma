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

  /* ---------------- 6. CORPO DOCENTE ----------------
     Só e-mail institucional, que é o canal oficial e público de
     atendimento ao aluno. Telefone pessoal não entra aqui, por
     segurança dos professores — decisão de 14/08/2026.
     Quem está sem e-mail é porque o endereço não foi divulgado;
     não inventar padrão institucional. */
  professores: [
    { sigla:"TGD",         disciplina:"Teoria Geral do Direito",                       nome:"Prof. Dr. Luiz Eduardo de Almeida",        email:"luiz.almeida@mackenzie.br" },
    { sigla:"Prát. Ext.",  disciplina:"Prática Extensionista — Conhecendo e Divulgando", nome:"Profa. Dra. Gisele Meirelles Fonseca",    email:"gisele.fonseca@mackenzie.br" },
    { sigla:"IDP",         disciplina:"Introdução ao Direito Privado, Pessoas e Bens",  nome:"Prof. Dr. Marco Antonio dos Anjos",       email:"marco.anjos@mackenzie.br" },
    { sigla:"Hist. Dir.",  disciplina:"História do Direito",                           nome:"Prof. Dr. Alexandre Aparecido de Lima",    email:"7003531@mackenzie.br" },
    { sigla:"Ética",       disciplina:"Ética e Cidadania",                             nome:"Prof. Ms. Ailton Gonçalves Dias Filho",    email:"ailton.filho@mackenzie.br" },
    { sigla:"Econ. Pol.",  disciplina:"Economia Política",                             nome:"Prof. Dr. Luiz Carlos Lemos Junior",       email:"luiz.lemos@mackenzie.br" },
    { sigla:"CTS",         disciplina:"Ciência, Tecnologia e Sociedade no Direito",     nome:"Prof. Ms. Renan Thiago Alencar Moreira",   email:"" },
    { sigla:"Ciên. Pol.",  disciplina:"Ciência Política",                              nome:"Prof. Ms. Renan Thiago Alencar Moreira",   email:"" },
    { sigla:"Antrop. Jur.",disciplina:"Antropologia Jurídica",                         nome:"Prof. Dr. Ricardo Ferreira Nunes",         email:"ricardo.nunes@mackenzie.br" }
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
      resumo:"A1 e A2 seguem a mesma composição: Prova dissertativa e individual (peso 7) + Seminário em grupo (peso 2) + Manuscrito (peso 1), cada item pontuado de 0 a 10. O seminário tem 4 temas — norma jurídica; Julgamento de Nuremberg; Direito natural e Direito positivo; tipos de norma jurídica —, dura de 10 a 15 minutos por grupo e exige apresentação oral mais o arquivo de slides no Moodle; a nota é do grupo, não individual, e os grupos podem ser trocados durante o semestre, desde que o professor seja avisado antes.",
      faltaConfirmar:"A nota mínima para aprovação e a fórmula que fecha a média final do semestre.",
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
    {
      sigla:"IDP", disciplina:"Introdução ao Direito Privado, Pessoas e Bens", confirmado:false,
      resumo:"Cada bimestre tem dois instrumentos, uma prova e um trabalho em grupo, e cada um deles cobre 100% do conteúdo do bimestre. N1: trabalho postado no Moodle até 20/09 e prova em 23/09, ambos de peso 4. N2: prova em 11/11 e trabalho postado até 15/11, ambos de peso 6. Como os dois instrumentos de um mesmo bimestre têm peso igual, dentro do bimestre a divisão é meio a meio; e como a N1 pesa 4 contra 6 da N2, o segundo bimestre vale mais no fechamento.",
      faltaConfirmar:"Se os pesos 4 e 6 são mesmo do bimestre inteiro, e não de cada instrumento separadamente — o quadro marca “100%” nos dois instrumentos do mesmo bimestre, o que não fecha e precisa ser esclarecido com o professor. Falta também a nota mínima para aprovação e o tema do trabalho em grupo.",
      fonte:"Quadro de avaliações da disciplina, informado pelo representante da turma em 18/08/2026."
    },
    {
      sigla:"Hist. Dir.", disciplina:"História do Direito", confirmado:false,
      resumo:"N1 tem dois instrumentos: a atividade em grupo de 24/09, que vale 40%, e a prova individual de 01/10, que vale 60%. N2 tem quatro: a atividade em grupo de 12/11, com 20%; a prova de 19/11, com 40%; a apresentação do seu grupo, com 20%, no dia em que o grupo apresenta; e as fichas entregues em 26/11, com 20%. Atenção ao lançamento: ainda que os trabalhos sejam feitos antes, todas as notas da disciplina são lançadas apenas em N2.",
      faltaConfirmar:"A nota mínima para aprovação e a fórmula que combina N1 e N2 na média final.",
      fonte:"Datas: cronograma publicado pelo professor na sala do Moodle em 20/08/2026. Pesos: informados pelo professor e repassados pelo representante da turma em 21/08/2026."
    },
    { sigla:"Ética",       disciplina:"Ética e Cidadania", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda.", fonte:"" },
    {
      sigla:"CTS", disciplina:"Ciência, Tecnologia e Sociedade no Direito", confirmado:false,
      resumo:"NI1: prova escrita individual (peso 7), aplicada em 18/09, com consulta permitida a uma folha manuscrita, mais os seminários em grupo (peso 3), apresentados em 11/09. NI2: prova prática feita em grupo (peso 7), em 30/10, mais os seminários em grupo (peso 3), em 06/11. As duas etapas fecham 10 pontos cada, sem componente indefinido.",
      faltaConfirmar:"A nota mínima para aprovação e a fórmula que combina NI1 e NI2 na média final do semestre.",
      fonte:"Plano de Ensino da disciplina (arquivo 1017334), cronograma e critérios de avaliação, publicado na sala do Moodle em 17/08/2026. Confirma e detalha o que o representante da turma já tinha anotado em aula em 12/08/2026."
    },
    {
      sigla:"Ciên. Pol.", disciplina:"Ciência Política", confirmado:false,
      resumo:"NI1: prova escrita individual (peso 7), aplicada em 18/09, com consulta permitida a uma folha manuscrita. NI2: prova escrita individual (peso 7), em 06/11, mesmo formato, mais os seminários em grupo (peso 3), em 30/10. Os fichamentos são individuais e manuscritos, entregues na semana seguinte à aula do texto.",
      faltaConfirmar:"O que compõe os 3 pontos restantes da NI1 — provavelmente os fichamentos, mas o plano não diz. Também falta a nota mínima para aprovação e a fórmula da média final.",
      fonte:"Arquivos “Plano de Ensino — Ciência Política.pdf” e “Aula 1 — Plano de Aulas, Avaliações e Conceitos Fundamentais.pdf”, publicados em 14/08/2026."
    }
  ],

  /* ---------------- 7. GUIA DE FICHAMENTO E TRABALHOS ----------------
     Nenhuma exigência específica de professor foi confirmada ainda
     (formatação, número de páginas, norma, estrutura). Preencher só
     depois de ler o enunciado oficial ou confirmar com o professor —
     nunca por "o que geralmente se pede". */
  fichamento: [
    { sigla:"TGD", blocos:[
      { titulo:"Manuscrito", texto:"O trabalho de leitura da disciplina não é um fichamento tradicional. O professor adotou um sistema diverso do dos demais docentes e pediu algo mais simples e de formato livre: um manuscrito, escrito à mão pelo próprio aluno. O suporte pode ser folha sulfite, ficha de fichamento, papel almaço ou equivalente, e a organização pode ser em tópicos, em texto corrido, em mapa mental ou em qualquer estrutura que o aluno já utiliza para estudar, pois o objetivo é que o material sirva efetivamente ao estudo de quem o produz. A finalidade central é levar o aluno a ler a obra e a registrar suas anotações. Ao final, o professor recomenda, sem exigir, que o aluno acrescente sua opinião crítica sobre o texto lido. Esse ponto não será cobrado nem avaliado, mas é um conselho valioso: formular juízo próprio sobre aquilo que se lê é exercício mental que desenvolve a capacidade de análise, a clareza de raciocínio e a formação de posicionamento fundamentado, qualidades que distinguem o bom profissional no futuro. O manuscrito consta com peso 1 na composição da nota." },
      { titulo:"Seminário — N1", texto:"O seminário tem peso 2 e é avaliado a partir de dois itens, ambos de cumprimento obrigatório: a apresentação oral em sala, na data designada, e a entrega do arquivo da apresentação, ou seja, dos slides, no Moodle. Cada grupo estudará um tema e o apresentará à turma em exposição de 10 a 15 minutos, podendo utilizar materiais além da bibliografia indicada e procurar o professor para obter sugestões de referências. A nota é atribuída ao grupo, e não individualmente, de modo que a divisão de tarefas e o comprometimento de cada integrante repercutem sobre todos." },
      { titulo:"Seminário — temas e datas", texto:"São quatro temas, distribuídos entre quatro grupos. Norma Jurídica, de Norberto Bobbio, em 31 de agosto. Julgamento de Nuremberg, em 3 de setembro. Direito Natural e Direito Positivo, também em 3 de setembro, na mesma aula. Tipos de Normas Jurídicas — norma legal, norma jurisdicional, norma negocial e norma costumeira —, em 10 de setembro. Cada grupo entrega o arquivo da sua apresentação no mesmo dia do seu seminário, e o prazo final da tarefa no Moodle, válido para todos, é 10 de setembro às 23h59. A tarefa abriu na segunda-feira, 3 de agosto de 2026, às 00h00." },
      { titulo:"Seminário — formação dos grupos", texto:"A divisão deve ser simétrica e balanceada, a exemplo dos demais grupos, de modo a evitar exclusão, com o mínimo recomendado de três alunos por grupo. Não se admite aluno sem grupo nem grupos excessivamente desbalanceados. A formação não é definitiva: é possível trocar de grupo ao longo do semestre, desde que o professor seja previamente informado, a quem também deve ser comunicada qualquer dificuldade." },
      { titulo:"Seminário — regras do arquivo", texto:"O arquivo deve estar em PDF e conter o nome completo de todos os integrantes do grupo, além do título do tema. Precisa ser postado no Moodle com no mínimo um dia de antecedência em relação à apresentação em sala. Basta um integrante postar pelo grupo inteiro." },
      { titulo:"Prova", texto:"A prova tem peso 7 e é inteiramente dissertativa e individual, o que exige leitura prévia consistente e capacidade de desenvolver o raciocínio por escrito, sem apoio de alternativas ou de consulta ao grupo." }
    ], fonte:"Orientações do professor em aula, 12 de agosto de 2026." },

    { sigla:"Prát. Ext.",   blocos:[] },
    { sigla:"IDP",          blocos:[] },

    { sigla:"Hist. Dir.", blocos:[
      { titulo:"Apresentações em grupo", texto:"Haverá apresentação em grupo semanalmente, com duração de 10 a 15 minutos. Cada aula corresponde a um tema, e cada tema tem um texto de base e bibliografia própria, conforme o cronograma disponibilizado pelo professor. Há sete temas e seis apresentações previstas. Os temas permanecem os mesmos e a adequação se dá na organização dos grupos: ou os próprios grupos absorvem o tema excedente, ou o professor assume o tema remanescente e o apresenta à turma, servindo de modelo de como a exposição deve ser feita. Cada grupo terá de dois a três alunos, admitindo-se grupos maiores, exigindo-se apenas equilíbrio entre eles, sem grupos desproporcionais. Definida a composição, o representante de turma deve enviar mensagem ao professor com todos os grupos, organizados na ordem cronológica das aulas em que apresentarão." },
      { titulo:"Temas, datas e bibliografia", texto:"Datas oficiais, publicadas pelo professor na sala do Moodle em 20/08/2026. Civilizações Antigas, em 20/08: ROCHA, José Manuel de S., História do Direito no Ocidente, Grupo GEN, 2015 (Minha Biblioteca), pp. 73-86. Direito na Grécia, em 03/09: “Direito na Grécia Antiga” (slides no Moodle), BAGNOLI; BARBOSA; OLIVEIRA, Introdução à História do Direito, Atlas, 2014, pp. 31-42. Direito em Roma, em 10/09: “Direito em Roma” (slides), mesma obra, pp. 44-55. Direito na Idade Média, em 17/09: “O Direito na Idade Média” (slides), mesma obra, pp. 57-76. Direito na América Espanhola e Portuguesa, em 22/10: “Direito e barbárie na conquista da América indígena” (texto em PDF e slides), mesma obra e texto disponibilizado no Moodle. Revolução Francesa e Direito Moderno, em 29/10: “A Revolução Francesa e a Evolução do Estado Liberal ao Estado Democrático de Direito” (slides), GRIVOT, Débora C. H. et al., História do Direito, Grupo A, 2017 (Minha Biblioteca), pp. 127-150. Direito no Império, em 05/11: “Brasil Império — História do Direito” (slides), BAGNOLI et al., pp. 128-143. O tema “Direito na República” saiu do cronograma e não será apresentado." },
      { titulo:"Como a apresentação é avaliada", texto:"A avaliação é feita pela ficha disponibilizada no Moodle, a “Ficha Avaliação Seminário”, que distribui dez pontos em oito critérios. Valem 1,00 ponto cada: usar o texto indicado no plano de ensino e pesquisar outros materiais sobre o assunto; incluir no arquivo a identificação da turma, o nome de todos os participantes e o título do tema; respeitar o tempo de 20 a 25 minutos; usar linguagem formal e adequada ao assunto; a qualidade e a habilidade nas respostas às perguntas feitas ao grupo; e formular três perguntas sobre o seminário à classe. Valem 2,00 pontos cada: a organização e o planejamento da apresentação; e apresentar o tema de maneira clara e objetiva. A soma dos oito critérios é o subtotal de 10,00 pontos. Há ainda uma penalidade de 4,00 pontos, descontada do subtotal, se o grupo se apoiar mais na leitura do que na oralidade durante a apresentação." },
      { titulo:"Atenção ao tempo", texto:"A ficha de avaliação pontua o respeito ao intervalo de 20 a 25 minutos, enquanto a orientação dada em sala fala em apresentação de 10 a 15 minutos. São faixas incompatíveis, e a diferença vale 1,00 ponto na nota. Confirme com o professor qual das duas vale antes de montar a apresentação." },
      { titulo:"Atividades em sala", texto:"Além das apresentações, haverá atividades desenvolvidas em grupo durante a própria aula, em grupos de 2 a 3 alunos. Nessas atividades, o professor dará as orientações no início, o texto será produzido em sala e a entrega ocorrerá ao final do encontro. É possível aproveitar os mesmos grupos das apresentações, mas a composição não é fixa e pode ser alterada." },
      { titulo:"Fichamentos", texto:"Os fichamentos são registros de leitura elaborados em ficha, com uso de frente e verso, manuscritos e seguindo o modelo indicado pelo professor. São sete textos ao todo e cada texto exige uma ficha própria, com entrega presencial. A ficha pode ser colorida e o tamanho fica a critério do aluno, embora o professor recomende a de 10 cm, com letra pequena, de modo que todo o conteúdo caiba no espaço disponível. Exige-se apenas que a escrita seja à mão, em caneta azul ou preta." },
      { titulo:"Avaliação", texto:"A disciplina tem duas notas, cada uma com composição própria. A N1 é formada pela atividade em grupo de 24 de setembro, que vale 40%, e pela prova individual de 1º de outubro, que vale 60%. A N2 se divide em quatro partes: a prova de 19 de novembro, com 40%; a atividade em grupo de 12 de novembro, com 20%; a apresentação do seu grupo, com 20%, contada no dia em que o grupo apresenta; e as fichas dos textos, entregues em 26 de novembro, com os 20% restantes. Repare que as fichas só viram nota na entrega de 26 de novembro, ainda que sejam produzidas ao longo do semestre. Ainda que os trabalhos sejam realizados antes, todas as notas são lançadas apenas na N2." }
    ], fonte:"Orientações do professor em aula, 12 de agosto de 2026." },

    { sigla:"Ética",        blocos:[] },
    { sigla:"Econ. Pol.",   blocos:[] },

    { sigla:"CTS", blocos:[
      { titulo:"Avaliação", texto:"A disciplina é avaliada em dois momentos, cada um composto por dois elementos e cada um fechando dez pontos. A NI1 é formada pela prova escrita individual, com peso 7, em que se permite consulta a uma folha de anotações manuscrita, utilizável em frente e verso, somada ao seminário em grupo, com peso 3. A NI2 muda o formato da prova: em vez de escrita e individual, ela é prática e feita em grupo, mantendo o peso 7, e também se soma a um seminário em grupo de peso 3." },
      { titulo:"Datas", texto:"Os seminários da NI1 são apresentados em 11 de setembro e a prova escrita individual é aplicada em 18 de setembro, com vista de prova em 25 de setembro. Na segunda etapa, a oficina de análise crítica de uma aplicação de inteligência artificial acontece em 23 de outubro e prepara a prova prática em grupo, aplicada em 30 de outubro; os seminários da NI2 vêm em 6 de novembro e a vista da prova em 13 de novembro. As substitutivas ficam em 4 de dezembro e as finais em 11 de dezembro. Não há aula em 28 de agosto, por causa da Semana Jurídica, nem em 9 de outubro, por causa da Semana Internacional de Direitos Humanos." },
      { titulo:"A oficina de 23/10 não é avaliação, mas conta", texto:"A aula de 23 de outubro é uma oficina prática de análise crítica de uma aplicação de inteligência artificial. Ela não vale nota por si, mas é o ensaio direto da prova prática em grupo da semana seguinte, que vale peso 7 da NI2. Quem falta chega na prova sem o método de análise que será cobrado." }
    ], fonte:"Plano de Ensino da disciplina (arquivo 1017334), publicado na sala do Moodle em 17 de agosto de 2026, e orientações do professor em aula, 12 de agosto de 2026." },

    { sigla:"Ciên. Pol.", blocos:[
      { titulo:"Fichamento", texto:"O fichamento da disciplina é manuscrito, ou seja, deve ser escrito à mão pelo próprio aluno. Tanto o suporte quanto a forma de elaboração ficam a critério de cada um, podendo ser utilizada ficha, folha sulfite, papel almaço ou material equivalente, com organização em tópicos, em texto corrido ou em outra estrutura de preferência do aluno. Não há, portanto, modelo obrigatório de apresentação. O foco da avaliação está no conteúdo: o que se espera é o registro fiel e compreensivo da leitura, com identificação das ideias centrais da obra e domínio efetivo do material estudado, e não o padrão visual do trabalho." },
      { titulo:"Entrega", texto:"Todos os fichamentos são entregues presencialmente ao professor, em mãos, com periodicidade semanal. Não há envio pelo Moodle: quem falta na aula da entrega precisa combinar a reposição diretamente com ele. A regra é que o fichamento do texto trabalhado em uma aula seja entregue na aula da semana seguinte." }
    ], fonte:"Orientações do professor em aula, 12 de agosto de 2026." },

    { sigla:"Antrop. Jur.", blocos:[] }
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
    { sigla:"Ciên. Pol.",
      a1:{ nome:"NI1", componentes:[
        { nome:"Prova escrita NI1", peso:70 }, { nome:"Restante da NI1 (composição não confirmada)", peso:30 }
      ], pesosConfirmados:false },
      a2:{ nome:"NI2", componentes:[
        { nome:"Prova escrita NI2", peso:70 }, { nome:"Seminários em grupo", peso:30 }
      ], pesosConfirmados:true }
    },
    { sigla:"Hist. Dir.",
      a1:{ nome:"N1", componentes:[
        { nome:"Atividade em grupo (24/09)", peso:40 },
        { nome:"Prova individual (01/10)", peso:60 }
      ], pesosConfirmados:true },
      a2:{ nome:"N2", componentes:[
        { nome:"Prova (19/11)", peso:40 },
        { nome:"Atividade em grupo (12/11)", peso:20 },
        { nome:"Apresentação do grupo", peso:20 },
        { nome:"Fichas (26/11)", peso:20 }
      ], pesosConfirmados:true }
    },
    { sigla:"Prát. Ext.",    a1:null, a2:null },
    { sigla:"Antrop. Jur.",  a1:null, a2:null },
    { sigla:"IDP",
      a1:{ nome:"N1", componentes:[
        { nome:"1ª Prova (23/09)", peso:50 }, { nome:"Trabalho em grupo (20/09)", peso:50 }
      ], pesosConfirmados:false },
      a2:{ nome:"N2", componentes:[
        { nome:"2ª Prova (11/11)", peso:50 }, { nome:"Trabalho em grupo (15/11)", peso:50 }
      ], pesosConfirmados:false }
    },
    { sigla:"Ética",         a1:null, a2:null },
    { sigla:"CTS",
      a1:{ nome:"NI1", componentes:[
        { nome:"Prova escrita individual NI1", peso:70 }, { nome:"Seminários em grupo", peso:30 }
      ], pesosConfirmados:true },
      a2:{ nome:"NI2", componentes:[
        { nome:"Prova prática em grupo NI2", peso:70 }, { nome:"Seminários em grupo", peso:30 }
      ], pesosConfirmados:true }
    }
  ],

  /* ---------------- 8. GRUPOS DE TRABALHO ----------------
     Estrutura por período (N1 / N2), porque o aluno agora escolhe
     a etapa antes de ver o grupo. Confirmado pelo Guilherme em
     14/08/2026: os 7 grupos de Economia Política são de N1. Em
     18/08/2026 entraram o David no grupo 2 e a Melissa no grupo 4;
     em 20/08/2026 a Giulia saiu de todos os grupos, por transferência
     para o matutino, e o grupo 4 voltou a ser dupla.

     Atenção ao caso de História do Direito: os grupos ficam em n1,
     que é quando o trabalho acontece. Isso é independente do
     lançamento das notas, que nessa disciplina o professor faz todo
     em N2 — uma coisa é quando se apresenta, outra é onde a nota
     entra. Confirmado pelo Guilherme em 18/08/2026. */
  grupos: {
    "Econ. Pol.": {
      n1: [
        { grupo:"Dupla 1", integrantes:"Andressa de Souza Grana e Thiago Richard de Souza Pereira", tema:"Aporofobia, a Aversão ao Pobre: Um Desafio para a Democracia", autor:"Adela Cortina" },
        { grupo:"Trio 2", integrantes:"David Bottcher Curvello, Emilly Pereira da Silva e Ryan de Sá Santos", tema:"Capitalismo e Pulsão de Morte", autor:"Gilles Dostaler e Bernard Maris" },
        { grupo:"Dupla 3", integrantes:"Gabriele de Carvalho Fontenele e Pedro de Oliveira Mafra", tema:"O Código do Capital: Como o Direito Cria Riqueza e Desigualdade", autor:"Katharina Pistor" },
        { grupo:"Dupla 4", integrantes:"Melissa Scaff Puerta e Pamela Cristina Barreto Reis Rosa", tema:"Fascismo e Liberalismo: Afinidades Seletivas", autor:"Alvaro Bianchi" },
        { grupo:"Dupla 5", integrantes:"Guilherme Pontes da Silva e Luiza Santos Gonçalves", tema:"Parcelado: Dinâmicas de Consumo na Periferia", autor:"Kauê Lopes dos Santos" },
        { grupo:"Dupla 6", integrantes:"Heloísa Farias Barbieri e Luiza Corbetta de Souza", tema:"Os Bilionários Não Pagam Imposto de Renda e Nós Vamos Acabar Com Isso", autor:"Gabriel Zucman" },
        { grupo:"Dupla 7", integrantes:"Louise dos Reis de Sousa e Luís Henrique Oliveira Penteado Vargas", tema:"Tecno Feudalismo: O que Matou o Capitalismo", autor:"Yanis Varoufakis" },
        { grupo:"Dupla 8", integrantes:"Daniely Franco Lansoni e Yasmin Lozano", tema:"Utopia Autoritária Brasileira: Como os Militares Ameaçam a Democracia Brasileira desde o Nascimento da República até Hoje", autor:"Carlos Fico" }
      ],
      n2: []
    },
    "TGD": {
      avisoPeriodo: "Quatro grupos formados. A troca de grupo é possível durante o semestre, desde que o professor seja avisado antes.",
      n1: [
        { grupo:"Seminário 1", integrantes:"Andressa de Souza Grana, David Bottcher Curvello, Pamela Cristina Barreto Reis Rosa e Thiago Richard de Souza Pereira", tema:"Norma Jurídica", autor:"Norberto Bobbio",
          dataSeminario:"31/08 (segunda)", dataEntrega:"31/08, até 23h59" },
        { grupo:"Seminário 2", integrantes:"Emilly Pereira da Silva, Guilherme Pontes da Silva, Maria Camillie Manzani Alves, Ryan de Sá Santos e Yasmin Lozano", tema:"Julgamento de Nuremberg", autor:"",
          dataSeminario:"03/09 (quinta)", dataEntrega:"03/09, até 23h59" },
        { grupo:"Seminário 3", integrantes:"Gabriele de Carvalho Fontenele, Heloísa Farias Barbieri, Kelly Oliveira Santos, Luís Henrique Oliveira Penteado Vargas e Luiza Santos Gonçalves", tema:"Direito Natural e Direito Positivo", autor:"",
          dataSeminario:"03/09 (quinta), na mesma aula do Seminário 2", dataEntrega:"03/09, até 23h59" },
        { grupo:"Seminário 4", integrantes:"Gustavo Rebeschini Patella Silva, Louise dos Reis de Sousa, Luiza Corbetta de Souza e Pedro de Oliveira Mafra", tema:"Tipos de Normas Jurídicas: norma legal, norma jurisdicional, norma negocial e norma costumeira", autor:"",
          dataSeminario:"10/09 (quinta)", dataEntrega:"10/09, até 23h59 — prazo final da tarefa no Moodle" }
      ],
      n2: []
    },
    "Hist. Dir.": {
      avisoPeriodo: "Seis grupos, um para cada tema. As datas são oficiais: o professor publicou o cronograma na sala do Moodle em 20/08/2026, e elas deixaram de ser estimativa. O tema “Direito na República” saiu do cronograma, e o grupo que o apresentaria foi desfeito em 21/08/2026 — a realocação dos dois alunos ainda será definida. Não confunda o período do trabalho com o do lançamento: as apresentações são de N1, mas o professor lança todas as notas da disciplina em N2. O representante precisa enviar ao professor a composição dos grupos em ordem cronológica das aulas.",
      n1: [
        { grupo:"Apresentação 1", integrantes:"David Bottcher Curvello, Emilly Pereira da Silva e Pamela Cristina Barreto Reis Rosa", tema:"Direito na Grécia", autor:"BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 31-42",
          dataSeminario:"03/09 (quinta)", material:"Direito na Grécia Antiga (slides no Moodle)" },
        { grupo:"Apresentação 2", integrantes:"Guilherme Pontes da Silva e Melissa Scaff Puerta", tema:"Direito em Roma", autor:"BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 44-55",
          dataSeminario:"10/09 (quinta)", material:"Direito em Roma (slides no Moodle)" },
        { grupo:"Apresentação 3", integrantes:"Luís Henrique Oliveira Penteado Vargas e Luiza Santos Gonçalves", tema:"Direito na Idade Média", autor:"BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 57-76",
          dataSeminario:"17/09 (quinta)", material:"O Direito na Idade Média (slides no Moodle)" },
        { grupo:"Apresentação 4", integrantes:"Luiza Corbetta de Souza e Pedro de Oliveira Mafra", tema:"Direito na América Espanhola e Portuguesa", autor:"BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, e texto disponibilizado no Moodle",
          dataSeminario:"22/10 (quinta)", material:"Direito e barbárie na conquista da América indígena (texto em PDF e slides no Moodle)" },
        { grupo:"Apresentação 5", integrantes:"Louise dos Reis de Sousa e Ryan de Sá Santos", tema:"Revolução Francesa e Direito Moderno", autor:"GRIVOT, Débora C. H. et al. História do Direito. Grupo A, 2017 (Minha Biblioteca), pp. 127-150",
          dataSeminario:"29/10 (quinta)", material:"A Revolução Francesa e a Evolução do Estado Liberal ao Estado Democrático de Direito (slides no Moodle)" },
        { grupo:"Apresentação 6", integrantes:"Heloísa Farias Barbieri e Thiago Richard de Souza Pereira", tema:"Direito no Império", autor:"BAGNOLI; BARBOSA; OLIVEIRA. Introdução à História do Direito. São Paulo: Atlas, 2014, pp. 128-143",
          dataSeminario:"05/11 (quinta)", material:"Brasil Império — História do Direito (slides no Moodle)" }
      ],
      n2: []
    },
    "Prát. Ext.":   { n1:[], n2:[] },
    "Antrop. Jur.": { n1:[], n2:[] },
    "IDP":          { n1:[], n2:[] },
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

  /* ---------------- 4. FEEDBACK ---------------- */
  feedback: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdBs0uJc8jI5jXxWIH57xClaYiJjb1R7n69OEeXXI3dHCH6vw/viewform?usp=header",
    texto: "Canal exclusivo dos alunos do 1º semestre de Direito. Use para relatar erro de data, pedir atualização, apontar falhas, enviar sugestões e também para pedir apoio pedagógico ou tirar dúvidas sobre o conteúdo das disciplinas. Todas as contribuições são estritamente anônimas e seguem direto para o representante de sala. Cada envio melhora o material de toda a turma — inclusive o seu."
  },

  /* ---------------- 9. DIRETRIZES ----------------
     Os avisos de responsabilidade e de origem dos dados, que antes
     ficavam espalhados no topo e no rodapé do calendário. Reunidos
     aqui para não poluir a lista e para deixar claro que este é um
     material coletivo da turma, e não de uma pessoa só. */
  diretrizes: [
    {
      titulo: "O que é este calendário",
      texto: "Este calendário reúne, em uma única lista, tudo o que tem data marcada no semestre para a turma de Direito do 1º período noturno, campus Campinas: provas, avaliações, entregas, manuscritos, fichamentos, aulas especiais, eventos da universidade e feriados. Ele existe para que ninguém precise garimpar nove salas de Moodle, o Portal do Aluno e os planos de ensino toda semana para saber o que vem pela frente."
    },
    {
      titulo: "De onde vêm as datas",
      texto: "As datas são extraídas do calendário do Moodle, das salas das disciplinas, dos enunciados das tarefas, dos planos de ensino e cronogramas publicados pelos professores, do mural do Portal do Aluno e das anotações feitas em aula. Cada item que não vem de fonte oficial publicada traz, no próprio card, a indicação da origem da informação."
    },
    {
      titulo: "Confira sempre antes de contar com a data",
      texto: "Este é um material de apoio produzido pela turma, e não um documento oficial da universidade. Ele não substitui o Moodle nem o Portal do Aluno. Antes de contar com qualquer data para organizar seus estudos, confirme na fonte oficial da disciplina. Erros de transcrição, mudanças de última hora e ajustes anunciados apenas em sala podem não estar refletidos aqui."
    },
    {
      titulo: "Quando as fontes discordam",
      texto: "Sempre que dois cronogramas oficiais apontam datas diferentes para o mesmo compromisso, este calendário não escolhe um lado em silêncio: as duas informações são mantidas e o caso vai para o bloco “Pontos a Confirmar com o Professor”, no fim da página do calendário. O mesmo vale para datas deduzidas de uma regra do professor, e não anunciadas por ele: elas aparecem marcadas como data ainda não confirmada."
    },
    {
      titulo: "O que este calendário não contém",
      texto: "O documento é da turma e não traz nota, falta nem situação de entrega de ninguém. Nenhuma informação individual de qualquer aluno é registrada, exibida ou coletada aqui. A lista de grupos de trabalho reproduz apenas a composição já divulgada em sala para fins de organização acadêmica."
    },
    {
      titulo: "Como corrigir ou completar uma informação",
      texto: "Este material é coletivo e depende da turma para se manter correto. Se encontrar uma data errada, uma informação desatualizada ou souber de algo que ainda não está aqui, use o formulário anônimo, na aba Feedback Anônimo. Não é preciso se identificar, e toda correção é conferida na fonte oficial antes de entrar no calendário."
    }
  ]
};

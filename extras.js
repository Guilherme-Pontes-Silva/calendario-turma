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
    { sigla:"Prát. Ext.",  disciplina:"Prática Extensionista — Conhecendo e Divulgando", nome:"Profa. Gisele Meirelles Fonseca",        email:"" },
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
    { sigla:"IDP",         disciplina:"Introdução ao Direito Privado", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda.", fonte:"" },
    {
      sigla:"Hist. Dir.", disciplina:"História do Direito", confirmado:false,
      resumo:"A nota é composta por dois instrumentos: a atividade avaliativa de 25/09, que vale 40%, e uma prova de questões objetivas, que vale os 60% restantes. Atenção ao lançamento: ainda que os trabalhos sejam feitos antes, todas as notas da disciplina são lançadas apenas em N2, e não em N1.",
      faltaConfirmar:"A data da prova objetiva (60%) e a nota mínima para aprovação. O plano de ensino publicado na sala do Moodle é do 1º semestre de 2026 e não vale para este semestre.",
      fonte:"Anotado em aula pelo representante da turma, 12/08/2026."
    },
    { sigla:"Ética",       disciplina:"Ética e Cidadania", confirmado:false, resumo:"", faltaConfirmar:"Nenhuma fórmula de aprovação confirmada ainda.", fonte:"" },
    {
      sigla:"CTS", disciplina:"Ciência, Tecnologia e Sociedade no Direito", confirmado:false,
      resumo:"São dois momentos de avaliação, cada um com dois elementos. A N1 é formada por prova individual — com consulta permitida a uma folha de anotações, frente e verso — somada ao seminário. A N2 é formada por prova feita em grupo, também somada ao seminário.",
      faltaConfirmar:"Os pesos de cada elemento dentro de N1 e N2, as datas das provas e dos seminários, e a nota mínima para aprovação.",
      fonte:"Anotado em aula pelo representante da turma, 12/08/2026."
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
      { titulo:"Seminário", texto:"O seminário tem peso 2 e é avaliado a partir de dois itens, ambos de cumprimento obrigatório: a apresentação oral em sala, na data designada, e a entrega do arquivo da apresentação, ou seja, dos slides, no Moodle. O calendário das datas foi exibido pelo professor em sala. São quatro os temas: norma jurídica; julgamento de Nuremberg; direito natural e direito positivo; e tipos de norma jurídica. Cada grupo estudará um tema e o apresentará à turma em exposição de 10 a 15 minutos, podendo utilizar materiais além da bibliografia indicada e procurar o professor para obter sugestões de referências. Quanto à composição dos grupos, o número de integrantes não precisa ser rigorosamente simétrico, mas não se admite aluno sem grupo nem grupos excessivamente desbalanceados; a formação não é definitiva, sendo possível trocar de grupo ao longo do semestre, desde que o professor seja previamente informado, a quem também deve ser comunicada qualquer dificuldade. A nota é atribuída ao grupo, e não individualmente, de modo que a divisão de tarefas e o comprometimento de cada integrante repercutem sobre todos." },
      { titulo:"Prova", texto:"A prova tem peso 7 e é inteiramente dissertativa e individual, o que exige leitura prévia consistente e capacidade de desenvolver o raciocínio por escrito, sem apoio de alternativas ou de consulta ao grupo." }
    ], fonte:"Orientações do professor em aula, 12 de agosto de 2026." },

    { sigla:"Prát. Ext.",   blocos:[] },
    { sigla:"IDP",          blocos:[] },

    { sigla:"Hist. Dir.", blocos:[
      { titulo:"Apresentações em grupo", texto:"Haverá apresentação em grupo semanalmente, com duração de 10 a 15 minutos. Cada aula corresponde a um tema, e cada tema tem um texto de base e bibliografia própria, conforme o cronograma disponibilizado pelo professor. A avaliação é feita por meio de uma ficha de correção utilizada por ele, que considera, entre outros critérios, a fidelidade ao tema proposto, a qualidade dos slides, a abordagem dos pontos principais e o domínio do assunto tratado. Há sete temas e seis apresentações previstas. Os temas permanecem os mesmos e a adequação se dá na organização dos grupos: ou os próprios grupos absorvem o tema excedente, ou o professor assume o tema remanescente e o apresenta à turma, servindo de modelo de como a exposição deve ser feita. O tamanho dos grupos fica a critério dos alunos, exigindo-se apenas equilíbrio entre eles, sem grupos desproporcionais. Definida a composição, o representante de turma deve enviar mensagem ao professor com todos os grupos, organizados na ordem cronológica das aulas em que apresentarão." },
      { titulo:"Atividades em sala", texto:"Além das apresentações, haverá atividades desenvolvidas em grupo durante a própria aula, em grupos de 2 a 3 alunos. Nessas atividades, o professor dará as orientações no início, o texto será produzido em sala e a entrega ocorrerá ao final do encontro. É possível aproveitar os mesmos grupos das apresentações, mas a composição não é fixa e pode ser alterada." },
      { titulo:"Fichamentos", texto:"Os fichamentos são registros de leitura elaborados em ficha, com uso de frente e verso, manuscritos e seguindo o modelo indicado pelo professor. São sete textos ao todo e cada texto exige uma ficha própria, com entrega presencial. A ficha pode ser colorida e o tamanho fica a critério do aluno, embora o professor recomende a de 10 cm, com letra pequena, de modo que todo o conteúdo caiba no espaço disponível. Exige-se apenas que a escrita seja à mão, em caneta azul ou preta." },
      { titulo:"Avaliação", texto:"A avaliação da disciplina é composta por duas notas. A atividade do dia 25 de setembro corresponde a 40% da nota, e a prova de questões objetivas corresponde aos 60% restantes. Ainda que os trabalhos sejam realizados antes, todas as notas serão lançadas apenas na N2, e não na N1." }
    ], fonte:"Orientações do professor em aula, 12 de agosto de 2026." },

    { sigla:"Ética",        blocos:[] },
    { sigla:"Econ. Pol.",   blocos:[] },

    { sigla:"CTS", blocos:[
      { titulo:"Avaliação", texto:"A disciplina é avaliada em dois momentos, cada um composto por dois elementos. A N1 é formada por prova individual, com consulta permitida a uma folha de anotações utilizável em frente e verso, somada ao seminário. A N2 é formada por prova realizada em grupo, também somada ao seminário." }
    ], fonte:"Orientações do professor em aula, 12 de agosto de 2026." },

    { sigla:"Ciên. Pol.", blocos:[
      { titulo:"Fichamento", texto:"O fichamento da disciplina é manuscrito, ou seja, deve ser escrito à mão pelo próprio aluno. Tanto o suporte quanto a forma de elaboração ficam a critério de cada um, podendo ser utilizada ficha, folha sulfite, papel almaço ou material equivalente, com organização em tópicos, em texto corrido ou em outra estrutura de preferência do aluno. Não há, portanto, modelo obrigatório de apresentação. O foco da avaliação está no conteúdo: o que se espera é o registro fiel e compreensivo da leitura, com identificação das ideias centrais da obra e domínio efetivo do material estudado, e não o padrão visual do trabalho." }
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
      a1:null,
      a2:{ nome:"N2", componentes:[
        { nome:"Atividade de 25/09", peso:40 }, { nome:"Prova de questões objetivas", peso:60 }
      ], pesosConfirmados:true }
    },
    { sigla:"Prát. Ext.",    a1:null, a2:null },
    { sigla:"Antrop. Jur.",  a1:null, a2:null },
    { sigla:"IDP",           a1:null, a2:null },
    { sigla:"Ética",         a1:null, a2:null },
    { sigla:"CTS",           a1:null, a2:null }
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

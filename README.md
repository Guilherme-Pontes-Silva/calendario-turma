# Calendário da Turma — Direito 1º período noturno

Versão online do calendário que hoje sai em PDF. Mesma informação, mas com o
**tempo restante contando ao vivo**, filtros por matéria e por tipo, busca, e
botão para jogar tudo no celular da turma.

Feito para ser hospedado de graça no **GitHub Pages** — o mesmo lugar onde já
está o cartão de visita digital.

---

## Os arquivos

| Arquivo      | O que é                                                        |
|--------------|----------------------------------------------------------------|
| `index.html` | A página inteira: visual, contagem regressiva, filtros, .ics. Não precisa mexer. |
| `eventos.js` | **Só os dados.** É o único arquivo que muda quando o calendário muda. |
| `README.md`  | Este arquivo. Não aparece no site.                              |

Não há dependência de nada externo: nenhuma biblioteca, nenhuma fonte baixada,
nenhum servidor. É HTML, CSS e JavaScript puro, num arquivo só. Abre até sem
internet, se a pessoa já tiver carregado a página uma vez.

---

## Como colocar no ar (uma vez só)

### Caminho 1 — pelo site do GitHub, sem terminal

1. Em <https://github.com/new>, crie um repositório público chamado
   `calendario-turma`.
2. Na tela seguinte, clique em **uploading an existing file** e arraste
   `index.html` e `eventos.js`.
3. Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Source*, escolha **Deploy from a branch**,
   branch `main`, pasta `/ (root)`. Salve.
5. Em um ou dois minutos o endereço fica no ar:

   ```
   https://SEU-USUARIO.github.io/calendario-turma/
   ```

Esse é o link que vai para o grupo da turma. Ele nunca muda.

### Caminho 2 — pelo terminal

Dentro desta pasta:

```bash
git init -b main && git add . && git commit -m "Calendário da turma online" && git remote add origin https://github.com/SEU-USUARIO/calendario-turma.git && git push -u origin main
```

Depois é só ativar o Pages no passo 4 acima.

### Quer no mesmo domínio do cartão de visita?

Se o cartão está em `SEU-USUARIO.github.io`, crie dentro **daquele** repositório
uma pasta `calendario/`, ponha os dois arquivos lá e o endereço vira:

```
https://SEU-USUARIO.github.io/calendario/
```

Aí você tem o cartão e o calendário no mesmo domínio, e pode até linkar um do outro.

---

## Como atualizar quando uma data mudar

Trocar **só o `eventos.js`**. Pelo site do GitHub: abra o arquivo, clique no
lápis, cole a versão nova, **Commit changes**. Em cerca de um minuto o site já
está atualizado para a turma inteira — ninguém precisa baixar nada de novo.

Lembre de atualizar também a linha `atualizadoEm`, que é o carimbo que aparece
no topo da página.

### Formato de cada evento

```js
{
  data: "2026-09-14",      // sempre AAAA-MM-DD
  hora: null,              // "23:59" se tem hora marcada; null se é o dia todo
  disciplina: "TGD",       // TGD | Econ. Pol. | Prát. Ext. | Antrop. Jur. | Geral
  tipo: "PROVA",           // ver lista abaixo
  titulo: "Prova A1 (N1)",
  descricao: "Prova correspondente à nota N1.",
  confirmar: true          // opcional: marca "data não confirmada pelo professor"
}
```

Tipos aceitos, e como cada um é agrupado e colorido na página:

| Grupo             | Tipos                                            | Cor      |
|-------------------|--------------------------------------------------|----------|
| Provas            | `PROVA`, `AVALIACAO`                             | vermelho |
| Entregas          | `ENTREGA`, `TAREFA`, `MANUSCRITO`                | amarelo  |
| Aulas e eventos   | `AULA`, `EVENTO`, `COMPETICAO`, `APRESENTACAO`   | azul     |
| Feriados          | `FERIADO`                                        | verde    |

Sem acento e sem cedilha nos tipos (`AVALIACAO`, `COMPETICAO`, `APRESENTACAO`) —
é o valor interno, e a página escreve "Avaliação", "Competição", "Apresentação"
na tela sozinha.

A ordem no arquivo não importa: a página ordena por data.

### Se o sistema automático for gerar o arquivo

Peça para ele cuspir exatamente o `eventos.js` neste formato, no lugar do PDF.
O `index.html` fica intocado para sempre. Se preferir manter o PDF também, tudo
bem — os dois saem da mesma extração.

---

## O que a página faz

- **Contagem regressiva ao vivo** para o próximo compromisso, em dias, horas,
  minutos e segundos, e um "faltam X dias" em cada item da lista.
- **Faixa "Hoje"** para o que está acontecendo no dia.
- **Contadores** de quantas provas, entregas, aulas e feriados ainda faltam —
  eles caem sozinhos conforme o semestre anda.
- **Filtros** por tipo e por matéria, busca por texto, e a opção de mostrar o
  que já passou (some por padrão, para a lista não virar arquivo morto).
- **Botão .ics**: baixa o semestre inteiro para o calendário do celular, com
  lembrete um dia antes nas tarefas com hora marcada. Funciona no Google
  Agenda, no calendário do iPhone e no Outlook.
- **+ Google Agenda** em cada item, para quem só quer um compromisso.
- **Compartilhar link** — usa o menu nativo do celular; no computador copia o link.
- **Imprimir / PDF** — se alguém ainda quiser o papel, a página imprime limpa,
  sem os botões.
- **Fuso fixo em Campinas (-03:00)**: o tempo restante fica certo mesmo se o
  celular da pessoa estiver com outro fuso.

## Cuidado com o conteúdo

A página não traz nota, falta nem situação de entrega de ninguém — só as datas
da turma. Como o repositório é público, mantenha assim: nada de dado pessoal de
colega ali dentro.

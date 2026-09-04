#!/usr/bin/env bash
# Carimba a data de hoje na versão dos scripts e no atualizadoEm.
#
# Uso, na pasta do repositório:
#   ./atualizar-versao.sh
#
# O que muda:
#   index.html  → eventos.js?v=AAAAMMDD e extras.js?v=AAAAMMDD
#   eventos.js  → atualizadoEm: "AAAA-MM-DDTHH:MM:00-03:00"
#
# Rode antes de commitar uma mudança de dados: o ?v= novo obriga o
# navegador da turma a baixar o arquivo de novo, em vez de servir a
# cópia antiga do cache.
set -euo pipefail
cd "$(dirname "$0")"

HOJE="$(date +%Y%m%d)"
AGORA="$(date +%Y-%m-%dT%H:%M):00-03:00"

sed -i -E "s/(eventos\.js\?v=)[0-9]{8}/\1${HOJE}/; s/(extras\.js\?v=)[0-9]{8}/\1${HOJE}/" index.html
sed -i -E "s/(atualizadoEm: \")[^\"]*\"/\1${AGORA}\"/" eventos.js

echo "index.html: scripts em ?v=${HOJE}"
echo "eventos.js: atualizadoEm = ${AGORA}"

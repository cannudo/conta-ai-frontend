#!/bin/bash

if [[ "$#" -ne 1 ]]; then
    echo "Uso: $0 [--install-node-modules|--help]"
    return 1
fi

case "$1" in
    '--install-node-modules')
        code ./
        cd "$(pwd)/vueroot/"
        npm install
        npm run serve
        ;;
    '--help')
        echo "Ajuda: $0"
        echo ""
        echo "  [descrição]"
        echo "    Script que abre o Visual Studio Code, instala as dependências e roda o projeto Vue."
        echo ""
        echo "  [argumentos]"
        echo "    --install-node-modules: instala as dependências do Node e roda o projeto Vue."
        echo "    --help: mostra essa mensagem de ajuda e sai"
        return 0
        ;;
    *)
        echo "Opção inválida: $1"
        echo "Uso: $0 [--install-node-modules|--help]"
        return 1
        ;;
esac

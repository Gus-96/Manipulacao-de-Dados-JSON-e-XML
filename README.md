Projeto de Carregamento e Filtragem de Transações
Este projeto demonstra como carregar e filtrar transações a partir de arquivos JSON e XML. Ele permite selecionar um dia específico e exibir as transações correspondentes para esse dia.

Funcionalidades
- Carregar transações de um arquivo JSON: As transações são carregadas de um arquivo JSON (dados.json).
- Carregar transações de um arquivo XML: As transações são carregadas de um arquivo XML (dados.xml).
- Filtrar transações por dia: As transações são filtradas com base no dia selecionado.
- Exibir transações filtradas: As transações filtradas são exibidas na página.

Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- Um navegador moderno (como Chrome, Firefox ou Edge).
- Um servidor local (como Live Server no VS Code) para evitar problemas de CORS ao carregar arquivos locais.

Estrutura do Projeto
- dados.json          # Arquivo JSON contendo as transações
- dados.xml           # Arquivo XML contendo as transações
- index.html          # Arquivo HTML principal
- script.js           # Arquivo JavaScript com a lógica do projeto
- README.md           # Este arquivo

Como Usar
Clone o repositório (ou baixe o código-fonte):
- git clone git@github.com:Gus-96/Manipulacao-de-Dados-JSON-e-XML.git
- cd Manipulacao-de-Dados-JSON-e-XML

Abra o projeto em um servidor local:
- Se estiver usando o VS Code, instale a extensão Live Server e clique em "Go Live" no canto inferior direito.
- Caso contrário, você pode usar qualquer servidor local de sua preferência.

Acesse a página no navegador:
- Abra o navegador e acesse http://localhost:5500 (ou a porta configurada no seu servidor local).

Selecione um dia e consulte as transações:
- No campo de seleção, escolha um dia (de 1 a 30).

Clique no botão "Consultar Data" para exibir as transações correspondentes ao dia selecionado.

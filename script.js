// URL padrão para os arquivos
const URL_JSON = 'dados.json';
const URL_XML = 'dados.xml';

// Carregar o arquivo JSON
async function carregarJSON() {
    try {
        const response = await fetch(URL_JSON);
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }
        const data = await response.json();
        return data; // Retorna o array de transações
    } catch (error) {
        console.error('Erro no carregamento do JSON:', error);
        return []; // Retorna um array vazio em caso de erro
    }
}

// Carregar o arquivo XML
async function carregarXML() {
    try {
        const response = await fetch('dados.xml');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo XML');
        }
        const xmlString = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");

        const transacoes = [];
        const nodes = xmlDoc.getElementsByTagName('row');
        for (let node of nodes) {
            const dia = parseInt(node.getElementsByTagName('dia')[0].textContent);
            const valor = parseFloat(node.getElementsByTagName('valor')[0].textContent);
            transacoes.push({ dia, valor });
        }
        return transacoes; // Retorna o array de transações
    } catch (error) {
        console.error('Erro no carregamento do XML:', error);
        return []; // Retorna um array vazio em caso de erro
    }
}

// Filtrar transações por dia
function filtrarPorDia(transacoes, dia) {
    return transacoes.filter(transacao => transacao.dia === dia);
}

// Formatar valores monetários
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

// Exibir transações filtradas por dia
async function exibirTransacoesFiltradas() {
    const diaSelecionado = parseInt(document.getElementById('dia').value); // Pega o valor selecionado no select

    // Carregar e filtrar os dados JSON
    const transacoesJSON = await carregarJSON();
    const transacoesJSONFiltradas = filtrarPorDia(transacoesJSON, diaSelecionado);
    
    // Carregar e filtrar os dados XML
    const transacoesXML = await carregarXML();
    const transacoesXMLFiltradas = filtrarPorDia(transacoesXML, diaSelecionado);

    const resultadoDiv = document.getElementById('resultado');
    
    // Exibe os resultados filtrados
    resultadoDiv.innerHTML = `
        <p><strong>Valor JSON no dia ${diaSelecionado}:</strong></p>
        <ul>
            ${transacoesJSONFiltradas.map(t => `<li>Dia: ${t.dia}, Valor: ${formatarMoeda(t.valor)}</li>`).join('')}
        </ul>
        <p><strong>Valor XML no dia ${diaSelecionado}:</strong></p>
        <ul>
            ${transacoesXMLFiltradas.map(t => `<li>Dia: ${t.dia}, Valor: ${formatarMoeda(t.valor)}</li>`).join('')}
        </ul>
    `;
}

// Função para criar o elemento de seleção do dia e o botão de pesquisa
function criarElementosDeSelecao() {
    // Cria o select para selecionar o dia
    const selectDia = document.createElement('select');
    selectDia.id = 'dia';

    // Preenche o select com os dias do mês (1 a 31)
    for (let i = 1; i <= 30; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectDia.appendChild(option);
    }

    // Cria o botão para pesquisar as transações
    const botaoPesquisar = document.createElement('button');
    botaoPesquisar.textContent = 'Consultar Data';
    botaoPesquisar.onclick = exibirTransacoesFiltradas; // Chama a função ao clicar

    // Adiciona os elementos ao corpo da página (ou um container específico)
    const container = document.getElementById('container');
    container.appendChild(selectDia);
    container.appendChild(botaoPesquisar);
}

// Chama a função para criar os elementos na inicialização
criarElementosDeSelecao();
export interface Question {
    question: string;
    words: string[];
}


const questions: Question[] = [
    {
        question: 'Exemplos de hardware gerenciados pelo sistema operacional',
        words: ['PROCESSADOR', 'MEMORIA RAM'],
    },
    {
        question: 'Memórias que podem ser usados para armazenar dados de programas.',
        words: ['HD', 'SSD', 'PEN DRIVE']
    },
    {
        question: 'Atividades e componentes relacionados à inicialização do computador',
        words: ['BIOS', 'SETUP', 'POST', 'ROM']
    },
    {
        question: 'Atividades e componentes relacionados ao encerramento do BIOS',
        words: ['CARREGAR NUCLEO', 'CARREGAR IC', 'CONTROLADOR DE DMA']
    },
    {
        question: 'Atividades do cotidiano análogas ao escalonamento',
        words: ['TURNOS DE TRABALHO', 'SINAL DE TRANSITO', 'FILA DE BANCO']
    },
    {
        question: 'Tarefas que se relacionam com o escalonamento',
        words: ['ALOCACAO', 'EXECUCAO']
    },
    {
        question: 'Caraterísticas de um sistema que tem vários programas executados simultaneamente',
        words: ['MULTIPROGRAMADO', 'MULTITAREFA']
    },
    {
        question: 'Atividades do cotidiano análogas a processos',
        words: ['FILA DE BANCO', 'PRODUCAO DE EMPRESA']
    },
    {
        question: 'Palavras-chave da relação entre Sistema Operacional e Processos',
        words: ['GERENCIA', 'PROGRAMAS']
    },
    {
        question: 'Palavras-chave da relação entre Sistema Operacional, Memória RAM e Programas',
        words: ['ARMAZENAR', 'BUSCAR', 'PARTICIONAMENTO']
    },
    {
        question: 'São relacionados ao Particionamento',
        words: ['LÓGICO FIXO', 'VARIÁVEL', 'TAMANHOS DIFERENTES']
    },
    {
        question: 'São relacionados ao armazenamento de informações no HD',
        words: ['DIVISAO', 'BLOCOS']
    },
    {
        question: 'Tipos de algoritmos de escalonamento e tempo',
        words: ['JUSTO', 'IGUALITARIO', 'PRIORITARIO']
    },
    {
        question: 'São relacionados ao conjunto de informações que fica armazenado nos registradores',
        words: ['CONTEXTO', 'SALVAR E RECUPERAR', 'TABELA DE PROCESSOS']
    },
    {
        question: 'São relacionados com o controle de compartilhamento',
        words: ['MUTEX', 'MONOPÓLIO', 'CHAMADA DE SISTEMA']
    },
    {
        question: 'São relacionados com a chamada de sistema',
        words: ['ENVIAR COMANDOS', 'CHAMADA A PROCEDIMENTO']
    },
    {
        question: 'Atividades do cotidiano análogas a interrupção',
        words: ['CAMPANHIA', 'ALARME', 'LIGACAO']
    },
    {
        question: 'São relacionados com a interrupção',
        words: ['FINALIZACAO DE PROCESSOS', 'ROTINA DE SERVIÇO']
    },
    {
        question: 'Exemplos do cotidiano análogas ao driver',
        words: ['TRADUTOR', 'CONTROLE REMOTO']
    },
    {
        question: 'Estados de um ciclo de vida de um processo',
        words: ['PRONTO', 'RODANDO', 'BLOQUEADO']
    },
    {
        question: 'São relacionados a execução no modo núcleo e modo usuário',
        words: ['EXECUCAO PROTEGIDA', 'EXECUCAO DESPROTEGIDA']
    },
    {
        question: 'Conhecimentos essencias para desenvolver um sistema operacional',
        words: ['RECURSOS DISPONIVEIS', 'CARACTERISTICAS']
    },
    {
        question: 'Componente essencial para executar programas de usuários',
        words: ['SISTEMA OPERACIONAL']
    },
    {
        question: 'Motivos para desenvolver um sistema operacional',
        words: ['EXECUTAR PROGRAMAS', 'COMPARTILHAR RECURSOS']
    },
    {
        question: 'Componentes principais de um sistema operacional',
        words: ['ESCALONADOR', 'GERENTE DE MEMÓRIA', 'SISTEMA DE ARQUIVOS']
    },
    {
        question: 'São relacionados com função e circuitos digitais',
        words: ['CHAMADA A PROCEDIMENTO', 'SINAIS DE CONTROLE', 'FLUXO DE INFORMACOES']

    },
    {
        question: 'São apontados por vetores de interrupção',
        words: ['ROTINAS', 'TRATAMENTO DE INTERRUPCOES']
    },
    {
        question: 'São atividades da entidade Compilador',
        words: ['COMPILAR', 'TRADUZIR', 'ANALISAR']
    },
    {
        question: 'São atividades relacionadas ao MMU',
        words: ['GERENCIA DE MEMORIA', 'PROTECAO DE MEMORIA']
    }
];

export { questions };
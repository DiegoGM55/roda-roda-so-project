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
    }
];

    export { questions };
export interface Question {
    question: string;
    words: string[];
}
  
  
const questions: Question[] = [
    {
        question: 'O que é um componente de hardware?',
        words: ['SSD', 'HDD', 'PLACA DE VIDEO']
    },
    {
        question: 'O que é um componente de software?',
        words: ['ESCALONADOR DE PROCESSOS', 'SISTEMA OPERACIONAL']
    },
    {
        question: 'Quais são os tipos de memória?',
        words: ['MEMORIA RAM', 'MEMORIA ROM', 'CACHE']
    },
    {
        question: 'Quais são os tipos de armazenamento?',
        words: ['SSD', 'HDD']
    }
];

    export { questions };
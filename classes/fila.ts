class Fila<T> {
    itens: T[];
    constructor() {
        this.itens = [];
    }

    enqueue(elemento: T) {
        this.itens = [...this.itens, elemento];
    }

    dequeue() {
        return this.itens.shift();
    }
}
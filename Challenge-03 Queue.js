class Queue {
    constructor(){
        this.queue = []
    }

    
    
    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        return this.queue;
    }

}

const queue = new Queue();

console.log(queue.enqueue({name:"David", ArrivedTime: "18:40", date: "2024-08-14"}));

console.log(queue.enqueue({name:"Juan", ArrivedTime: "19:20", date: "2024-08-14"}));

console.log(queue.enqueue({name:"Pedro", ArrivedTime: "20:20", date: "2024-08-14"}));

console.log(queue.peek());

console.log(queue.dequeue());

console.log(queue.peek());

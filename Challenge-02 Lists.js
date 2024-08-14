class Stack {
    constructor(){
        this.stack = []
    }

    
    
    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        this.console.log(this.stack);
    }

}

const stack = new Stack();

console.log(stack.push({name:"Libro1", isbn:1234, author:"Stan Lee", editorial:"Casa de papel"}));

console.log(stack.peek());

console.log(stack.push({name:"Libro2", isbn:1235, author:"Shakespire", editorial:"Editorial x"}));

console.log(stack.peek());

console.log(stack.size());

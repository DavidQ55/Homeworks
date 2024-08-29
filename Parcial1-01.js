class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        let newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }


    Array(){
        let array = [];
        let current = this.head;
        while (current){
            array.push(current.data);
            current = current.next
        }
        return array;
    }


    static List(array){
        let list = new LinkedList();
        array.forEach(data => list.append(data))
        return list;
    }


    printList(){
        let current = this.head;
        let result = "";
        while (current){
            result += current.data + " - ";
            current = current.next;
        }
        console.log(result);
    }

}

let lista1 = new LinkedList();
lista1.append(8);
lista1.append(4);
lista1.append(5);
lista1.append(6);

let lista2 = new LinkedList();
lista2.append(7);
lista2.append(3);
lista2.append(1);
lista2.append(2);


let ListaF = lista1.Array().concat(lista2.Array()).sort((a, b) => a - b);


let resultList = LinkedList.List(ListaF);
resultList.printList();
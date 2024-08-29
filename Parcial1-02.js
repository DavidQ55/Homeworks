class Node{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class Tree {
    constructor(data) {
        this.root = new Node(data);
    }

    insert(value){
        const newNode = new Node(value, null, null);
    
        if (!this.root){
            this.root = newNode;
        }else{
            let current = this.root;
            let isFound = false;
    
            while (!isFound){
                if(current.value === value){
                    isFound = true
                    return null
                }
                if (current.value > value){
                    if (!current.left){
                        current.left = newNode
                        isFound = true
                        return this
                    }else{
                        current = current.left
                    }
                } else{
                    if (!current.right){
                        current.right = newNode
                        isFound = true
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    
    }
}

function calcularAltura(node) {
    if (node === null) {
        return -1;  // Si esta vacio el árbol
    } else {
        let AlturaIzq = calcularAltura(node.left);
        let AlturaDer = calcularAltura(node.right);
        return Math.max(AlturaIzq, AlturaDer) + 1; //Mat.max para encontrar el valor máximo entre izquierda y derecha del árbol
    }
}

const tree = new Tree(5);
tree.insert(8);
tree.insert(40);
tree.insert(7);
tree.insert(45);

console.log("Altura del árbol:", calcularAltura(tree.root));

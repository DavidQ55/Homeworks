class NaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value, parentValue) {
      const newNode = { value: value, children: [] };
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        const parentNode = this.search(parentValue, this.root);

        if (parentNode) {
          parentNode.children.push(newNode);
        } else {
          console.log("Padre no encontrado");
        }
      }
    }
  
    search(value, node = this.root) {
      if (!node) return null;
  
      if (node.value === value) {
        return node;
      }
  
      for (let child of node.children) {
        const result = this.search(value, child);
        if (result) return result;
      }
      return null;
    }
  
    preOrder(node = this.root) {
      if (!node) return;
  
      console.log(node.value); 
      node.children.forEach(child => this.preOrder(child));
    }
  
    postOrder(node = this.root) {
      if (!node) return;
  
      node.children.forEach(child => this.postOrder(child));
      console.log(node.value);
    }
  
    inOrder(node = this.root) {
      if (!node) return;
  
      if (node.children.length > 0) {
        this.inOrder(node.children[0]);
      }
  
      console.log(node.value);
  
      for (let i = 1; i < node.children.length; i++) {
        this.inOrder(node.children[i]);
      }
    }
  }
  


  // Ejemplo de uso:
  const familyTree = new NaryTree();
  
  familyTree.insert("Grandparent", null);
  familyTree.insert("Parent 1", "Grandparent");
  familyTree.insert("Parent 2", "Grandparent");
  familyTree.insert("Child 1", "Parent 1");
  familyTree.insert("Child 2", "Parent 2");
  familyTree.insert("Child 3", "Parent 2");
  
  // Recorridos
  console.log("Pre-orden:");
  familyTree.preOrder();
  
  console.log("\nIn-orden:");
  familyTree.inOrder();
  
  console.log("\nPost-orden:");
  familyTree.postOrder();
  
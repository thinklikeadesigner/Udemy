// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
// }

var treeify = require("treeify");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }

  //   unshift(val) { // add to front
  //     let newnode = new Node(val);
  //     if (this.length === 0) {
  //       this.head = newnode;
  //       this.tail = newnode;
  //     } else {
  //       let oldhead = this.head;
  //       oldhead.prev = newnode;
  //       newnode.next = oldhead;
  //       this.head = newnode;
  //     }
  //     this.length++;
  //     return this;
  //   }

  unshift(val) {
    let newnode = new Node(val);
    if (this.length == 0) {
      this.head = this.tail = newnode;
    } else {
      this.head.prev = newnode;
      newnode.next = this.head;
      this.head = newnode;
    }
    this.length++;
    return this;
  }

  shift() {
    // remove from front
  }
}

let a = new DoublyLinkedList();

a.add(1);
a.add(2);
a.add(3);
a.add(4);
a.add(5);
console.log(treeify.asTree(a, true));

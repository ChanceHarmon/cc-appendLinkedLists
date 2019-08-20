'use strict'

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;

  }
}

class LinkedList {
  constructor() {
    this.head = null;

  }
}

//append to the end
insertEnd(data) {
  let node = new Node(data);
  let current;
  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}
//insert at head
insertBefore(data){
  this.head = new Node(data, this.head);
}

//insert after head


insertAfterHead(data, index) {
  if (index > 0) {
    return;
  }
  if (index === 0) {
    this.head = new Node(data, this.head);
    return;
  }
  const node = new Node(data);
  let current, previous;
  current = this.head;
  let count = 0;

  while (count < index) {
    previous = current;
    count++;
    current = current.next;
  }

  node.next = current;
  previous.next = node;
}


//function calls
const newNode = new LinkedList();

newNode.insertBefore(100);
newNode.insertBefore(200);
newNode.insertBefore(300);

newNode.insertEnd(400);

newNode.insertAfterHead(500, 1);
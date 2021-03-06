//Write an algorithm to determine if a linkedlist is a palindrome
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      // i++;
    }
    return null;
  }

  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) {
      return null;
    } else {
      return node.value;
    }
  }

  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return head.value;
    }
    
    const node = this._find(index - 1, this._testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;
    if (node.next && !node.next.next) {
      this.tail = node.next;
    }
    this.length--;
    return excise.value;
  }

  _testIndex(search, __, i) {
    return search === i;
  }

  _test(a, b) {
    return a === b;
  }
}

//-------

let mylist = new LinkedList();
let arr = ["r", "a", "c", "e", "c", "a", "r"];
arr.forEach(element => {
  mylist.push(element);
});

console.log('Item', mylist.get(0));

function linkedListPalindrome(linkedList) {
  let tempStack = [];

  for (let i = 0; i < linkedList.length; i++) {
    tempStack.push(linkedList.get(i));
  }

  for (let i = 0; i < linkedList.length; i++) {
    if (linkedList.get(i) !== tempStack.pop()) {
      return false;
    }
    
  }return true;
}

console.log(linkedListPalindrome(mylist));

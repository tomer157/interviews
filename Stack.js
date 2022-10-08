class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    let top = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;

    return top;
  }

  peek() {
    console.log(this.storage[this.size - 1]);
    return this.storage[this.size - 1];
  }

  getSize() {
    console.log(this.size);
    return this.size;
  }

  empty() {
    console.log(this.size === 0);
    return this.size === 0;
  }

  print() {
    console.log(this.storage);
  }
}

var myQueue = function () {
  this.pushStack = new Stack(); //adding
  this.popStack = new Stack(); // deleting
};

myQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

myQueue.prototype.pop = function () {
  if (this.popStack.empty()) {
    while (!this.pushStack.empty) {
      this.popStack.push(this.pushStack.pop());
    }
  }

  return this.popStack.pop();
};

myQueue.prototype.peek = function () {
  if (this.popStack.empty()) {
    while (!this.pushStack.empty) {
      this.popStack.push(this.pushStack.pop());
    }

    return this.popStack.peek();
  }
};

myQueue.prototype.empty = function () {
  return this.popStack.empty() && this.pushStack.empty();
};

const q = new myQueue();

q.empty();

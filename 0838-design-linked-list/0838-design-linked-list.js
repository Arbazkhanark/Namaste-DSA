
let Node = function (val) {
    this.val = val;
    this.next = null;
}


var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let currNode = this.head;
    let size = this.size;

    if (index < 0 || index >= size) {
        return -1;
    }

    for (let i = 0; i < index; i++) {
        currNode = currNode.next;
    }

    return currNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    // Step 1: create a new node
    let node = new Node(val);

    // Step 2: point new node's next to the current head (old head)
    node.next = this.head;

    // Step 3: make this new node the new head
    this.head = node;

    // Step 4: increase the size count
    this.size += 1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
        this.size += 1;
        return; // Yeh zaroori hai, warna neeche ka code bhi chalega
    }

    let currNode = this.head;

    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    currNode.next = newNode;
    this.size += 1;
};


/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;

    let newNode = new Node(val);

    // Special case: insert at head
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        newNode.next = curr.next;
        curr.next = newNode;
    }

    this.size += 1;
};


/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return;
    }

    // Special case: delete head
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;

        // Traverse to node just before the one to delete
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        // Skip the node at 'index'
        curr.next = curr.next.next;
    }

    this.size -= 1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
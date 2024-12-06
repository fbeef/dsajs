class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function createLinkedList(value) {
    const head = new Node(value);
    const tail = head;
    let length = 1;

    return {
        head,
        tail,
        length,
        push(value) {
            const newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this; // Return the linked list for chaining
        },
    };
}

//Find the middle node in a linked list [Tortoise and Hare Algorithm – O(n) time and O(1) space]
function getMiddlehead(head){
    let slow_pointer = head;
    let fast_pointer = head;

    while(fast_pointer !== null && fast_pointer.next !== null){
        fast_pointer = fast_pointer.next.next;
        slow_pointer = slow_pointer.next;
    }

    return slow_pointer.value;
}

//reverse List

function reverseList(head){
    let current = head;
    let prev = null;
    let next;

    while(current.next !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}



// Example Usage
const myLinkedList = createLinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
// myLinkedList.push(5);

console.log(myLinkedList);
console.log("Middle head: ", getMiddlehead(myLinkedList.head));
console.log("Reverse List: ", printList(reverseList(head)));

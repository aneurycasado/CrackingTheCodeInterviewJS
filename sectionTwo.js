//2.1
// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
function removeDuplicates(linkedList){
    var map = {};
    var currentNode = linkedList.head;
    while(currentNode !== null){
        var data = currentNode.data;
        if(map[data] === undefined) map[data] = 1
        else map[data]++;
        currentNode = currentNode.next;
    }
    for(var key in map){
        if(map[key] > 1){
            for(var i = 0; i < map[key] -1; i++){
                linkedList.deleteNode(key)
            }
        }
    }
    return linkedList;
}
// var newList = new LinkedList()
// newList.appendToTail(1);
// newList.appendToTail(2);
// newList.appendToTail(1);
// newList.appendToTail(2);
// newList.appendToTail(1);
// newList.appendToTail(2);
// newList.appendToTail(1);
// newList.appendToTail(2);
// newList.printList();
// var removedDuplicates = removeDuplicates(newList);
// removedDuplicates.printList();

//2.2 
// Implement an algorithm to find the kth to last element of a singly linked list.
function kthToLastElement(k,linkedList){
    var length = findLength(linkedList);
    if(k >= length){
        return{data: "k is too large"};
    }
    var count = 0;
    var currentNode = linkedList.head;
    while(count !== length-k-1){
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
}

function findLength(linkedList){
    var length = 0;
    var currentNode = linkedList.head;
    while(currentNode !== null){
        currentNode = currentNode.next;
        length++;
    }
    return length;
}
// var newList = new LinkedList()
// newList.appendToTail(1);
// newList.appendToTail(2);
// newList.appendToTail(3);
// newList.appendToTail(4);
// console.log(kthToLastElement(0,newList).data)
// console.log(kthToLastElement(1,newList).data)
// console.log(kthToLastElement(2,newList).data)
// console.log(kthToLastElement(3,newList).data)
// console.log(kthToLastElement(5,newList).data)

//2.3
// Implement an algorithm to delete a node in the middle of a singly linked list,
// given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a- >b- >d->e
// pg

//2.4
// Write code to partition a linked list around a value x, such that all nodes less than
// x come before all nodes greater than or equal to x.

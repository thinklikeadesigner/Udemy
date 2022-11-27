Reverse Linked List	easy 
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;

    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};
```

Merge Two Linked Lists	easy
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let nullNode = { val: 0, next: null };
    let prev = nullNode;
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            prev.next = l2;
            l2 = l2.next;
        } else {
            prev.next = l1;
            l1 = l1.next;
        }
        prev = prev.next;
    }
    prev.next = l1 || l2;
    return nullNode.next;
};
```

Reorder List	medium
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) {
        return;
    }

    let slow = head;
    let fast = head;

    // finding the middle of the linked list using 2 pters
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second part of the list starting at slow
    let prev = null;
    let curr = slow;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    } // here prev is the head

    // merge two sorted lists (first one starts at head, second at prev)
    let first = head;
    let second = prev;

    while (second.next) {
        temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
    }
};
```

Remove Nth Node from End of List	medium
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let currNode = head;
    let nodeBeforeN = head;

    for (let i = 0; i < n; i++) {
        currNode = currNode.next;
    }

    if (!currNode) {
        return head.next;
    }

    while (currNode.next) {
        nodeBeforeN = nodeBeforeN.next;
        currNode = currNode.next;
    }

    nodeBeforeN.next = nodeBeforeN.next.next;

    return head;
};

```
Linked List Cycle	easy

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        } else {
            set.add(head);
            head = head.next;
        }
    }

    return false;
};
```

Merge K Sorted Lists hard
```js
var merge = function (l1, l2) {
    let tempNode = new ListNode(0);
    let current = tempNode;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1) current.next = l1;
    if (l2) current.next = l2;

    return tempNode.next;
};

var mergeKLists = function (lists) {
    let root = lists[0];

    for (let i = 1; i < lists.length; i++) {
        root = merge(root, lists[i]);
    }
    return root || null;
};
```
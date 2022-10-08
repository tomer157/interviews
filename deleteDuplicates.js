function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? 0 : next;
}

const deleteDuplicates = (head) => {
  // example 1->1->2->3->3->null

  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

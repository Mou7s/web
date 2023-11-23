<script setup>
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) {
    return false; // 链表为空或只有一个节点，肯定没有环
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false; // 快指针先到达链表尾部，说明没有环
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true; // 快指针追上了慢指针，说明链表中存在环
}
</script>

<template><div>123</div></template>

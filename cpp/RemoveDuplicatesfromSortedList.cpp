/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 class Solution {
    public:
    ListNode* deleteDuplicates(ListNode* head) {
        while (head && head.next)
        {
            if (head.val == head.next.val)
            {
                head.next.val == head.next.next.val;
            }
            
            else
            {
                head = head.next;
            }
            
        }
        return head;
    }
};
*/
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;


// 2 4 6 2 7
// 2 2 4 6 7
// unvalid if statment
//

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin() , nums.end());
        if(nums.size()<2)return false;
        for (int i = 0; i < nums.size() - 1; i++)
        if(nums[i] == nums[i+1])return true;
        return false;
    }
};

int main(){
    Solution t;
    vector<int> n;
    n.push_back(3);
    n.push_back(3);
    cout<<t.containsDuplicate(n);
}
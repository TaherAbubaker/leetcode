#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size()<2)return 0;
        int min = prices[0];
        int index = 0;
        for (int i = 1; i < prices.size() ; i++)
        {
            if (min > prices[i])
            {
                min = prices[i];
                index = i;
            }
        }
        int max = min;
        for (int i = index; i < prices.size(); i++)
        {
            if (max < prices[i])
            {
                max = prices[i];
            }
        }
        
        return max - min;
    }
};

int main(){

    vector<int> t = {7,1,5,3,6,4};

    Solution s;
    cout<<s.maxProfit(t);

}
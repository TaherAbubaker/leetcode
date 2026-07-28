#include <iostream>
#include <string>
using namespace std;

class Solution
{
public:
    int lengthOfLastWord(string s)
    {
        int counter = 0;

        // Start from the end
        for (int i = s.size() - 1; i >= 0; i--)
        {
            if (s[i] == ' ' && counter > 0){break;}
            if (s[i] != ' '){++counter;}
        }

        return counter;
    }
};


int main(){
    Solution t ;
    cout<<t.lengthOfLastWord(" hello world ");
}
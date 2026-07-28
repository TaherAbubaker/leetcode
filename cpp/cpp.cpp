#include<iostream>
#include<string>
using namespace std;

class student
{
private:
    string stdname;
    int stdnumber;
    double gpa;
public:

    student();
    student(string name , int number , double gpa)
    {
        stdname = name;
        stdnumber = number;
        this->gpa = gpa;
    };

    string getName(){
        return stdname;
    }

    int getNumber(){
        return stdnumber;
    }

    double getGpa(){
        return gpa;
    }

};




int main(){
    student taher("taher" , 202310626 , 3.5);
    cout<<taher.getGpa()<<endl;
}
#include <stdio.h>
int main(){
    int count = 0;
    int number = 0;
    printf("please type the number: ");
    scanf("%d",&number);
    int mid = number/10;

    if( mid > 0 ){
        count++;
    }

    do{
        mid /= 10;
        count++;
    } while(mid > 0);

    printf("the digit of this number is %d",count);
}
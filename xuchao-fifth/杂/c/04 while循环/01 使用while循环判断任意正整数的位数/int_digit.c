#include <stdio.h>
int main(){
    int number = 0;
    int count = 1;
    printf("please type the number: ");
    scanf("%d",&number);
    
    while ( number/10>0 )
    {
        count++;
        number/=10;
        printf("%d\n",number);
        
    }
    printf("the number you typed in is %d digits\n",count);
    
}
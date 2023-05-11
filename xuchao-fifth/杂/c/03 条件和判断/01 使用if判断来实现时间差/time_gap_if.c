#include <stdio.h>
int main()
{
    int hour1,minute1;
    int hour2,minute2;
    printf("please type the first time: ");
    scanf("%d %d",&hour1,&minute1);
    printf("please type the second time: ");
    scanf("%d %d",&hour2,&minute2);
    if(minute1 >= minute2){
        printf("%dh%dm",hour1-hour2,minute1-minute2);
    }else{
        printf("%dh%dm",hour1-1-hour2,minute1+60-minute2); 
    }
}
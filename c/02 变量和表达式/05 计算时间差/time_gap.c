// 输入两个时间，并计算时间差
#include <stdio.h>
int main()
{
    int hour1,minute1;
    int hour2,minute2;
    printf("please type the first time: ");
    scanf("%d %d",&hour1,&minute1);
    printf("please type the second time: ");
    scanf("%d %d",&hour2,&minute2);
    int hour3 = (hour1 * 60 + minute1 - hour2 * 60 - minute1)/60;
    int minute3 = (hour1 * 60 + minute1 - hour2 * 60 - minute2)%60;
    printf("the time gap is %dh%dm",hour3,minute3);
    return 0;

}
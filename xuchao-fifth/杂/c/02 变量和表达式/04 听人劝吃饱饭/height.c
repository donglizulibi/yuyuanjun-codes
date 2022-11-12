// 一个换算英制长度的例子
#include <stdio.h>
int main()
{
    printf("please type the foot and inch of height: ");
    double foot=0;
    double inch=0;
    scanf("%lf %lf",&foot,&inch);
    printf("the height in metric units is: %fm",(foot+inch/12)*0.3048);
}
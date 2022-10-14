#include <stdio.h>
int main()
{
    printf("please type the foot and inch of height: ");
    int foot=0;
    int inch=0;
    scanf("%d %d",&foot,&inch);
    printf("the height in metric units is: %fm",(foot+inch/12)*0.3048);
}
#include <stdio.h>
int main()
{
    const int AMOUNT = 10;
    int a = 0;
    int b = 0;
    printf("please type two numbers.\n");
    scanf("%d %d",&a,&b); 
    // 双引号里面的表示输入的格式,然后分别赋值给后面两个变量

    printf("%d+%d+%d=%d",a,b,AMOUNT,a+b+AMOUNT);
    // 三个占位符,填入后面三个数据
    return 0;
}
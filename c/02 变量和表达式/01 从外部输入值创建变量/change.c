#include <stdio.h>
// #define _CRT_SECURE_NO_WARNINGS
int main()
{
    int price = 0;
    // printf("��������:");
    printf("please type the price:");
    scanf("%d", &price);
    printf("this is what you type in: %d\n",price);
    int change = 100 - price;
    printf("this is result:");
    printf("%d\n", change);
    return 0;

}


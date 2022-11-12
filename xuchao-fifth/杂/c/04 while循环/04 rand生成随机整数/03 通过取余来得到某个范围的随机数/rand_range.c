#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int a;
    int b;
    int c;
    srand((unsigned)time(NULL));
    a = rand() % 51 + 13; // 取13到63
    b = rand() % 10; // 取0到9
    c = rand() % 51;  // 取0到50
    printf("%d\n",a);
    printf("%d\n",b);
    printf("%d\n",c);
    return 0;
}
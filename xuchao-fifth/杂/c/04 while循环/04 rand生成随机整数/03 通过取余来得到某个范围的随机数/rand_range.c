#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int a;
    int b;
    int c;
    srand((unsigned)time(NULL));
    a = rand() % 51 + 13; // ȡ13��63
    b = rand() % 10; // ȡ0��9
    c = rand() % 51;  // ȡ0��50
    printf("%d\n",a);
    printf("%d\n",b);
    printf("%d\n",c);
    return 0;
}
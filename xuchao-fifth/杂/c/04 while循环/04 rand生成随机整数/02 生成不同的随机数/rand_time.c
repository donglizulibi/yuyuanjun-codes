// 可以通过引入时间变量，使用srand函数来不断产生新的随机数
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
    int a;
    srand((unsigned)time(NULL));
    a = rand();
    printf("%d\n", a);
    return 0;
}

// 这样每次运行程序都会生成一个新的随机数
// 但是生成的随机数是递增的，而且增幅不大
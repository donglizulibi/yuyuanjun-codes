#include <stdio.h>
#include <stdlib.h> // rand()函数存在这个头文件当中
int main(){
    int a = rand();
    int b = rand();
    printf("%d\n",a);
    printf("%d\n",b);
    return 0;
}

// 生成一次随机之后，再次运行这个函数，随机数是固定不变的
// 生成的随机数是在0到32767之间

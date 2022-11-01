#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// 连续生成一百个1到5之间的随机数
// 统计每个数字出现的频率
int main(){
    int count1=0;
    int count2=0;
    int count3=0;
    int count4=0;
    int count5=0;
    
    int i;
    int a;

    for(i=0;i<100;i++){
        srand((unsigned)time(NULL));
        a = rand() % 6 + 1; // 取1到5
        if(a==1){
           count1++; 
        }
        else if (a==2){
           count2++; 
        }
        else if (a==3){
           count3++; 
        }
        else if (a==4){
           count4++; 
        }
        else if (a==5){
           count5++; 
        }
    }

    // b = rand() % 10; // 取0到10
    // c = rand() % 51;  // 取0到50
    printf("%d\n",count1);
    printf("%d\n",count2);
    printf("%d\n",count3);
    printf("%d\n",count4);
    printf("%d\n",count5);
    // printf("%d\n",b);
    // printf("%d\n",c);
    return 0;
}

// 结果就是会随机到某一个数，然后执行一百次 
// 因为for 循环运行速度非常快，在一秒之内就运行完成了
// 而 time() 函数得到的时间只能精确到秒
// 所以每次循环得到的时间都是一样的
// 所以是srand没有开始for循环就结束了
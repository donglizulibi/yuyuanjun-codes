#include <stdio.h>
int main(){
    int sum = 0;
    int a = 0;
    int count = 0;
    while (a>-1)
    {
        printf("please type the number: ");
        scanf("%d",&a);
        printf("a:%d\n",a);
        if(a<0){
            printf("count:%d, sum:%d\n",count,sum);
            printf("the average number is %f\n",(double) sum / count);
            // int到double强制类型转换 
            // 先执行(double) sum，将 sum 转换为 double 类型
            // 然后再进行除法运算
            break;
        }
        sum+=a;
        count++;
    }
    
}
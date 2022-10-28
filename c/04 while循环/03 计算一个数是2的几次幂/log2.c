#include <stdio.h>
int main(){
    double num = 0;
    printf("please type the number: ");
    scanf("%lf",&num);
    double t = num;
    int count = 0;
    printf("num=%f\n",num);
    // printf(),

    if(num <= 0){
        printf("the number you typed is invalid");
    }else if (0< num && num <1){
        printf("0-1 count\n");

        num = 1/num;
        printf("num=%f\n",num);

        do{
            count++;
            num /= 2;
        }while(num>1);
        printf("count=%d\n",count);
        
        printf("the log2 of %f is %d",t,-count);
    }else if (num==1){
        printf("==1 count\n");
        printf("the log2 of %f is 0",t);
    }else{
        printf(">1 count\n");
        do{
            count++;
            num /= 2;
        }while(num>1);
        printf("the log2 of %f is %d",t,count);
    }
}

// num  count
// 8    0
// 4    1
// 2    2
// 1    3
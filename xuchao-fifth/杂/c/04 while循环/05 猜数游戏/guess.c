#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int a;

    srand((unsigned)time(NULL));
    // srand(time(0));
    a = rand() %101;

    // printf("%d\n",a);

    int guess;
    // ʹ��do whileӦ���Ǹ����ʵģ���������ô���֮һ�ĸ���
    // guess�ĳ�ʼֵ��a��ȣ�ֱ�����������
    while (guess != a)
    {
        printf("please type your guess number: ");
        scanf("%d",&guess);
        if(guess>a){
            printf("your guess number is bigger then computer number\n");
        }else if(guess<a){
            printf("your guess number is smaller then computer number\n");
        }
    }

    printf("Congratulations, you hit the answer");
    
    return 0;
}
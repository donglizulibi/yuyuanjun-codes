#include <stdio.h>
int main(){
    printf("please type the score in hundred mark system: ");
    int score = 0;
    scanf("%d",&score);
    score /= 10;
    switch (score)
    {
    case 10:
    case 9:
        printf("A\n");
        break;
    case 8:
        printf("B\n");
        break;
    case 7:
        printf("C\n");
        break;
    case 6:
        printf("D\n");
        break;

    default:
        printf("E\n");
        break;
    }
}

// ����ʹ��switch case�Ĺؼ�����Ҫ��ת��switch����ı��ʽ
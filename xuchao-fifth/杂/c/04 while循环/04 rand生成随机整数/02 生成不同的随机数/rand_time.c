// ����ͨ������ʱ�������ʹ��srand���������ϲ����µ������
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

// ����ÿ�����г��򶼻�����һ���µ������
// �������ɵ�������ǵ����ģ�������������
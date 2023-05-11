#include <stdio.h>
int main(){
    int type = 0;
    printf("please type in the value of type: ");
    scanf("%d",&type);
    switch ( type )
    {
    case 1:
        printf("hello");
        break;
    case 2:
        printf("morning");
        break;
    case 3:
        printf("afternoon");
        break;
    case 4:
        printf("evening");
        break;
    
    default:
        printf("what?");
        break;
    }
    return 0;
}
function solution(angle) {
    switch(angle) {
        case 90 : 
            return 2;
            break;
        case 180 : 
            return 4;
            break;
        default : 
            return angle < 90 ? 1 : 3;
    }
}
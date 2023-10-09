export function factorial(n: number): number{
    if (n < 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    if (n > 15) {
        return 0;
    }
    return n * factorial(n - 1);
}
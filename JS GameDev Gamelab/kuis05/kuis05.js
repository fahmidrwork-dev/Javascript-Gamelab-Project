function fibonaci(input)
{
    if (input === 0) return 0;
    if (input === 1) return 1;

    let prev = 0;
    let curr = 1;
    let result = 0;

    for (let i = 2; i <= input; i++) {
        result = prev + curr;
        prev = curr;
        curr = result;
    }

    return result;
}

for (let i = 0; i < 8; i++) {
    console.log(fibonaci(i));
}
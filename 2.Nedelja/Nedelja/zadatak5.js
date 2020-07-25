
{
    let N = 5
    let red = ''

    for(i = 1; i <= N; i++){
        red = ' '.repeat(N - i) + '#'.repeat(i) + ' ' + '#'.repeat(i)
        console.log(red) 
    }
}

// Ispisati Mario piramidu određene visine

{
    let N = 5
    let red = ''

    for(let i = 1; i <= N; i++){
        red = '#'.repeat(i) + ' '.repeat(N - i)
        console.log(red)
    }
}
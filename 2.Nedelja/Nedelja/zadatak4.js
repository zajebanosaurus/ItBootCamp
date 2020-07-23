// Ispisati Mario piramidu određene visine

{
    let N = 5
    let piramida = ''
    let prazno = ''

    piramida = '#'.repeat(N - 4)
    prazno = ' '.repeat(N)
    console.log(prazno, piramida)

    piramida = '#'.repeat(N - 3)
    prazno = ' '.repeat(N - 1)
    console.log(prazno, piramida)

    piramida = '#'.repeat(N - 2)
    prazno = ' '.repeat(N - 2)
    console.log(prazno, piramida)

    piramida = '#'.repeat(N - 1)
    prazno = ' '.repeat(N - 3)
    console.log(prazno, piramida)

    piramida = '#'.repeat(N)
    prazno = ' '.repeat(N - 4)
    console.log(prazno, piramida)
}
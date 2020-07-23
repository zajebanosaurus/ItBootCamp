{

    let N = 5
    let levaPiramida = ''
    let desnaPiramida = ''
    let prazno = ''

    levaPiramida = '#'.repeat(N - 4)
    prazno = ' '.repeat(N)
    desnaPiramida = '#'.repeat(N -4)
    console.log(prazno, levaPiramida, desnaPiramida)

    levaPiramida = '#'.repeat(N - 3)
    prazno = ' '.repeat(N - 1)
    desnaPiramida = '#'.repeat(N -3)
    console.log(prazno, levaPiramida, desnaPiramida)

    levaPiramida = '#'.repeat(N - 2)
    prazno = ' '.repeat(N - 2)
    desnaPiramida = '#'.repeat(N -2)
    console.log(prazno, levaPiramida, desnaPiramida)

    levaPiramida = '#'.repeat(N - 1)
    prazno = ' '.repeat(N - 3)
    desnaPiramida = '#'.repeat(N - 1)
    console.log(prazno, levaPiramida, desnaPiramida)

    levaPiramida = '#'.repeat(N)
    prazno = ' '.repeat(N - 4)
    desnaPiramida = '#'.repeat(N)
    console.log(prazno, levaPiramida, desnaPiramida)


}

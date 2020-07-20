// Prodavnica
{
    let kackavalj = 120
    let novcanik = 300
    let preostaliNovac

    if (kackavalj > novcanik){
        console.log("Nemate dovoljno novca, tenutno stanje: " + novcanik)
    }else{
        preostaliNovac = novcanik - kackavalj
        console.log("Uspešno ste kupili proizvod, " + "trenutno stanje: " + preostaliNovac)
    }
}
class Covek {
    constructor(ime, prezime, god){
        this.ime = ime,
        this.prezime = prezime,
        this.god = god
    }
}
class Student extends Covek {
    constructor(ime, prezime, god, godStudije, prosek, osnovne, master, smer){
        super(ime, prezime, god)
        this.godStudije = godStudije,
        this.prosek = prosek
        this.osnovne = osnovne,
        this.master = master
        this.smer = smer
    }
    studije(){
        if(this.smer === 'jezik'){
            console.log(` Student:\n 
            Ime i prezime: ${this.ime} ${this.prezime},\n 
            Godine: ${this.god}\n 
            Godina studija: ${this.godStudije}\n 
            Prosek: ${this.prosek}\n
            Studije: ${this.osnovne}\n
            Smer: ${this.smer}`)
        }
        else{
            console.log(` Student:\n 
            Ime i prezime: ${this.ime} ${this.prezime},\n 
            Godine: ${this.god}\n 
            Godina studija: ${this.godStudije}\n 
            Prosek: ${this.prosek}\n
            Studije: ${this.master}\n
            Smer: ${this.smer}`)
        }
    }
}

class Zaposleni extends Covek {
    constructor(ime, prezime, god, godinaZaposlenja, plata){
        super(ime, prezime, god)
        this.godinaZaposlenja = godinaZaposlenja
        this. plata = plata
    }
}

class Nastavnik extends Zaposleni {
    constructor(ime, prezime, god, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta){
        super(ime, prezime, god, godinaZaposlenja, plata)
        this.omiljeniPredmet = omiljeniPredmet
        this.listaPredmeta = listaPredmeta
    }
}
let predmeti = ['Albanski jezik', ' Književnost', ' Ilirska književnost']

class Profesor extends Nastavnik {
    constructor(ime, prezime, god, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula){
        super(ime, prezime, god, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.titula = titula
        
    }
    ispis(){
        console.log(` \nProfesor:\n 
        Ime i prezime: ${this.ime} ${this.prezime},\n 
        Plata: ${this.plata},\n 
        Godina zaposlenja: ${this.godinaZaposlenja},\n 
        Omiljeni predmet: ${this.omiljeniPredmet},\n 
        Lista predmeta: ${this.listaPredmeta},\n 
        Titula: ${this.titula}`)
    }
}
let titula = ['docent', ' vanredni', ' redovni']

class Asistent extends Nastavnik {
    constructor(ime, prezime, god, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, smerStudija){
        super(ime, prezime, god, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.smerStudija = smerStudija
    }
    ispis(){
        console.log(` \nAsistent:\n 
        Ime i prezime: ${this.ime} ${this.prezime},\n 
        Plata: ${this.plata},\n 
        Godina zaposlenja: ${this.godinaZaposlenja},\n 
        Omiljeni predmet: ${this.omiljeniPredmet},\n 
        Lista predmeta: ${this.listaPredmeta},\n 
        Smer: ${this.smerStudija}`)
    }
}

class Sluzbenik extends Zaposleni {
    constructor(ime, prezime, god, godinaZaposlenja, plata, odsek){
        super(ime, prezime, god, godinaZaposlenja, plata)
        this.odsek = odsek
    }
    ispis() {
        console.log(` \nSlužbenik:\n 
        Ime i prezime: ${this.ime}\n
        Godine: ${this.god}\n 
        Godina zaposlenja: ${this.godinaZaposlenja}\n
        plata: ${this.plata}\n 
        Odsek: ${this.odsek}`)
    }
}

let osoba0 = new Student('Pera', 'Perić', 29, 6, 6.88, 'osnovne', 'master', 'književnost')
let osoba1 = new Student('Miomir', 'Bufalo', 26, 3, 8.88, 'osnovne', 'master', 'jezik')
let osoba2 = new Profesor('Ivo', 'Andrići', 51, 1988, '300e', predmeti[0], predmeti, titula[0])
let osoba3 = new Asistent('Patrik', 'Zvezda', 34, 2017, '150e', predmeti[2], predmeti, 'Moderni Iliri')
let osoba4 = new Sluzbenik('Ilija', 'Čvorović', 60, 1979, '50e', 'domar')

osoba0.studije()
osoba1.studije()
osoba2.ispis()
osoba3.ispis()
osoba4.ispis()


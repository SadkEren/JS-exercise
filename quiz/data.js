function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni        = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap       = dogruCevap;
}


const soruListesi = [
    soru1 = new Soru(
        'Turkiyenin baskenti nere?',
        {a: 'Ankara', b:'Trabzon', c: 'Istanbul', d: 'Izmir'},
        'a'
    ),
    soru2 = new Soru(
        'Hangisi Trabzonun ilcesidir',
        {a: 'Kadikoy', b:'Akcaabat', c: 'Mamak', d: 'Alsancak'},
        'b'
    ),
    soru3 = new Soru(
        'Turkiyenin komsudur?',
        {a: 'Amerika', b:'Suudi Arabistan', c: 'Gurcistan', d: 'rusya'},
        'c'
    ),
]

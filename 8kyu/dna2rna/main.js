function DNAtoRNA(dna) {
    //turn string into array
    const dnaArr = dna.split('')
    //parse through each with map
    //if T change to U
    let rna = dnaArr.map(base => base === 'T' ? base = 'U' : base).join('')
    return rna 
}

let dna = "GCAT";
console.log(`DNA sequence '${dna}' translates to this RNA sequence: '${DNAtoRNA(dna)}'`)
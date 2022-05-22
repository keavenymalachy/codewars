function DNAStrand(dna){

    let compDNA = ""
    
    for (letter of dna) {
        if (letter === "A") {
            compDNA = compDNA.concat("T")
        }
        else if (letter === "T") {
            compDNA = compDNA.concat("A")
        }
        else if (letter === "C") {
            compDNA = compDNA.concat("G")
        }
        else if (letter === "G") {
            compDNA = compDNA.concat("C")
        }
    } 

    return compDNA
  }
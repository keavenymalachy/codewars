function DNAtoRNA(dna) {
    const regex = /[T]/g
    
    return dna.replace(regex, "U")
  }
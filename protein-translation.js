export const translate = (rna) => {
  
    if(!rna){
      return []
    }
  
    var codonStorage = "";
  
    let codonToProtein = {
      AUG: "Methionine",
      UUU: "Phenylalanine",
      UUC: "Phenylalanine",
      UUA: "Leucine",
      UUG: "Leucine",
      UCU: "Serine",
      UCC: "Serine",
      UCA: "Serine",
      UCG: "Serine",
      UAU: "Tyrosine",
      UAC: "Tyrosine",
      UGU: "Cysteine",
      UGC: "Cysteine",
      UGG: "Tryptophan",
      UAA: "STOP",
      UAG: "STOP",
      UGA: "STOP"
    }
  
    let proteinTranslate = [];
  
    for(var i = 0; i < rna.length; i++){
      codonStorage = codonStorage + rna[i];
      if((i + 1) % 3 == 0){
        if(codonToProtein[codonStorage] == "STOP"){
          return proteinTranslate;
        }
        if(codonToProtein[codonStorage] == undefined){
         throw ('Invalid codon');
        }
       proteinTranslate.push(codonToProtein[codonStorage]);
       codonStorage = "";   
      }
    }
    return proteinTranslate;
  };
  
  // Codon                 | Protein
  // :---                  | :---
  // AUG                   | Methionine
  // UUU, UUC              | Phenylalanine
  // UUA, UUG              | Leucine
  // UCU, UCC, UCA, UCG    | Serine
  // UAU, UAC              | Tyrosine
  // UGU, UGC              | Cysteine
  // UGG                   | Tryptophan
  // UAA, UAG, UGA         | STOP
  
  
  // split the rna into codons at every third character 
  // translate codons into proteins 
  
  
  // iterate through rna
    // break rna into codons
    // identify codon to corresponding protein
  //return corresponding proteins 
function caesarCipher(text:string, shift:number) {
  return text.split('').map(char => {
    const charCode = char.charCodeAt(0);
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }
    return char; 
  }).join('');
}
export function decodeCaesarCipher(encodedText:string, shift:number, originalText:string) {
  const decodedText = encodedText.split('').map(char => {
    const charCode = char.charCodeAt(0);
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    }
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    }
    return char;
  }).join('');

  return decodedText === originalText;
}

const shift = 3;

export const STUDENTS = [
  { id: 286, name: "kavindu malintha", photo: "/286.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 389, name: "Helindu Tharana", photo: "/389.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 68, name: "Nipuni Thakshila", photo: "/68.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 156, name: "Dilini Kaushalya", photo: "/156.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 134, name: "Shehan Harshana", photo: "/134.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 116, name: "suneth sadeepa", photo: "/116.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 80, name: "Sachitha Dilshan", photo: "/80.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 164, name: "Thumal Sasmitha", photo: "/164.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 417, name: "Sahiru Sankalpa", photo: "/417.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 66, name: "Mesitha Prashan", photo: "/66.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },
  { id: 415, name: "Pamudi Abhimani", photo: "/415.jpg", team: "Bumblebee", caesarCipher: caesarCipher("Bumblebee", shift) },

  { id: 77, name: "Ehansa Thathsiluni", photo: "/77.jpg",team:"optimus prime" , caesarCipher: caesarCipher("optimusprime", shift)},
  { id: 363, name: "Ushan Salith", photo: "/363.jpg",team:"optimus prime", caesarCipher: caesarCipher("optimusprime", shift) },
  { id: 215, name: "Ahamed Risvi", photo: "/215.jpg",team:"optimus prime" , caesarCipher: caesarCipher("optimusprime", shift)},
  { id: 316, name: "Malshan Randeepa", photo: "/316.jpg",team:"optimus prime" , caesarCipher: caesarCipher("optimusprime", shift)},
  { id: 107, name: "Nethmi Poornima", photo: "/107.jpg",team:"optimus prime", caesarCipher: caesarCipher("optimusprime", shift) },
  { id: 79, name: "Ashen Dilhara", photo: "/79.jpg",team:"optimus prime", caesarCipher: caesarCipher("optimusprime", shift) },
  { id: 128, name: "Rasika Akalanka", photo: "/128.jpg",team:"optimus prime" , caesarCipher: caesarCipher("optimusprime", shift)},
  { id: 133, name: "NUFAIL MOHAMED", photo: "/133.jpg",team:"optimus prime", caesarCipher: caesarCipher("optimusprime", shift) },
  { id: 426, name: "Wenusha Nuwanthi", photo: "/426.jpg",team:"optimus prime" , caesarCipher: caesarCipher("optimusprime", shift)},
  { id: 287, name: "Jayakanth Janusha", photo: "/287.jpg",team:"optimus prime", caesarCipher: caesarCipher("optimusprime", shift)},
  { id: 177, name: "Sivakumar Juththis", photo: "/177.jpg",team:"optimus prime", caesarCipher: caesarCipher("optimusprime", shift) },

  { id: 26, name: "Akidu Anusara", photo: "/26.jpg",team:"IRONHIDE", caesarCipher: caesarCipher("IRONHIDE", shift) },
  { id: 108, name: "Vihara Ridma Tharanga", photo: "/108.jpg",team:"IRONHIDE" , caesarCipher: caesarCipher("IRONHIDE", shift)},
  { id: 245, name: "Imashi Upeksha", photo: "/245.jpg",team:"IRONHIDE", caesarCipher: caesarCipher("IRONHIDE", shift) },
  { id: 218, name: "Dulaksha Madhushan", photo: "/218.jpg",team:"IRONHIDE", caesarCipher: caesarCipher("IRONHIDE", shift) },
  { id: 347, name: "Yasith Dinuwan", photo: "/347.jpg",team:"IRONHIDE", caesarCipher: caesarCipher("IRONHIDE", shift) },
  { id: 146, name: "Samina Ninduwara", photo: "/146.jpg",team:"IRONHIDE", caesarCipher: caesarCipher("IRONHIDE", shift) },
  { id: 22, name: "Dasini Upulma", photo: "/22.jpg",team:"IRONHIDE", caesarCipher: caesarCipher("IRONHIDE", shift) },
  { id: 326, name: "Chanuka Malshan", photo: "/326.jpg",team:"IRONHIDE", caesarCipher: caesarCipher("IRONHIDE", shift) },
  { id: 394, name: "Minuka Thewnidu", photo: "/394.jpg",team:"IRONHIDE" , caesarCipher: caesarCipher("IRONHIDE", shift)},
  { id: 319, name: "Vihindu Ranulaka ", photo: "/319.jpg",team:"IRONHIDE" , caesarCipher: caesarCipher("IRONHIDE", shift)},
  { id: 161, name: "Vinura Jayasanka ", photo: "/161.jpg",team:"IRONHIDE" , caesarCipher: caesarCipher("IRONHIDE", shift)},

  { id: 430, name: "udantha ayodhya", photo: "/430.jpg",team:"SIDESWIP", caesarCipher: caesarCipher("SIDESWIP", shift) },
  { id: 139, name: "Kaveesha Oshani", photo: "/139.jpg",team:"SIDESWIP", caesarCipher: caesarCipher("SIDESWIP", shift) },
  { id: 453, name: "Damindu Thathsara", photo: "/453.jpg",team:"SIDESWIP" , caesarCipher: caesarCipher("SIDESWIP", shift)},
  { id: 422, name: "Dewni Nethma", photo: "/422.jpg",team:"SIDESWIP", caesarCipher: caesarCipher("SIDESWIP", shift) },
  { id: 309, name: "Roshan Milinda", photo: "/309.jpg",team:"SIDESWIP" , caesarCipher: caesarCipher("SIDESWIP", shift)},
  { id: 365, name: "Minoji Malsiluni", photo: "/365.jpg",team:"SIDESWIP" , caesarCipher: caesarCipher("SIDESWIP", shift)},
  { id: 390, name: "Tharmika Baskaran ", photo: "/390.jpg",team:"SIDESWIP", caesarCipher: caesarCipher("SIDESWIP", shift) },
  { id: 91, name: "NIPUN SRI PRABASHWARA", photo: "/91.jpg",team:"SIDESWIP" , caesarCipher: caesarCipher("SIDESWIP", shift)},
  { id: 86, name: "Sithila Dissanayake", photo: "/86.jpg",team:"SIDESWIP", caesarCipher: caesarCipher("SIDESWIP", shift) },
  { id: 281, name: "Osanda Chandira", photo: "/281.jpg",team:"SIDESWIP", caesarCipher: caesarCipher("SIDESWIP", shift) },
  { id: 113, name: "senuvi Vishakya", photo: "/113.jpg",team:"SIDESWIP", caesarCipher: caesarCipher("SIDESWIP", shift) },

  { id: 371, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 114, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 6, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE", caesarCipher: caesarCipher("JETFIRE", shift) },
  { id: 367, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 387, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE", caesarCipher: caesarCipher("JETFIRE", shift) },
  { id: 28, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 7, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 201, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE", caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 276, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 270, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},
  { id: 357, name: "udantha ayodhya", photo: "/430.jpg",team:"JETFIRE" , caesarCipher: caesarCipher("JETFIRE", shift)},

  { id: 289, name: "Menuka Prasad", photo: "/289.jpg",team:"ROLLBAR", caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 416, name: "Mihirindi Piumika", photo: "/416.jpg",team:"ROLLBAR", caesarCipher: caesarCipher("ROLLBAR", shift)  },
  { id: 241, name: "Tharuka Muthumali", photo: "/241.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 315, name: "Ginuri Methandee", photo: "/315.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 242, name: "Nimesh Muthunayaka", photo: "/242.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 442, name: "Rashindu Induwara", photo: "/442.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 368, name: "Chamod Hiruna", photo: "/368.jpg",team:"ROLLBAR", caesarCipher: caesarCipher("ROLLBAR", shift)  },
  { id: 311, name: "Charitha Sugeeshwara", photo: "/311.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 341, name: "Manumi Ayathma", photo: "/341.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 45, name: "Nithyanjalee Chathurya", photo: "/45.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },
  { id: 348, name: "Yelani Vidunima", photo: "/348.jpg",team:"ROLLBAR" , caesarCipher: caesarCipher("ROLLBAR", shift) },

  { id: 145, name: "Tharindu Heshan", photo: "/145.jpg",team:"DEPTHCHARGE", caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 2, name: "Sanduli Chamathsara", photo: "/2.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 158, name: "Akila Manohara", photo: "/158.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 85, name: "Amasha Sandamini", photo: "/85.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 435, name: "Indunil Madhusanka", photo: "/435.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 41, name: "Aditha Gayanath", photo: "/41.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 352, name: "Dilanka chamuth", photo: "/352.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 329, name: "Janith Chamika", photo: "/329.jpg",team:"DEPTHCHARGE", caesarCipher: caesarCipher("DEPTHCHARGE", shift)   },
  { id: 217, name: "Tharuka Madhuhansa", photo: "/217.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 420, name: "Gimal Adheesha", photo: "/420.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  { id: 321, name: "Minthaka Rashan ", photo: "/321.jpg",team:"DEPTHCHARGE" , caesarCipher: caesarCipher("DEPTHCHARGE", shift)  },
  
  { id: 199, name: "Delshani Oshanthika ", photo: "/199.jpg",team:"RATCHET" , caesarCipher: caesarCipher("RATCHET", shift)  }, 
  { id: 221, name: "Iresha Madumali ", photo: "/221.jpg",team:"RATCHET", caesarCipher: caesarCipher("RATCHET", shift)   },
  { id: 202, name: "NIPUNA GIMSARA ", photo: "/202.jpg",team:"RATCHET" , caesarCipher: caesarCipher("RATCHET", shift)  },
  { id: 361, name: "kaveen sathsara ", photo: "/361.jpg",team:"RATCHET" , caesarCipher: caesarCipher("RATCHET", shift)  },
  { id: 143, name: "Ranuka Harshana ", photo: "/143.jpg",team:"RATCHET" , caesarCipher: caesarCipher("RATCHET", shift)  },
  { id: 265, name: "Pamidu Pabasara ", photo: "/265.jpg",team:"RATCHET" , caesarCipher: caesarCipher("RATCHET", shift)  },
  { id: 307, name: "Ravindu Sandeepa  ", photo: "/307.jpg",team:"RATCHET" , caesarCipher: caesarCipher("RATCHET", shift)  },
  { id: 123, name: "Aruni pramodya ", photo: "/123.jpg",team:"RATCHET", caesarCipher: caesarCipher("RATCHET", shift)   },
  { id: 356, name: "Sakith Sandiv ", photo: "/356.jpg",team:"RATCHET", caesarCipher: caesarCipher("RATCHET", shift)   },
  { id: 243, name: "nimesh muthunayaka ", photo: "/243.jpg",team:"RATCHET" , caesarCipher: caesarCipher("RATCHET", shift)  },

  
  { id: 238, name: "Vishwani Lavanya", photo: "/238.jpg",team:"CHROMIA", caesarCipher: caesarCipher("CHROMIA", shift)   },
  { id: 258, name: "Piyumi Nipunika ", photo: "/258.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 90, name: "yasoda edirisinghe ", photo: "/90.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 88, name: "Malinda Tishan", photo: "/88.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 355, name: "Nimashi Sandeepani", photo: "/355.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 344, name: "Oshan Jalitha ", photo: "/344.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 438, name: "Hivin Thinal Wijesekera", photo: "/438.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 297, name: "Geymini Kasundi ", photo: "/297.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 403, name: "Thusara Uthpala ", photo: "/403.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 21, name: "Dhanushka Keshila  ", photo: "/21.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },
  { id: 437, name: "Nimsha Udanthi ", photo: "/437.jpg",team:"CHROMIA" , caesarCipher: caesarCipher("CHROMIA", shift)  },

  { id: 313, name: "Vinuka Chamlitha ", photo: "/313.jpg",team:"KNOCKOUT", caesarCipher: caesarCipher("KNOCKOUT", shift)   },
  { id: 23, name: "Pamuda Tharuneth ", photo: "/23.jpg",team:"KNOCKOUT", caesarCipher: caesarCipher("KNOCKOUT", shift)    },
  { id: 267, name: "Sasitha Thamod ", photo: "/267.jpg",team:"KNOCKOUT", caesarCipher: caesarCipher("KNOCKOUT", shift)   },
  { id: 300, name: "Magishana Puvirajasingam  ", photo: "/300.jpg",team:"KNOCKOUT" , caesarCipher: caesarCipher("KNOCKOUT", shift)   },
  { id: 229, name: "Isidu Shevon ", photo: "/229.jpg",team:"KNOCKOUT", caesarCipher: caesarCipher("KNOCKOUT", shift)    },
  { id: 345, name: "Chama Kaushali  ", photo: "/345.jpg",team:"KNOCKOUT", caesarCipher: caesarCipher("KNOCKOUT", shift)    },
  { id: 76, name: "Shyamika Randimal ", photo: "/76.jpg",team:"KNOCKOUT" , caesarCipher: caesarCipher("KNOCKOUT", shift)   },
  { id: 431, name: "Nihinsa Devsarani", photo: "/431.jpg",team:"KNOCKOUT" , caesarCipher: caesarCipher("KNOCKOUT", shift)   },
  { id: 418, name: "Lasen Chenula", photo: "/418.jpg",team:"KNOCKOUT" , caesarCipher: caesarCipher("KNOCKOUT", shift)   },
  { id: 73, name: "kalana sasmitha", photo: "/73.jpg",team:"KNOCKOUT" , caesarCipher: caesarCipher("KNOCKOUT", shift)   },
  { id: 204, name: "Tharindu Daham Nethsara", photo: "/204.jpg",team:"KNOCKOUT" , caesarCipher: caesarCipher("KNOCKOUT", shift)   },


];


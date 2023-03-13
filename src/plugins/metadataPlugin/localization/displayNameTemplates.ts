const displayNameTemplates = {
    contacts: {
      en: "${data.name}",
      pl: "${data.name}",
    },
    users: {
      en: "${data.name}, ${data.email}",
      pl: "${data.name}, ${data.email}",
    },
    patients: {
      en: "${data.firstName} ${data.lastName}, born: ${data.birthDate}",
      pl: "${data.firstName} ${data.lastName}, ur.: ${data.birthDate}",
    },
    medicines: {
      en: "${data.commonName}",
      pl: "${data.commonName}",
    },
  };
  
  export default displayNameTemplates;
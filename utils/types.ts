type Profile = {
    id: "6543e73d46b68ef585c18828",
    firstName: string,
    lastName: string,
    company: string,
    dob: string,
    email: string,
    username: string,
    gender: string,
    maritalStatus: string,
    children: number,
    residentialType: string,
    phoneNumber: string,
    bvn:string,
    status:string
    tier:number
  }

  type Employment = {
    sector: string,
    duration: number,
    status: string,
    officeEmailemail: string,
    salary: string,
    loan: string
  }

  type Socials = {
    twitter: string,
    facebook: string,
    instagram: string
  }

  type Guarantor = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    relationships: string
  }

  type Bank = {
    bank:string
    accountNumber:string,
    balance:number
  }

export type Users = {
    id: string,
    profile:Profile ,
    employment:Employment ,
    levelOfEducation: string,
    socials: Socials,
    guarantors:Guarantor[] ,
    bankInfo: Bank,
    createdAt: string
}
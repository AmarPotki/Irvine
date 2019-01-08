export class User {

  // username: string;
  // password: string;
  // profile: UserProfile;
  // work: UserWork;
  // contacts: UserContacts;
  // social: UserSocial;
  // settings: UserSettings;
  // detail: UserDetail;
  // rate: UserRate;
  // skills: UserSkills;
  // info: UserInfo
  id: number
  name: string
  lastName: string
  imageUrl: string
  resumeUrl: string
  lookingForNext: string
  startTime: Date
  prescreeningLastVerified: Date
  locationId: number
  medicalDevice: number
  manufacturingEngineer: number
  qualityEngineer: number
  validationEngineer: null
  minimumRate: number
  maximumRate: number
  SkillDtos:UserSkills[]
}

export class UserProfile {
  name: string;
  surname: string;
  birthday: Object;
  gender: string;
  image: string;
}

export class UserWork {
  company: string;
  position: string;
  salary: number;
}

export class UserContacts {
  email: string;
  phone: string;
  address: string;
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}

////////////////////////////////

export class UserInfo {
  name: string
  lastName: string
  imageUrl: string
  resumeUrl: string
  lookingForNext: string
  startTime: string
  prescreeningLastVerified: string
}

export class UserDetail {
  locationId: number
  medicalDevice: number
  manufacturingEngineer: number
  qualityEngineer: number
  validationEngineer: null
}

export class UserRate {
  minimumRate: number
  maximumRate: number
}

export class UserSkills {
  if: number
  name: string
}
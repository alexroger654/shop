
export interface ICompany {
  name: string;
  registerUrl: string;
  loginUrl: string;
  postingUrl: string;
  registerForm: {
    steps: boolean;
    elements: Array<{
      name: string;
      selector: string;
    }>;
  };
  loginForm: {
    elements: Array<{
      name: string;
      selector: string;
    }>;
  };
  postingForm: {
    steps: boolean;
    elements: Array<{
      name: string;
      selector: string;
    }>;
  };
  flagged: boolean;
}

export interface IGeneratedBacklink {
  company: string;
  links: [{
    link: string;
    status: boolean;
  }]
}
export interface ILinkDeatils {
  url: string;
  title: string;
  tags: string[];
  country: string;
  address: string;
  number: number;
  desc: string;
  category: string;
}


export interface IDomain {
  _id: string
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  domainName: string


}

export interface IBacklink {
  user: string;
  details: ILinkDeatils;
  domains: IDomain[];
}



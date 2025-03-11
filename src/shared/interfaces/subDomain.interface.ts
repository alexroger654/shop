export interface ISubDomain {
    _id: string
    sub_domain_url: string
    domainName: string;
    domainId: string
    backLinkStatus: {
        registrationUrl: string;
        loginUrl: string;
        posting: string;
        registrationStatus: boolean;
        postingStatus: boolean;
    }[]
}
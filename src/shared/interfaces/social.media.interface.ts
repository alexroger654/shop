export interface ISocialMediaLead {
    _id: string
    origin: 'facebook' | 'instagram'
    name: string
    email: string
    mobileNumber: string
    socialMediaProfileUrl: string
    socialMediaProfileId: string
}

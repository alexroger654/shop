export interface IEmailCampaign {
  _id: string;
  campaignName: string;
  createdAt: Date;
  userId: string;
  userName: string;
  state: string;
  city: string;
  keyword: string;
  emailService: string;
  leadData: {
    gmail: string;
    phone: string;
    title: string;
    url: string;
    webpageName: string;
  }[];
}

export interface ILeadCampaign {
  _id: string;
  websiteName: "linkedin" | "instagram";
  campaignName: string;
  url: string;
  userId: string;
  userName: string;
  createdAt: string;
  targetProfileUrls: {
    id: string;
    name: string;
    designation: string;
  }[];
}

export interface ILeadList {
  _id: string;
  websiteName: "linkedin" | "instagram";
  listName: string;
  url: string;
  userId: string;
  userName: string;
  createdAt: Date;
  targetProfileUrls: {
    id: string;
    name: string;
    designation: string;
    profileUrl: string;
    isMessageSent: Boolean;
  }[];
}

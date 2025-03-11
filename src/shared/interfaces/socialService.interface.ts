export interface IService {
  _id?: string;
  websiteName:
    | "facebook"
    | "youtube"
    | "twitter"
    | "pinterest"
    | "tiktok"
    | "linkedin"
    | "quora"
    | "myBusiness"
    | "web"
    | "instagram";
  serviceType:
    | "like"
    | "dislike"
    | "comment"
    | "share"
    | "view"
    | "pageLike"
    | "follow"
    | "subscribe"
    | "updates";
  url: string;
  targetUrl: string;
  comments: string[];
  updates: string[];
  campaignId: string;
  userId: string;
  userName: string;
  createdAt: Date;
  interactionCount: number;
}

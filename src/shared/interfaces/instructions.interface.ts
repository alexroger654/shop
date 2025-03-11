export interface IInstructions {
  _id: string;
  websiteName:
    | "facebook"
    | "youtube"
    | "twitter"
    | "pinterest"
    | "tiktok"
    | "linkedin"
    | "quora"
    | "web"
    | "instagram";
  serviceType:
    | "like"
    | "comment"
    | "share"
    | "view"
    | "pageLike"
    | "follow"
    | "subscribe";

  targetPageType: "descriptionPage" | "servicePage" | "general";
  targetPageName: string;
  instruction: string;
  title: string;
  videoUrl: string;
}

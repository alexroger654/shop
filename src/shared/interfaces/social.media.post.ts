export interface ISocialMediaPost {
    _id: string
    imageUrl: string;
    content: string;
    postTime: Date;
    status: "pending" | "posted" | "failed";
}

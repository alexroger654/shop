interface IInstagramPost {
    username: string;
    name: string;
    ig_id: number;
    id: string;
    follows_count: number;
    followers_count: number;
    media_count: number;
    media: {
        data: IMedia[];
    };
}

interface IMedia {
    id: string;
    like_count: number;
    comments_count: number;
    timestamp: string;
    username: string;
    media_product_type: string;
    media_type: string;
    owner: Record<string, any>; // Replace `any` with the owner's specific structure if known
    permalink: string;
    media_url: string;
}

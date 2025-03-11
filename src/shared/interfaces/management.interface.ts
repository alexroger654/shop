export interface IManagement {
  _id: string;
  siteOpenInterval: number;
  maxTabCount: number;
  legalPages: {
    displayName: string;
    pageContent: string;
    order: number;
  }[];
}

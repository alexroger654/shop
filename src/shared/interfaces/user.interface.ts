export interface IUser {
  _id: string;
  userType: "general" | "influencer" | "employee";
  name: string;
  email: string;
  password: string;
  age: number;
  gender: "male" | "female" | "other";
  phone: string;
  state: string;
  city: string;
  address: string;
  lat: string;
  long: string;
  role: string;
  emergencyContact: string;
  createdAt: Date;
  accountStatus: "pending" | "approved" | "rejected" | "onHold";
  profileImageUrl: string;
  accessibleRoutes: string[];
  earnedPoints: number;
  remainingPoints: number;
  likedServices: string[];
}

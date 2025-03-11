export interface IRule {
  _id: string;
  ruleName: string;
  ruleFor: "autoLikeSystem" | "managementSystem" | "outReachSystem";
  websiteName:
    | "facebook"
    | "youtube"
    | "twitter"
    | "pinterest"
    | "tiktok"
    | "linkedin"
    | "web"
    | "instagram";
  ruleType: "daily" | "weekly";
  limit: number;
}

// "accountSettings": {
//               "followLimit": 40,
//               "followLimitMax": 40,
//               "messageFollowUpLimit": 40,
//               "messageFollowUpLimitMax": 40,
//               "messageLimit": 40,
//               "messageLimitMax": 40,
//               "inMailFollowUpLimit": 40,
//               "inMailFollowUpLimitMax": 40,
//               "inMailLimit": 40,
//               "inMailLimitMax": 40,
//               "profileViewLimit": 40,
//               "profileViewLimitMax": 40,
//               "postLikeLimit": 40,
//               "postLikeLimitMax": 40,
//               "startLimit": 50,
//               "connectioRequestTarget": 25,
//               "connectioRequestTargetMax": 40,
//               "singleConnWeeklyLimit": 200,
//               "linkedInAccountId": 0,
//               "isValid": true,
//               "isValidLimits": true,
//               "id": 40632
//           }

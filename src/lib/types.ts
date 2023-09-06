export type Comment = {
  id: string;
  commenter: {
    name: string;
    profilePicture?: string;
  };
  date?: string;
  isoDate?: string;
  content: string;
  replies?: Comment[];
};

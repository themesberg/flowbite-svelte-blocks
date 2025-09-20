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

export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
}

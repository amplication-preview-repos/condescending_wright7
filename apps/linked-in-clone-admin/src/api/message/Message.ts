export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  timestamp: Date | null;
  fromUser: string | null;
  toUser: string | null;
};

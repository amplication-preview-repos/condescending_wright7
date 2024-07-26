export type Connection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  fromUser: string | null;
  toUser: string | null;
};

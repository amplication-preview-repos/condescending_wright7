import { Connection as TConnection } from "../api/connection/Connection";

export const CONNECTION_TITLE_FIELD = "fromUser";

export const ConnectionTitle = (record: TConnection): string => {
  return record.fromUser?.toString() || String(record.id);
};

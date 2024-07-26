import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "fromUser";

export const MessageTitle = (record: TMessage): string => {
  return record.fromUser?.toString() || String(record.id);
};

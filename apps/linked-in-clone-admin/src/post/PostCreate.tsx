import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <NumberInput step={1} label="likes" source="likes" />
        <div />
        <TextInput label="author" source="author" />
      </SimpleForm>
    </Create>
  );
};

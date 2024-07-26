import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <NumberInput step={1} label="likes" source="likes" />
        <div />
        <TextInput label="author" source="author" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="headline" source="headline" />
        <TextInput label="summary" multiline source="summary" />
        <div />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};

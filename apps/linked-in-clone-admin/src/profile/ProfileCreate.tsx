import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="headline" source="headline" />
        <TextInput label="summary" multiline source="summary" />
        <div />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};

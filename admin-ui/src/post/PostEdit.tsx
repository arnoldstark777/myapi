import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <div />
        <TextInput label="image" source="image" />
        <BooleanInput label="nsfw" source="nsfw" />
        <BooleanInput label="published" source="published" />
        <TextInput label="thumbnail" source="thumbnail" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

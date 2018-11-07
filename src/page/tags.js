import React from 'react';
import {
    DeleteButton,
    EditButton,
    List,
    SaveButton,
    ShowButton,
    TextField,
    TextInput,
    SimpleForm,
    required,
    Edit,
    SimpleShowLayout,
    Show
} from 'react-admin';

import {
    DragPreview,
    IgnoreFormProps,
    // NodeView,
    NodeForm,
    Tree,
    NodeActions,
} from 'ra-tree-ui-materialui';


// import { Edit, SimpleForm, TextField, TextInput, required } from 'react-admin';
const TagDragPreview = props => (
    <DragPreview {...props}>{({ node }) => node.record.tagname}</DragPreview>
);

const CustomNodeActions = props => (
    <NodeActions {...props}>
        <SaveButton variant="flat" />
        <IgnoreFormProps>
            <EditButton />
            <ShowButton />
            <DeleteButton />
        </IgnoreFormProps>
    </NodeActions>
);

export const TagList = props => (
    <List {...props} perPage={1000}>
        <Tree
            allowDropOnRoot
            enableDragAndDrop
            parentSource="fatherid"
            dragPreviewComponent={TagDragPreview}
        >
            <NodeForm actions={<CustomNodeActions />}>
                <TextInput source="tagname" />
            </NodeForm>
        </Tree>
    </List>
);


export const TagEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="tagname" validate={[required()]} />
        </SimpleForm>
    </Edit>
);


export const TagShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="tagname" />
        </SimpleShowLayout>
    </Show>
);

// export default {
//     edit: TagEdit,
//     list: TagList,
//     show: TagShow,
// };

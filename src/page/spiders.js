// in src/users.js
import React from 'react';
import { Filter, FormTab, TabbedForm, List, Datagrid, EmailField,SelectArrayInput, ReferenceArrayInput,TextField,UrlField,TextInput,EditButton, ReferenceInput,SelectInput,Edit,SimpleForm,DisabledInput,LongTextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import SegmentsField from './SegmentsField';
// import { SelectInput } from 'admin-on-rest';
//列表
export const spidersList = (props) => (
    
    <List 
        title="爬虫内容管理" 
        {...props} 
        filters={<SpidersFilter />}
        perPage={20}
        sort={{ field: 'id', order: 'ASC' }}
    >
        <Datagrid>
                <TextField source="id" />
                <TextField label="内容标题" source="title" />
                {/* <UrlField source="website" label="原文链接" source="fromurl" /> */}
                <TextField label="来源爬虫" source="fromspider" />
                <TextField label="状态" source="status_name" />
                <SegmentsField />
            <EditButton />
        </Datagrid>
    </List>
);

//编辑标题
const SpidersTitle = ({ record }) => {
    return <span>内容编辑: {record ? `<${record.title}>` : ''}</span>;
};

//修改
export const spidersEdit = (props) => (
    <Edit title={<SpidersTitle />} {...props}>
     <TabbedForm>
        <FormTab label="标题&标签">
        {/* <SimpleForm> */}
            <DisabledInput source="id" />
            <TextInput label="内容标题" source="title" />
            {/* <ReferenceInput label="状态" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput> */}
            <DisabledInput label="当前内容状态:" source="status_name" />
             <SelectInput 
                label="重新设置状态" 
                source="status" 
                choices={[
                            { status: '0', status_name: '未爬内容' },
                            { status: '1', status_name: '已爬内容' },
                            { status: '2', status_name: '已审核' },
                            { status: '3', status_name: '已作废' },
                            { status: '4', status_name: '作废' },
                        ]} 
                optionText="status_name" 
                optionValue="status"
            />  
            {/* <TextInput label="标签" source="tags" /> */}
                {/* <SelectArrayInput label="Tags" source="categories" choices={[
                    { id: 'music', name: 'Music' },
                    { id: 'photography', name: 'Photo' },
                    { id: 'programming', name: 'Code' },
                    { id: 'tech', name: 'Technology' },
                    { id: 'sport', name: 'Sport' },
                ]} 
                /> */}
            <ReferenceArrayInput label="标签"  source="tags" reference="spiderstags">
                <SelectArrayInput  optionText="tagname"    optionValue="tagname"  />
            </ReferenceArrayInput>
        </FormTab>
        <FormTab label="内容">
            {/* <DisabledInput source="id" /> */}
            {/* <DisabledInput label="内容标题" source="title" /> */}
            <RichTextInput label="内容" source="内容"  source="content" />
        </FormTab>
        </TabbedForm>
    </Edit>
);

const SpidersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <SelectInput label="文章状态" source="status" choices={[
            { id: '0', name: '未爬内容' },
            { id: '1', name: '已爬内容' },
            { id: '2', name: '已审核' },
            { id: '3', name: '已作废' },
            { id: '4', name: '作废' },
        ]} />   
        <TextInput
            label="标签"
            source="内容标签"
            defaultValue
        />
    </Filter>
);

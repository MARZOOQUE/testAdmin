import React from 'react';
import { List, Datagrid, TextField, DateField, useRecordContext } from 'react-admin';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IGTable } from './IGTable';
     

export const IconField = (props: any) => {
    const record = useRecordContext(props);
    return <VisibilityOutlinedIcon onClick={() => {console.log("[DEBUG] ", record);}}></VisibilityOutlinedIcon>
}

export const SampleResource = () => (
    <IGTable sort={"ASC"}>
        <TextField source="id" label={"ID"} />
        <TextField source="title"/>
        <DateField source="published_at"/>
        <IconField source="id" label=""></IconField>
    </IGTable>
);
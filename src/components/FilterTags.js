import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FilterTags({data,title,handleChange:change,multiple}) {
    const [value, setValue] = React.useState([]);
    const handleChange = (e,option) => {
        // console.log(data)
        e.persist()
        if(option){
            console.log(option)
            change(option,title)
        }
    }
    return (
    <Autocomplete
        multiple={multiple}
        id="filter-tags"
        options={data}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
            <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    value={option.value}
                />
                {option.title}
            </li>
        )}
        onChange={(e, options)=>{handleChange(e, options)}}
        renderInput={(params) => (
            <TextField {...params} label={title} placeholder={title} />
        )}
    />
);
}
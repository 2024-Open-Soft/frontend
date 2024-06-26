import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FilterTags({data,title,handleChange:change,multiple}) {
    const handleChange = (e,option) => {
        e.persist()
        if(!multiple && option === null){
            change(-1,title)
        }
        if(option){
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
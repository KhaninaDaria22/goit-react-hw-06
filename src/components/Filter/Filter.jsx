
import { LabelList, Input } from "./Filter.styled";

 const Filter = ({value, onChange}) => {
    return (
        <LabelList> 
            Find contact by Name
            <Input type="text" value={value} onChange={onChange}></Input>
        </LabelList>
    );
 } 


export default Filter;
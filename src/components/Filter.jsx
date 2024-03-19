
// import { LabelList, Input } from "./Filter.styled";

 const Filter = ({value, onChange}) => {
    return (
        <label> 
            Find contact by Name
            <input type="text" value={value} onChange={onChange}></input>
        </label>
    );
 } 


export default Filter;
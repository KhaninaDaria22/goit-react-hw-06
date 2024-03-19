
// import { LabelList, Input } from "./Filter.styled";
import css from "../css/Filter.module.css"

 const Filter = ({value, onChange}) => {
    return (
        <label className={css.labelFilter}> 
            Find contact by Name
            <input className={css.inputFilter} type="text" value={value} onChange={onChange}></input>
        </label>
    );
 } 


export default Filter;
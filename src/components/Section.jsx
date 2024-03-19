import css from "../css/Section.module.css"


const Section = ({title, children}) =>  {
        return (
            <div className={css.diw}>
                <h1>{title}</h1>
                {children}
            </div>
        );
};

export default Section;
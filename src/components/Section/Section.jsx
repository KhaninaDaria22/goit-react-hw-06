import { FormSection, FormTitle } from "./Section.styled";

const Section = ({title, children}) =>  {
        return (
            <FormSection>
                <FormTitle>{title}</FormTitle>
                {children}
            </FormSection>
        );
};

export default Section;
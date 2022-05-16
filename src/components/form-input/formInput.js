import {FormInputLabel, FormInputItem, Group} from './formInput.styles.jsx';

const FormInput = ({handleChange,label, ...otherProps}) => {

    return (
        <Group>
            <FormInputItem onChange={handleChange} {...otherProps}/>
            {label? (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            ) : null}
        </Group>
    )
}

export default FormInput;
import './formInput.styles.scss';

const FormInput = ({handleChange,label, ...otherProps}) => {
    const inputChangeHandler = (e) => {
        handleChange(e.target);
    }
    
    return (
        <div className='group'>
            <input className='form-input' onChange={inputChangeHandler} {...otherProps}/>
            {label? (
                <label
                    className={`${otherProps.value.length? 'shrink' : ''} form-input-label `}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}

export default FormInput;
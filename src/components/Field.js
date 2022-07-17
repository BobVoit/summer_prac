import { onlyNumbers as inputOnlyNumbers } from "../modules/commonModule";

const Field = ({ 
    name = "", 
    change = () => {}, 
    value = "",  
    readOnly = false,
    textEnd = "",
    placeholder = "",
    onlyNumbers = false
}) => {

    const styles = {
        maxWidth: '1000px',
    }

    let onlyNumbersInput = () => {};
    if (onlyNumbers) {
        onlyNumbersInput = inputOnlyNumbers;   
    }

    return (
        <div className="field" style={styles}>
            <label
                className="field__label"
            >{name + " : "}</label>
            <div className="field__wrapper">
                <input 
                    type="text"
                    className="field__input"
                    onChange={change} 
                    value={value}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    onKeyPress={onlyNumbersInput}
                />
                <div className="field__text-end">{textEnd}</div>
            </div>
        </div>
    );
}

export default Field;
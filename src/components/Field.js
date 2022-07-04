

const Field = ({ 
    name = "", 
    change = () => {}, 
    value = "",   
}) => {

    const styles = {
        maxWidth: '1000px',
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
                />
            </div>
        </div>
    );
}

export default Field;
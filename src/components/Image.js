import imageFormula from "../images/formula.png";


const Image = ({  }) => {


    return (
        <div className="image_wrapper">
            <img 
                className="image_img"
                src={imageFormula}
                alt="formula"
            />
        </div>
    );
}


export default Image;
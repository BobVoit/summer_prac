

const Image = ({ image, altText }) => {


    return (
        <div className="image_wrapper">
            <img 
                className="image_img"
                src={image}
                alt={altText}
            />
        </div>
    );
}


export default Image;
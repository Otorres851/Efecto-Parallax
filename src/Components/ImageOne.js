import { Parallax } from 'react-parallax';
import Img1 from '../img/img1.jpg'

const ImageOne = () => (
    <Parallax className="image" bgImage={Img1} strength={800}>
        <div className="content">
            <span className="img-txt">Un viaje al espacio</span>
        </div>
    </Parallax>
);

export default ImageOne;
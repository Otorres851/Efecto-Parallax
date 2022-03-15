import { Parallax } from 'react-parallax';
import Img2 from '../img/img2.jpg';

const ImageTwo = () => (
    <Parallax className="image" bgImage={Img2} strength={800}>
        <div className="content">
            <span className="img-txt">Un viaje al espacio</span>
        </div>
    </Parallax>
);

export default ImageTwo;
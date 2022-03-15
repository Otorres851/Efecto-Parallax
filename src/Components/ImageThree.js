import { Parallax } from 'react-parallax';
import Img3 from '../img/img3.jpg';

const ImageThree = () => (
    <Parallax className="image" bgImage={Img3} strength={800}>
        <div className="content">
            <span className="img-txt">Un viaje al espacio</span>
        </div>
    </Parallax>
);

export default ImageThree;
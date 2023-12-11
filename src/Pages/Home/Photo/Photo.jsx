import TitleText from "../../../Shared/TitleText/TitleText";
import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "https://i.ibb.co/Z6phRVh/nadi-whatisdelirium-f-Z8uf-L52wg-unsplash.jpg", width: 800, height: 600 },
    { src: "https://i.ibb.co/7QRsnzR/milli-2l0-CWTpc-Ch-I-unsplash.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/yW9Ly8w/richard-brutyo-Sg3-Xwu-Epyb-U-unsplash.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/PWXz7yK/sergiu-valena-so8-R5r-TDTXM-unsplash.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/MSv7vyL/tolga-ahmetler-r-GJCQvqh-JM-unsplash.jpg", width: 1600, height: 900 },
    { src: "https://i.ibb.co/y5LXsgb/paul-hanaoka-w2-Ds-S-ZAP4-U-unsplash.jpg", width: 800, height: 600 },
];
const Photo = () => {
    return (
        <div className="max-w-6xl px-10 lg:px-0 mx-auto mb-20">
            <TitleText
                header={'Photo gallery'} />
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
    );
};

export default Photo;
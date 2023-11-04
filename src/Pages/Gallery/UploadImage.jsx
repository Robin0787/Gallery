import { useContext, useState } from 'react';
import { ImSpinner9 } from "react-icons/im";
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { galleryContext } from '../../Provider/Provider';
import UploadImageToCloud from './helper/UploadImageToCloud';

const UploadImage = () => {
    const [imageLoading, setImageLoading] = useState(false);
    const {dispatch} = useContext(galleryContext);

    const handleUploadImage = async (e) => {
        if (e.target.files[0]) {
            setImageLoading(true);
            const image = e.target.files[0];
            const formData = new FormData();
            formData.append("image", image);
            UploadImageToCloud(formData)
                .then(res => {
                    setImageLoading(false);
                    if(res.display_url) {
                        dispatch({type: 'add-image', payload: res.display_url});
                    }
                })
                .catch(err => {
                    setImageLoading(false);
                    console.log(err.message);
                })
        }
    }

    return (
        <div className="flex items-center justify-center w-full relative">
            {
                imageLoading ?
                    (
                        <div className='h-full w-full flex justify-center items-center text-blue-500 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-lg'>
                            <ImSpinner9 size={20} className="animate-spin duration-200"/>
                        </div>
                    )
                    :
                    (
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[210px]  md:h-full border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-transparent hover:bg-inherit duration-500 group">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 duration-300">
                                <MdOutlinePhotoLibrary size={50} />
                                <p className="text-base font-semibold mt-3">Upload Images</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleUploadImage} />
                        </label>
                    )
            }

        </div>
    );
};

export default UploadImage;
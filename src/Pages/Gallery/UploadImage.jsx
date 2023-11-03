import { MdOutlinePhotoLibrary } from 'react-icons/md';

const UploadImage = () => {
    return (
        <div className="flex items-center justify-center w-full h-full relative">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[210px] md:h-full border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-transparent hover:bg-inherit duration-500 group">
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 duration-300">
            <MdOutlinePhotoLibrary size={50}/>
                <p className="text-base font-semibold mt-3">Upload Images</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden"/>
        </label>
    </div>
    );
};

export default UploadImage;
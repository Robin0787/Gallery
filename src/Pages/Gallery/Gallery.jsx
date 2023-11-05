import { useContext, useRef } from 'react';
import Container from '../../Components/Container/Container';
import SingleImageCard from '../../Components/SingleImage/SingleImageCard';
import { galleryContext } from '../../Provider/Provider';
import UploadImage from './UploadImage';

const Gallery = () => {
    const { galleryData, dispatch } = useContext(galleryContext);

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleSort = () => {
        // Duplicate the original array
        let _duplicateImages = [...galleryData.images];

        // remove and save the dragged item content
        const draggedItemContent = _duplicateImages.splice(dragItem.current, 1,)[0];

        //switch the position 
        _duplicateImages.splice(dragOverItem.current, 0, draggedItemContent);

        // reset the position of ref
        dragItem.current = null;
        dragOverItem.current = null;

        // update the actual array
        dispatch({ type: 're-order', payload: _duplicateImages });
    }

    const handleDragStart = (e, index) => {
        dragItem.current = index;
        // Catching the dragging element and giving it's child opacity 0 so that user can relate the image/item is moving with the cursor;

        // Catching the dragging element
        const itemElement = e.target;

        // Giving dragging elements child to opacity 0. so that we can see that the dragged image has only border.
        itemElement.childNodes[0].style.opacity = '0';
    }

    const handleDragEnter = (e, index) => {
        e.preventDefault();
        dragOverItem.current = index;
    }
    
    const handleDragEnd = (e) => {
        // Catching the element and giving back the children opacity 1 so that the image can be displayed to the screen.

        const itemElement = e.target;

        // giving it's child element to opacity to 1.
        itemElement.childNodes[0].style.opacity = '1';

        // Sorting the element when the dragging ends.
        handleSort();
    }
    
    return (
        <section className='py-10'>
            <Container className="text-black p-5 md:p-10 rounded-md 
            dark:text-white dark:bg-primary duration-300 shadow-[0_0_5px] shadow-gray-300 dark:shadow-gray-600">
                <section className=' border-b-2 mb-8 pb-3 border-gray-100 dark:border-gray-800'>
                    <article className='flex flex-row justify-between items-center gap-5'>
                        <div className='flex justify-start items-center gap-4'>
                            <h1 className='text-2xl py-2 font-semibold'>Gallery</h1>
                            {
                                galleryData.selectedImages > 0 ?
                                    (
                                        <h1 className='text-base md:text-xl text-red-500'>Selected {galleryData.selectedImages} {" "}
                                            {
                                                galleryData.selectedImages === 1 ? "Image" : "Images"
                                            }
                                        </h1>
                                    )
                                    : ''
                            }
                        </div>
                        <div className={`${galleryData.selectedImages > 0 ? 'block' : 'hidden'}`}>
                            <button
                                className='text-sm md:text-base px-4 py-2 border-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 duration-300 rounded-md'
                                onClick={() => dispatch({ type: 'delete-selected' })}>
                                Delete  {' '}
                                {
                                    galleryData.selectedImages === 1 ? "Image" : "Images"
                                }
                            </button>
                        </div>
                    </article>
                </section>
                <>
                    {
                        galleryData.images.length > 0 ?
                            (
                                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 image-gallery overflow-hidden">
                                    {
                                        galleryData.images.map((item, index) => (
                                            <div key={item.id} className='gallery-item border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-grab'
                                                // Here is the code for drag and drop functionality.
                                                draggable
                                                onDragStart={(e) => handleDragStart(e, index)}
                                                onDragEnter={(e) => handleDragEnter(e, index)}
                                                onDragEnd={handleDragEnd}
                                                onDragOver={(e) => { e.preventDefault() }}>
                                                {/* This our single Image item */}
                                                <SingleImageCard item={item}/>
                                            </div>
                                        ))}
                                    <UploadImage />
                                </section>
                            )
                            :
                            (
                                <section className='py-10 text-center'>
                                    <h1 className='text-3xl mb-5'>Opps! No Images Here.</h1>
                                    <div className='mx-auto w-[206px]'>
                                        <UploadImage />
                                    </div>
                                </section>
                            )
                    }
                </>
            </Container>
        </section>
    );
};

export default Gallery;
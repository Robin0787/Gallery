import { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Container from '../../Components/Container/Container';
import SingleImageCard from '../../Components/SingleImage/SingleImageCard';
import { galleryContext } from '../../Provider/Provider';

const Gallery = () => {
    const { galleryData, dispatch } = useContext(galleryContext);

    return (
        <section className='py-10'>
            <Container className="text-black p-10 rounded-md 
            dark:text-white dark:bg-primary duration-300 shadow-[0_0_5px] shadow-gray-300 dark:shadow-gray-600">
                <section className=' border-b-2 mb-8 pb-3 border-gray-100 dark:border-gray-800'>
                    <article className='flex flex-col md:flex-row justify-between items-center gap-5'>
                        <div className='flex justify-start items-center gap-4'>
                            <h1 className='text-2xl py-2 font-semibold'>Gallery</h1>
                            {
                                galleryData.selectedImages > 0 ?
                                    (
                                        <h1 className='text-xl text-red-500'>Selected {galleryData.selectedImages} {" "}
                                            {
                                                galleryData.selectedImages === 1 ? "Image" : "Images"
                                            }
                                        </h1>
                                    )
                                    : ''
                            }
                        </div>
                        <div className={`${galleryData.selectedImages > 0 ? 'block' : 'hidden'}`}>
                            <button onClick={() => dispatch({ type: 'delete-selected' })}
                                className='px-4 py-2 border-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 duration-300 rounded-md'>Delete  {' '}
                                {
                                    galleryData.selectedImages === 1 ? "Image" : "Images"
                                }
                            </button>
                        </div>
                    </article>
                </section>
                <DragDropContext onDragStart={(props) => console.log(props)} onDragEnd={(props) => console.log(props)}>
                    <>
                        {
                            galleryData.images.length > 0 ?
                                (
                                    <Droppable droppableId='droppable-gallery'>
                                        {(provided, _) => (
                                            <section ref={provided.innerRef} {...provided.droppableProps}
                                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 image-gallery">
                                                {
                                                    galleryData.images.map((item, index) => (
                                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                                            {
                                                                (provided, _) => (
                                                                    <div
                                                                        key={item.id}
                                                                        className='gallery-item'
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}>
                                                                        <SingleImageCard item={item} />
                                                                    </div>
                                                                )
                                                            }
                                                        </Draggable>
                                                    ))}
                                            </section>
                                        )}

                                    </Droppable>
                                )
                                :
                                (
                                    <section className='py-10 text-center'>
                                        <h1 className='text-3xl '>Opps! No Images Here.</h1>
                                    </section>
                                )
                        }

                    </>
                </DragDropContext>
            </Container>
        </section>
    );
};

export default Gallery;
import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Container from '../../Components/Container/Container';

const dummyData = [
    {
        id: 1,
        text: 'First'
    },
    {
        id: 2,
        text: 'Second'
    },
    {
        id: 3,
        text: 'Third'
    },
    {
        id: 4,
        text: 'Fourth'
    },
    {
        id: 5,
        text: 'Fifth'
    }
]



const List = () => {
    const [data, setData] = useState(dummyData);

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);


    const handleSort = () => {
        // Duplicate the original array
        let _data = [...data];

        // remove and save the dragged item content
        const draggedItemContent = _data.splice(dragItem.current, 1,)[0];

        //switch the position 
        _data.splice(dragOverItem.current, 0, draggedItemContent);

        // reset the position of ref
        dragItem.current = null;
        dragOverItem.current = null;

        // update the actual array
        setData(_data);
    }


    return (
        <section>
            <Container className="text-black py-20 mt-10  rounded-md 
            dark:text-white dark:bg-primary duration-300 shadow-[0_0_5px] shadow-gray-300 dark:shadow-gray-600">
                <section className="flex justify-center items-center">
                    <div className='flex flex-col justify-center gap-4'>
                        {
                            data.map((item, index) => (
                                <div key={item.id}
                                    className='w-[200px] py-3 px-5 shadow-md border border-gray-200 rounded cursor-grab duration-500'
                                    draggable
                                    onDragStart={() => dragItem.current = index}
                                    onDragEnter={() => dragOverItem.current = index}
                                    onDragEnd={handleSort}
                                    onDragOver={(e) => e.preventDefault()}
                                >
                                    <div className='flex justify-start items-center gap-6'>
                                        <FaBars size={16} className='' />
                                        <h1 className="text-lg">{item.text}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </Container >
        </section >
    );
};

export default List;



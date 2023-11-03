import { useContext } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import { galleryContext } from "../../Provider/Provider";

const SingleImageCard = ({ item }) => {
    const { dispatch } = useContext(galleryContext);

    const handleSelect = (e) => {
        const checkStatus = e.target.checked;
        dispatch({ type: 'select', payload: item?.id, checkStatus });
        if (checkStatus) {
            dispatch({ type: 'increase-selected' });
        } else {
            dispatch({ type: 'decrease-selected' });
        }
    }

    function handleDelete() {
        if (item.isSelected) {
            dispatch({ type: 'delete-img', payload: item.id });
            dispatch({ type: 'decrease-selected' });
        } else {
            dispatch({ type: 'delete-img', payload: item.id });
        }
    }


    return (
        <div id={item.id} className='relative w-full rounded-lg group duration-500 border-2 border-gray-300 dark:border-gray-600 cursor-grabbing gallery-item'>
            <img src={item?.img} className='rounded-md bg-white' />

            <div className={`p-3 absolute ${item?.isSelected ? 'opacity-50' : 'opacity-0 group-hover:opacity-80'} top-0 left-0 w-full h-full rounded-md bg-black/40 duration-500`}>

                <div className="flex justify-between items-center gap-4">
                    <input onChange={handleSelect} checked={item.isSelected} type="checkbox" className=" w-5 h-4 rounded-md cursor-pointer" />
                    <button onClick={handleDelete} className="text-white hover:text-red-500 rounded-lg duration-300">
                        <FaTrashAlt size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default SingleImageCard;
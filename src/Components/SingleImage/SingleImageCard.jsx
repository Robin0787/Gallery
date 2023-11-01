import { useContext } from "react";
import { galleryContext } from "../../Provider/Provider";


const SingleImageCard = ({item}) => {
    const {dispatch} = useContext(galleryContext);

    const handleSelect = (e) => {
        const checkStatus = e.target.checked;
        dispatch({type: 'select', Payload: item?.id, checkStatus});
    }

    return (
        <div className='relative rounded-md group duration-500'>
            <img src={item?.img} className='rounded-md'/>
            <div className={`p-3 absolute ${item?.isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} top-0 left-0 w-full h-full rounded-md bg-black/40 duration-500`}>
                <input onChange={handleSelect} checked={item.isSelected} type="checkbox" className="float-right w-4 h-4 rounded-md cursor-pointer"/>
            </div>
        </div>
    );
};


export default SingleImageCard;
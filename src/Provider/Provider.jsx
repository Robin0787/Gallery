import { createContext, useEffect, useReducer, useState } from 'react';
import img10 from "../assets/image-1.webp";
import img1 from "../assets/image-10.jpeg";
import img9 from "../assets/image-11.jpeg";
import img11 from "../assets/image-2.webp";
import img3 from "../assets/image-3.webp";
import img4 from "../assets/image-4.webp";
import img5 from "../assets/image-5.webp";
import img6 from "../assets/image-6.webp";
import img7 from "../assets/image-7.webp";
import img8 from "../assets/image-8.webp";
import img2 from "../assets/image-9.webp";

export const galleryContext = createContext();

const initialState = {
    selectedImages: 0,
    images: [
        {

            id: 'DfKdfad423',
            img: img1,
            isSelected: false,
        },
        {
            id: 'KdDvdd323',
            img: img2,
            isSelected: false,
        },
        {
            id: 'TyeriW123',
            img: img3,
            isSelected: false,
        },
        {
            id: 'eIkef3833',
            img: img4,
            isSelected: false,
        },
        {
            id: 'Kdfjow3254',
            img: img5,
            isSelected: false,
        },
        {
            id: 'Pqoejc9454',
            img: img6,
            isSelected: false,
        },
        {
            id: 'LTddQk3492',
            img: img7,
            isSelected: false,
        },
        {
            id: 'dnvdDj234',
            img: img8,
            isSelected: false,
        },
        {
            id: 'UjdKde442',
            img: img9,
            isSelected: false,
        },
        {
            id: 'LaiDnd572',
            img: img10,
            isSelected: false,
        },
        {
            id: 'eondjf7294',
            img: img11,
            isSelected: false,
        },
    ]
}

const reducer = (state, action) => {
    const type = action.type;

    switch (type) {
        case 'select':
            return {
                ...state,
                images: state.images.map(item => {
                    if (item.id === action.payload) {
                        // If the item's id matches the id provided in the action
                        // Updating the isSelected property for this item
                        return { ...item, isSelected: action.checkStatus };
                    } else {
                        // If the id doesn't match, return the item as it is
                        return item;
                    }
                }),
            };
        case 'delete-img':
            // removing the deleted item
            return {
                ...state,
                images: state.images.filter(item => item.id !== action.payload)
            }
        case 'delete-selected':
            // removing all the selected items
            return {
                ...state,
                selectedImages: 0,
                images: state.images.filter(item => !item.isSelected),
            }
        case 'increase-selected': 
            return {
                ...state,
                selectedImages: state.selectedImages + 1
            }
        case 'decrease-selected': 
            return {
                ...state,
                selectedImages: state.selectedImages - 1
            }
        default:
            state
    }
}


const Provider = ({ children }) => {
    const [galleryData, dispatch] = useReducer(reducer, initialState);
    const [theme, setTheme] = useState('dark');

    // Setting the default theme
    useEffect(() => {
        // select html element
        const html = document.querySelector('html');
        //add or remove class dark in html elem according to theme in localStorage.
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme, setTheme]);

    // Changing the theme according to user preference
    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const values = { theme, setTheme, handleThemeSwitch, galleryData, dispatch };
    return (
        <galleryContext.Provider value={values}>
            {children}
        </galleryContext.Provider>
    );
};

export default Provider;
import Container from '../../Components/Container/Container';

import FolderStructure from "../../assets/Docs/FolderStructure.png";
import ProviderComp from "../../assets/Docs/ProviderComp.png";
import ProviderReducer from "../../assets/Docs/ProviderReducer.png";
import Drag_Drop_function from "../../assets/Docs/drag&drop.png";
import singleImagePic from "../../assets/Docs/singleImage.png";

const Docs = () => {

    return (
        <section>
            <Container className="text-gray-900 p-5 md:p-10 mt-10 rounded-md 
            dark:text-gray-300 dark:bg-primary duration-300 shadow-[0_0_5px] shadow-gray-300 dark:shadow-gray-600 font-light">
                <section className=''>
                    <article >
                        <h1 className='text-3xl md:text-4xl font-light'>Welcome to the Documentation for this Gallery Application</h1>
                    </article>
                    <article className="mt-5 md:mt-10">
                        <h1 className='text-xl md:text-3xl font-light'>Let's Get Started</h1>
                        <p className=' mt-3 text-lg '>This is a simple image-showing gallery web application where you can <span className='indicator'>add</span>, <span className='indicator'>delete</span>, and <span className='indicator'>re-order</span> images.</p>
                        <p className='text-lg mt-2'>
                            I have used <span className="indicator">Tailwind CSS</span> for styling and <span className="indicator">useReducer</span> hook for managing all the states of this project.
                        </p>

                    </article>
                    <article className="mt-5 font-light">
                        <h1 className='text-lg md:text-2xl font-light'>Let's Understand the folder structure of this project.</h1>
                        <img src={FolderStructure} className='rounded-md mt-5' />
                        <p className='text-lg mt-5'>
                            In this project's folder structure, we can see a src folder. In this <span className='indicator'>src</span> folder, all our main code is located.
                        </p>
                        <p className='text-lg mt-2'>
                            Our all images are located in the <span className="indicator">asset</span> folder. We have our all images here.
                        </p>
                        <p className='text-lg mt-2'>
                            And in the <span className="indicator">Components</span> folder, we have all the components that we have used in this project.
                        </p>
                        <p className='text-lg mt-2'>
                            In the <span className="indicator">Layout</span> folder, we have our <span className="indicator">Main.jsx</span> file which controls the layout of our project.
                        </p>
                        <p className='text-lg mt-2'>
                            And the most important folder is the<span className="indicator">Pages</span> folder which has all the pages that are displayed on the website.
                        </p>
                        <p className='text-lg mt-2'>
                            The <span className="indicator">Provider</span> folder controls all the states over the website for the gallery functionality. In this <span className="indicator">Provider</span> folder, we have a <span className="indicator">Provider.jsx</span> file where we control all the states of the website related to the gallery.
                        </p>
                        <p className='text-lg mt-2'>
                            The<span className="indicator">Routes</span> folder has the <span className="indicator">Routes.jsx</span> file which provides all the routes for this website.
                        </p>
                        <p className='text-lg mt-2'>
                            And the last two files one in <span className="indicator">index.css</span> which is for styling and another one is the <span className="indicator">main.jsx</span>, which is the root component of this website.
                        </p>
                    </article>
                    <hr className='my-5 border border-gray-200 dark:border-gray-700' />
                    <article className='mt-5'>
                        <h1 className='text-xl md:text-3xl font-light'>Let's Understand all the functionality for the image-gallery.</h1>

                        <h2 className='text-lg md:text-xl mt-3'>To understand the gallery functionality first we have to understand the <span className="indicator">Provider</span> file.</h2>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-5 md:gap-8 mt-5'>
                            <img src={ProviderComp} alt="provider-component" className='w-full md:w-1/2 rounded-md' />
                            <img src={ProviderReducer} alt="provider-component" className='w-full md:w-1/2 rounded-md' />
                        </div>
                    </article>
                    <article className='mt-5 text-lg'>
                        <p>
                            The <span className="indicator">Provider</span> component takes a component as a children and return another component by putting some states and values on it.
                        </p>
                        <p className='mt-2'>
                            The <span className="indicator">useEffect hook</span> and <span className="indicator">handleThemeSwitch</span> function are used for the white and dark theme functionality.
                        </p>
                        <p className='mt-2'>
                            You can see that I used the <span className="indicator">useContext</span> hook so that I can easily share my all the states and data with
                            each of every component in this application.
                        </p>
                    </article>
                    <hr className='my-5 border border-gray-200 dark:border-gray-700' />
                    <article className='mt-5 text-lg'>
                        <p>
                            In the <span className="indicator">initialState</span> object, I defined two properties one is the <span className="indicator">selectedImages</span> and another is <span className="indicator">images</span>. The <span className="indicator">images</span> property has an array of objects. Each object is the image that is displayed in the gallery.
                        </p>
                        <p className='mt-3'>
                            And I defined a reducer function which controls all the functionalities like, <span className="indicator">image selecting</span>, <span className="indicator">image deleting</span>, <span className="indicator">imaged adding</span> , <span className="indicator">image re-ordering</span>, etc.
                        </p>
                        <p className="mt-3">
                            We can also <span className="indicator">add new image</span> by uploading image. By clicking the <span className="indicator">upload image</span> field we can upload image.
                        </p>
                    </article>
                    <hr className='my-5 border border-gray-200 dark:border-gray-700' />
                    <article className='mt-5 text-lg'>
                        <h1 className='text-xl md:text-3xl font-light'>Let's understand the <span className="indicator">reducer</span> function.</h1>
                        <p className="mt-3">
                            In the <span className="indicator">reducer</span> function you can see that I have defined <span className="indicator">7 different cases</span> to control the gallery functionality.
                        </p>
                        <ul className='list-decimal text-base ml-4 mt-3 space-y-3'>
                            <li>The <span className="indicator">delete-img</span> case is used for selecting images which is selected by the user. This case receives a <span className="indicator">type</span>, <span className="indicator">payload</span>, and <span className="indicator">checkStatus</span> values in the action property. When a user select any image, then the dispatch function reaches here and set the items <span className="indicator">isSelected</span> Property true.</li>

                            <li>The <span className="indicator">delete-img</span> case is used for <span className="indicator">deleting single image</span> from the gallery. When a uer clicks on the delete icon of the image the dispatch function reaches here and filtered out that image from the state.</li>

                            <li>The <span className="indicator">delete-selected</span> case is used for deleting selected images. When a user click the delete images button the dispatch function will reach here and filtered-out all the selected images.</li>

                            <li>The <span className="indicator">increase-selected</span> case is used to increase the <span className="indicator">selectedImages</span> property of the state. When a user select an image then this case will execute and increase the state accordingly.</li>

                            <li>The <span className="indicator">decrease-selected</span>case is used to decrease the <span className="indicator">selectedImages</span> property of the state. When a user select an image then this case will execute and decrease the state accordingly</li>

                            <li>The <span className="indicator">re-order</span> case is used for re-ordering gallery images. When a user <span className="indicator">drag & drop</span> a element from it's original place then this case will update the state and display the re-ordered images accordingly. This case receives the updated array or images in the <span className="indicator">action.payload</span> property.</li>

                            <li>And the <span className="indicator">add-image</span> case is used for adding new images on the gallery. When a user click the add image field and upload a image, then only this case will execute and add the image to the gallery as well.</li>
                        </ul>
                    </article>
                    <hr className='my-5 border border-gray-200 dark:border-gray-700' />
                    <article className='mt-5 text-lg'>
                        <h1 className='text-xl md:text-3xl font-light'>How does the <span className="indicator">drag-and-drop</span> functionality work?</h1>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-5 md:gap-8 mt-7'>
                            <img src={singleImagePic} alt="provider-component" className='w-full md:w-1/2 rounded-md' />
                            <img src={Drag_Drop_function} alt="provider-component" className='w-full md:w-1/2 rounded-md' />
                        </div>
                        <p className='mt-5'>
                            Our all images are in the <span className="indicator">galleryData</span> state. And you can see that I mapped the galleryData and displayed all the images on the screen. Each of the <span className="indicator">div</span> includes our main <span className="indicator">SingleImageCard</span> component and In the <span className="indicator">SingleImageCard</span> component, our image component is defined.
                            Here I declared the <span className="indicator">div</span> for <span className="indicator">drag & drop</span> functionality.
                        </p>
                        <p className='mt-3'>
                            In the div I defined some <span className="indicator">DOM Event</span> for implementing the <span className="indicator">drag & drop</span> functionality.
                        </p>
                        <p className='mt-3'>
                            The <span className="indicator">draggable</span> property in the div for allowing to drag the element.
                        </p>
                        <p className='mt-3'>
                            The <span className="indicator">handleDragStart</span> function will execute when a user will start dragging an element. And the <span className="indicator">handleDragEnter</span> function will execute when the dragged element entered over another elements field.
                            And the <span className="indicator">handleDragEnd</span> function will execute when the user drop the element or cancel dragging.
                        </p>
                        <p className='mt-3'>
                            The <span className="indicator">handleSort</span> function sorts or re-orders the gallery images based on the image index.
                        </p>
                        <p className='mt-3'>
                            The <span className="indicator">handleDragStart</span> function receives the <span className="indicator">event as e and the index </span> of the image. Then it just stores it's index to the <span className="indicator">dragItem.current</span> ref.
                        </p>
                        <p className='mt-3'>
                            The <span className="indicator">handleDragEnter</span> function receives the <span className="indicator">event as e and the index </span> of the image. Then it just stores it's index to the <span className="indicator">dragOverItem.current</span> ref.
                        </p>
                        <p className='mt-3'>
                            And The <span className="indicator">handleDragEnd</span> function eventually called the <span className="indicator">handleSort</span> function so the the dragged element will be replaced on it's dragged position.
                        </p>
                    </article>
                </section>
            </Container >
            <div className="pb-10"></div>
        </section >
    );
};

export default Docs;



import styles from './PageLoading.module.css';

const PageLoading = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-[#0f172a] text-white text-3xl">
            <span className={styles.loader}></span>
        </div>
    );
};

export default PageLoading;
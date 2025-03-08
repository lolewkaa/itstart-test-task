import classes from './style.module.css';

const Preloader = () => (
        <div className={classes.preloader}>
            <div className={classes.preloader__container}>
                <span className={classes.preloader__round}></span>
            </div>
        </div>
);

export default Preloader;
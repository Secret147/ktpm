import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);
function Input({ type, name, value, className, title, small, onChange, large, placeholder, ...passProps }) {
    const props = {
        onChange,
        ...passProps,
    };
    const classes = cx('wrapper', {
        [className]: className,
        small,
        large,
    });

    return (
        <div className={classes} {...props}>
            <input
                type={type}
                placeholder={placeholder}
                className={cx('input')}
                name={name}
                onChange={onChange}
                value={value}
                required
            />
        </div>
    );
}
export default memo(Input);

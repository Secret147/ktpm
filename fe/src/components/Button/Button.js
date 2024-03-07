import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    type,
    href,
    primary = false,
    normal = false,
    small = false,
    large = false,
    fullwidth = false,
    className,
    leftIcon,
    rightIcon,
    text,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = 'Link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        normal,
        small,
        large,
        fullwidth,
    });
    return (
        <Comp className={classes} {...props} type={type} onClick={onClick}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
export default Button;

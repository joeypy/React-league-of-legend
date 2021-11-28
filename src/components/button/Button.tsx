import './button.scss';

type Props = {
    className: string;
    children: React.ReactNode;
};

const Button = (props: Props) => {
    return (
        <button className={`btn ${props.className}`}>{props.children}</button>
    );
};

export default Button;

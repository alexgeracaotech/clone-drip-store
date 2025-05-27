import './Button.css';

export const Button = ({children, width, height, color}) => {
  return(
    <button className="button"
      style={{
        width: width,
        height: height,
        color: color,
        backgroundColor: color && '#F5F5F5'
      }}
    >{children}</button>
  );
}

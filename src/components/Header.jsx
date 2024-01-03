const Header = ( props ) => {
    return (
    <div className="flex flex-col justify-center text-center m-3">
        <h1 className="">Hi, i'm {props.name}</h1>
        <p>These are all my own repositories on GitHub :D</p>
      </div>
    );
};

export default Header;
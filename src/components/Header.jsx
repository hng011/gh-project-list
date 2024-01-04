const Header = ( props ) => {
    return (
    <div className="flex flex-col justify-center text-center m-3">
        <h1 className="header-name">Hi, i'm {props.name}</h1>
        <p className="header-desc">Here all my Github repositories 📚</p>
      </div>
    );
};

export default Header;
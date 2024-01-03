const SearchBar = (props) => {
    return (
        <div className="flex justify-center mb-3">
            <input 
            type="text" 
            onChange={props.filterFunc}
            placeholder="Search Projects" 
            className="border-4 border-black-500 rounded-lg"
            />
        </div>
    );
};

export default SearchBar;
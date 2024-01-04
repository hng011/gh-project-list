const SearchBar = (props) => {
    return (
        <div className="flex justify-center mb-3 h-12 items-center">
            <input 
            type="text" 
            onChange={props.filterFunc}
            placeholder="Search Repo" 
            className="border-4 border-black-500 rounded-lg"
            />
        </div>
    );
};

export default SearchBar;
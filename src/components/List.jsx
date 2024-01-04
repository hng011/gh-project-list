const List = ( props ) => {

  const obj = props.data.length > 1 ? "repositories" : "repository";

  return (
    <div className="w-100 flex flex-col justify-center">

      <div className="text-center mb-2">
        Found {props.data.length} {obj}
      </div>

      <div className="flex justify-center flex-col items-center pb-2 mx-3">
      { props.data.map(i => { 
        return (
          <div key={i.id} className="border-4 border-black-500 m-3 p-3 w-[100%] hover:shadow-2xl hover:ease-in-out duration-300">
            <div className="text-center mb-3">
              <h3 className="text-lg font-bold">{i.name}</h3>
              <i className="text-[12px] font-light">Created at {new Date(i.created_at).toDateString()}</i>
              <p className="text-[15px] mb-4">{i.description}</p>
              <a href={i.html_url} target="blank" className="p-2 bg-teal-600 text-white hover:bg-teal-800 font-bold">
                See the repo 👉
              </a>
            </div>
          </div>
        );
      }) }
      </div>

    </div>
  );
};

export default List;
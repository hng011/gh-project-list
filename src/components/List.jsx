const List = ( props ) => {

  const obj = props.data.length > 1 ? "repositories" : "repository";

  return (
    <div>

      <div className="text-center mb-4">
        Found {props.data.length} {obj}
      </div>

      <div>
      { props.data.map(i => { 
        return (
          <div key={i.id}>
            <div className="text-center mb-3">
              <h3>{i.name}</h3>
              <p>Created at {new Date(i.created_at).toDateString()}</p>
              <p>{i.description}</p>
              <a href={i.html_url} target="blank">Go to the repo!</a>
            </div>
          </div>
        );
      }) }
      </div>

    </div>
  );
};

export default List;
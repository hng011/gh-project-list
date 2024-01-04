import Header from './components/Header'
import SearchBar from './components/SearchBar'
import List from './components/List'
import { useState, useEffect } from 'react';
import './assets/css/style.css'

// Alternatives
const data = require('./dummy.json'); 


const App = () =>{

  // To store API response
  const [repo, setRepo] = useState([]);
  const [filteredUser, setFilteredUser] = useState();

  // fetch gh api
  useEffect(() => {
    const githubAPI = async () => { 
      const res = await fetch("https://api.github.com/users/hng011/repos");
      // handle errors
      res.status === 200 ? 
      setRepo(await res.json()) 
      : 
      // Backup data
      setRepo(data);
      console.log(`Status ${res.status}`);
    };
    githubAPI().catch(e => setRepo(data));

  }, []);

  // Filtering
  const handleFilter = (event) => {
    const val = event.target.value;
    setFilteredUser(repo.filter(u => (u.name.toLowerCase()).includes(val.toLowerCase())));
  };

  // displayed data
  const showdata = filteredUser !== undefined ? filteredUser : repo;

  return (

    repo.length === 0 ? 
      <div className="flex justify-center mt-[21%] mb-[29%]">
        <span className=''>Loading....</span>
      </div>
      
      :

      <div className="flex flex-col justify-center align-middle items-center mt-10">
        
        <Header name="Hans" />

        <SearchBar filterFunc={handleFilter} />

        <List data={showdata}/>

      </div>
  )
};

export default App;


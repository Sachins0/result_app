import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Results from './components/Results';
import Pagination from './components/Pagination';

function App() {
  const [results, setResults] = useState([]);
  const [loading,setLoading]=useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const [resultsPerpage]=useState(10)  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:3000/api/resultsdb'); // Adjust URL for your backend endpoint
        setResults(response.data);
        setLoading(false)
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  function prePage(){
    if(currentPage!==indexOfFirstResult){
      setCurrentPage(currentPage-1)
    }
  }

  function nextPage(){
    if(currentPage!==indexOfLastResult){
      setCurrentPage(currentPage+1)
    }
  }

  const indexOfLastResult=currentPage*resultsPerpage
  const indexOfFirstResult=indexOfLastResult-resultsPerpage
  const currentResult=results.slice(indexOfFirstResult,indexOfLastResult)

  const paginate=pagenumber=>setCurrentPage(pagenumber)

  return (
    <div className='max-w-4xl mx-auto'>
    <div className='p-2 m-2'>
      <span class="text-4xl font-extrabold text-gray-700 sm:text-5xl">
        CSDS Result
      </span>
    </div>
      <div class="flex flex-col overflow-x-auto shadow-md sm:rounded-lg min-w-full align-middle m-2">
      <Results results={currentResult} loading={loading}/>
      </div>
      <Pagination nextPage={nextPage} prePage={prePage} resultsPerPage={resultsPerpage} totalResults={results.length} paginate={paginate}/>
    </div>
    
  );
}

export default App;

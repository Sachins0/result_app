import React from 'react'

const Results = ({results,loading}) => {
    if (loading) {
        return <h2>Loading...</h2>;
      }
  return (
    
    <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700'>
    <thead className='bg-gray-100 dark:bg-gray-700'>
      <tr>
        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">Name</th>
        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">Roll Number</th>
        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">Marks-1st yr</th>
        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">Sem1</th>
        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">Sem2</th>
        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">Marks-2nd yr</th>
        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">Sem3</th>
        {/* ... (add more table headers as needed) */}
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
      {results.map((result) => (
        <tr key={result._id} class="hover:bg-gray-100 dark:hover:bg-gray-700">
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{result.name}</td>  
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{result.rollNumber}</td>  
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{result.marks}</td>  
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{result.sem1Sgpa}</td>  
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{result.sem2Sgpa}</td>  
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{result.marks2}</td>  
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{result.sem3sgpa}</td>  
          {/* ... (add more table cells as needed) */}
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Results
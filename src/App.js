import logo from './logo.svg';
import './App.css';
// import main from './components/Main/main';
import React, { useState } from "react";


class  App extends React.Component {



  constructor() 
  {
    super();
    this.state={
      planes:[],
      pages:[],
      dataPerPage:10,
      currentPage:1,
      searchTerm:''
    }

    this.handleClick = this.handleClick.bind(this)


  }

  handleClick(event){
    this.setState({currentPage:Number(event.target.id)})

  }
  
  componentDidMount()
  {
    // Fetching the data from API and storing it as state
    fetch('https://planedata.free.beeceptor.com').then((resp)=>{
      resp.json().then((result)=>{
        console.log(result)
        this.setState({planes:result})
          })
        })
  }

  
  render() { 



    const {planes, pages, dataPerPage, currentPage, searchTerm} = this.state;
    const planesData = [] 
    planes.filter((value)=>{
      if(searchTerm=="")
      {
        return value
      }else if(value.name.toLowerCase().includes(searchTerm.toLowerCase()))
      {
        return value
      }
    }).map((plane, index)=>{
      planesData.push({plane})
    })


    // Render the plane rows based on pagination 
    const indexOfLast = currentPage * dataPerPage;
    const indexOfFirst = indexOfLast - dataPerPage;
    const planesPerPage = planes.slice(indexOfFirst,indexOfLast);
    const renderPlanes = planesPerPage.map((plane, index)=>{
      return (
        <>
        <tr className='table-row'>
        <td className='table-row-desc'>{indexOfFirst+index+1}</td>
        <td className='table-row-desc'>{plane.name}</td>
        <td className='table-row-desc'>{plane.country}</td>
        <td className='table-row-desc'>{plane.website}</td>
        <td className='table-row-desc'>{plane.head_quaters}</td>
        <td className='table-row-desc'>{plane.established}</td>
        </tr>
        </>
      );
    })



    // Stroing the numbers in an array for pagination
    const pagenumbers = [] 
    for(let i=1;i<=Math.ceil(this.state.planes.length/10);i++)
    {
      pagenumbers.push(i)
    }
    

    // Rendering the page numbers for pagination
    const renderPages = pagenumbers.map((number, index)=>{
      return (
        <li key={number} id={number} onClick={this.handleClick} className='list'>{number}</li>
      );
    })
      
    return (
      <div className="App">
        <div className='header'>
          <div className='title'>Airlines Information</div>
          <div className='search'>
            <input type="text" placeholder='Search...' className='search-field' onChange={event => {this.setState({searchTerm:event.target.value})}}></input>
          </div>
        </div>
        {/* Table creation for displaying plane information */}
        <table className='table'>
          <tr className='table-row'>
            <th className='table-row-desc'>No.</th>
            <th className='table-row-desc'>Name</th>
            <th className='table-row-desc'>Country</th>
            <th className='table-row-desc'>Website</th>
            <th className='table-row-desc'>Head Quaters</th>
            <th className='table-row-desc'>Established</th>
          </tr>
            {renderPlanes}
      </table>
      <div className='pagination'>
        {renderPages}
      </div>
    </div>
    );
  }
}
 
export default App;

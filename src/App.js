
import './App.css';
// import main from './components/Main/main';
import React from "react";



class  App extends React.Component {
  constructor() 
  {
    super();
    this.state={
      planes:[],
      pages:[],
      dataPerPage:12,
      currentPage:1,
      searchTerm:'',
      planesData:[]
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(event){
    this.setState({currentPage:Number(event.target.id)})
  }

  
  componentDidMount()
  {
    // Fetching the data from API and storing it as state   
      fetch('https://planesvalue.free.beeceptor.com').then((resp)=>{
      resp.json().then((result)=>{
        this.setState({planes:result})
          })
        })
  }


  render() { 
        const {planes, dataPerPage, currentPage, searchTerm} = this.state;
        // Filter the data based on searchTerm and store in an array planesData
        const planesData = [] 
          planes.filter((value)=>{
          if(searchTerm==="")
          {
            return value
          }else if(value.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
          }
        }).map((plane, index)=>{
          planesData.push({plane})
        })


        const indexOfLast = currentPage * dataPerPage;
        const indexOfFirst = indexOfLast - dataPerPage;
        const planesPerPage = planesData.slice(indexOfFirst,indexOfLast); 
        const renderPlanes = planesPerPage.map((plane, index)=>{
        return (
        <>
        <tr className='table-row'>
        <td className='table-row-desc'>{indexOfFirst+index+1}</td>
        <td className='table-row-desc'>{plane.plane.name}</td>
        <td className='table-row-desc'>{plane.plane.country}</td>
        <td className='table-row-desc'>{plane.plane.website}</td>
        <td className='table-row-desc'>{plane.plane.head_quaters}</td>
        <td className='table-row-desc'>{plane.plane.established}</td>
        </tr>
        </>
      );
    })
        
    //Stores the numbers in an array for pagination
    const pagenumbers = [] 
    for(let i=1;i<=Math.ceil(planesData.length/this.state.dataPerPage);i++)
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
        <div className='body-div'>
        <table className='table'>
          <thead>
          <tr className='table-row'>
            <th className='table-row-desc'>No.</th>
            <th className='table-row-desc'>Name</th>
            <th className='table-row-desc'>Country</th>
            <th className='table-row-desc'>Website</th>
            <th className='table-row-desc'>Head Quaters</th>
            <th className='table-row-desc'>Established</th>
          </tr>
          </thead>
            {renderPlanes}
      </table>
      <div className='footer'>
      <div className='pagination'>
        {renderPages}
      </div>
      </div>
      </div>
    </div>
    );
  }
}
 
export default App;


import React,{useState} from 'react';
import './AllCourses.css';
import Card from '@mui/material/Card';
import {Link} from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AllCourses() {
 
 const data = [
    {
        id : 1,
        image: {
          png: require("../../images/Java.png")
        },
        title : "Core Java"
    },
    {
        id : 2,
        image:  {
          png: require("../../images/CloudComputing.png")
        },
        title : "DevOps and Cloud Computing"
    },
    {
        id : 3,
        image:  {
          png: require("../../images/SoftwareTesting.png")
        },
        title : "Software Quality Assurance"
    },
    {
        id : 4,
        image:  {
          png: require("../../images/ReactSymbol.png")
        },
        title : "Frontend (ReactJS)"
    },
    {
        id : 5,
        image:  {
          png: require("../../images/NodeSymbol.png")
        },
        title : "Node js"
    },
    {
        id:6,
        image:  {
          png: require("../../images/UiUX.png")
        },
        title:"UI / UX"
    }]
const [products,setProducts] = useState(data);    
const [searchTerm,setSearchTerm] = useState("");

const HandleClickFunc = () =>{

  const filterBySearch = data.filter((val)=>{
    if(searchTerm == ""){
      return val;
    }
    else{
      return val.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })
  setProducts(filterBySearch);
}

const FilterItems = products.map((val)=>{
  const {id,title,image} = val;
  return(
  <div class="card"  key = {id} style={{height:'500px', width:'400px',borderRadius:'40px'}}>
<img src={image.png} style = {{width:'100%'}} alt="..."/>
  <div class="card-body" id = "CardBody1">
  <h3 id= "h3AllCour" >{title}</h3>
  </div>
    <Link to = {`/AllCourses/${id}`}><button className = "butonAllCOu">View Courses<img style={{backgroundColor:'#7C269B', marginLeft:'20px'}} src = {require('../../images/ArrowLeft.png')}/></button></Link>

</div>
  );
})
  return (
    <div className = "AllMainCourses">
       <h2 className = "h234">Purple Academy Courses Library</h2>
    <div className='MainInput'><input onChange={(event)=>setSearchTerm(event.target.value)} style={{width:'360px',border:'none',outline:'none', borderRadius:'30px',height:'40px',padding:'24px 30px', fontSize:'18px',marginLeft:'0px',marginTop:'0px'}} type = 'text' placeholder = "Search for courses"/><button  onClick = {HandleClickFunc} className ='btnAllC'>Search</button></div>
    <div className = "MainMaterialCard">
   <div className = "MainALLCOdiv container mt-5" style = {{gap:'30px'}}>
     {FilterItems}
      </div>
<br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br> 
    
    
    
    </div>
    </div>
  );
}

export default AllCourses;

import React,{useEffect} from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    let navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

useEffect(()=>{
    window.scrollTo(0, 0);
},[window.scrollY])
  return (
    <>
      <div className="container">
        <h1>Admin Panel</h1>
       <div className="text_admin">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
        <button onClick={() =>handlelogout() }>Logout</button>
       </div>
      </div>
    </>
  );
};

export default Admin;

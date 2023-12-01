import React  from 'react';
import './style.css';
import Card from '../Card';

function Shop() {
  // const [theme, setTheme] = useState("lightmod")

  // function handleToggle() {
  //   if (document.body.classList.toggle("darkmod")) {
  //     setTheme("darkmod")
  //   }
  //   else {
  //     setTheme("lightmod")
  //   }
    
    
  // }
  return (
    <div style={{backgroundColor:"lightmod"}}>
      <div className="head"> NEW SHOP</div>

      {/* <button onClick={handleToggle} className="darkmod">
        <i class="fa-solid fa-circle-half-stroke"></i>
      </button> */}

      <div className="card">
        <Card />
      </div>
    </div>
  );
}

export default Shop;

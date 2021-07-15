import React from 'react';

function Menu({food}) {
  return (
    <div  className="collapsible-menu">
    <input type="checkbox" id="menu" />
    <label > {food.name} </label>
    <div className="menu-content">
        <ul>
            <li>
              <div className="collapsible-menu">
            <input type="checkbox" id="menu" />                                                                                                                       
            <label >{/*choices */}</label>
            <div className="menu-content">
                <ul>
                    <li>
                      <div className="collapsible-menu">
                    <p>You might also want: </p>
            <input type="checkbox" id="menu" />
            <label >Dressing</label>
            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Blue Cheese</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Ranch</li>

                </ul>
            </div>
            </div>
            </li>
                    <li>
                      <div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Bread</label>
            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Flat</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Sour Dough</li>

                </ul>
            </div>
            </div></li>


                </ul>
            </div>
            </div></li>

            <li>
              <div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Greek</label>
            <div className="menu-content" >
                <ul>
                    <li><div className="collapsible-menu">
                    <p>You might also want: </p>
            <input type="checkbox" id="menu" />
            <label >Dressing</label>
            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Blue Cheese</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Ranch</li>

                </ul>
            </div>
            </div></li>
                    <li><div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Bread</label>
            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Flat</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Sour Dough</li>

                </ul>
            </div>
            </div></li>


                </ul>
            </div>
            </div></li>

            <li><div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Asian</label>
            <div className="menu-content">
                <ul>
                    <li><div className="collapsible-menu">
                    <p>You might also want: </p>
            <input type="checkbox" id="menu" />
            <label >Dressing</label>
            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Blue Cheese</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Ranch</li>

                </ul>
            </div>
            </div>
            </li>
                    <li>
                      <div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Bread</label>
            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Flat</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Sour Dough</li>
                </ul>
            </div>
            </div>
            </li>
                </ul>
            </div>
            </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Menu

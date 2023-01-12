import { useState } from "react";


const navigationItems = [
    {
        name: "Home",
        icon: "",
        link: "",
    },
    {
        name: "Projects",
        icon: "",
        link: "",
    },
    {
        name: "Blog",
        icon: "",
        link: "",
    },
    {
        name: "Contact",
        icon: "",
        link: "",
    },
]



function NavigationBar() {
    const [showNavBar, setShowNavBar] = useState(false);

    var navItems = navigationItems.map(o => <li><a href={o.link}>{o.name}</a></li>);
    
    if(showNavBar){
        return(
        <div className="navbar">
            <ul>
                {navItems}
            </ul>
        <button>Toggle Mobile Menu</button>
        </div>
        );
    } else {
        return(<><button onClick={setShowNavBar(!showNavBar)}>Toggle Mobile Menu</button></>) 
    }
}

export {NavigationBar}
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
    var navItems = navigationItems.map(i => <li><a href={i.link}>{i.name}</a></li>)
    return (<>
    <ul>
        {navItems}
    </ul>
    
    </>)
}

function MobileNavigationBar() {
    const [showNavBar, setShowNavBar] = useState(false);

    var navItems = navigationItems.map(o => <li><a href={o.link}>{o.name}</a></li>);
    
    if(showNavBar) {
        return(
            <div className="navbar mobile-only">
                <button onClick={() => setShowNavBar(!showNavBar)}>Toggle Mobile Menu</button>
                <ul>
                    {navItems}
                </ul>
            </div>
            );
    }
        return(
        <div className="navbar">
        <button onClick={() => setShowNavBar(!showNavBar)}>Toggle Mobile Menu</button>
        </div>
        );
}

export {MobileNavigationBar, NavigationBar}
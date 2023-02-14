import { useState } from "react";


const navigationItems = [
    {
        name: "Home",
        icon: "home",
        link: "",
    },
    {
        name: "Projects",
        icon: "terminal",
        link: "",
    },
    {
        name: "Blog",
        icon: "summarize",
        link: "",
    },
    {
        name: "Contact",
        icon: "person",
        link: "",
    },
]

function NavigationBar() {
    var navItems = navigationItems.map(i => <li><a href={i.link}> <span class="material-symbols-outlined">{i.icon}</span> {i.name}</a></li>)
    return (<>
    <div class="navbar desktop-navbar-wrapper desktop-only">
        <div class="desktop-navbar">
            <ul>
                {navItems}
            </ul>
        </div>
    </div>
    
    </>)
}

function MobileNavigationBar() {
    const [showNavBar, setShowNavBar] = useState(false);

    var navItems = navigationItems.map(o => <li><a href={o.link}> <span class="material-symbols-outlined">{o.icon}</span> {o.name}</a></li>);
    
    if(showNavBar) {
        return(
            <div className="navbar mobile-only">
                <button onClick={() => setShowNavBar(!showNavBar)}>
                <span class="material-symbols-outlined">
                close
                </span>
                </button>
                <ul>
                    {navItems}
                </ul>
            </div>
            );
    }
        return(
        <div className="navbar mobile-only">
        <button onClick={() => setShowNavBar(!showNavBar)}>
        <span class="material-symbols-outlined">
        menu
        </span>
        </button>
        </div>
        );
}

export {MobileNavigationBar, NavigationBar}
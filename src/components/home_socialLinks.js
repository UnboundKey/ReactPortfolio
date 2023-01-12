const links = [
    {
        iconAlt: "YouTube Icon", 
        iconURL: "./icons/youtube_social_circle_dark.png",
    linkAnchor: "http://youtube.com"
    },
    
    // {
    //     iconAlt: "Twitter Icon", 
    //     iconURL: "./icons/logo blue.svg",
    //     linkAnchor: "http://twitter.com"
    // },
    
    {iconURL: "./icons/github-mark.png",
    iconAlt: "GitHub Icon", 
    linkAnchor: "http://github.com/UnboundKey"
    },

]


function SocialList() {

    const linkList = links.map(o => 
    <li className="socials-item">
        <a href={o.linkAnchor} className="socialsLink">
            <img src={o.iconURL} alt={o.iconAlt}/>
        </a>
    </li>
    );


    return (
    <div className="SocialsList">
        <h2>My Socials</h2>
        <ul>
            {linkList}
        </ul>
    </div>
    )
}

export {SocialList}
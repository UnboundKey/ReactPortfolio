const links = [
    {
        iconAlt: "YouTube Icon", 
        iconURL: "./icons/youtube_social_circle_dark.png",
    linkAnchor: "http://youtube.com"
    },
    
    {
        iconAlt: "Twitter Icon", 
        iconURL: "",
        linkAnchor: "http://twitter.com"
    },
    
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
            {/* <li><a href="#"><img src="" alt="youtube-icon"/></a></li>
            <li><a href="#"><img src="" alt="twitter-icon"/></a></li>
            <li><a href="#"><img src="" alt="github-icon"/></a></li> */}
        </ul>
    </div>
    )
}

export {SocialList}
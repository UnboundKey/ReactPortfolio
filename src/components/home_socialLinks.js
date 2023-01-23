const links = [
    {
        iconAlt: "YouTube Icon", 
        iconURL: "./icons/youtube_social_circle_white.png",
        linkAnchor: "http://youtube.com/@ASockless"
    },
    
    {
        iconAlt: "Twitter Icon", 
        iconURL: "./icons/logo blue.svg",
        linkAnchor: "http://twitter.com/dressedrice"
    },
    
    {
        iconURL: "./icons/Mastodon_Logotype_(Simple).svg",
        iconAlt: "Mastodon",
        linkAnchor: "https://mastodon.social/@Sockless"
    },

    {
        iconURL: "./icons/4373281_artstation_logo_logos_icon.png",
        iconAlt: "ArtStation",
        linkAnchor: "https://www.artstation.com/norbe"
    },
    {
        iconURL: "./icons/github-mark.png",
        iconAlt: "GitHub Icon", 
        linkAnchor: "http://github.com/UnboundKey"
    },
    {
        iconURL: "./icons/LinkedIn_icon.svg",
        iconAlt: "LinkedIn",
        linkAnchor: "https://www.linkedin.com/in/benjamin-nordin-a109932a/"
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
        <>
        <div className="SocialsList">
        <ul>
            {linkList}
        </ul>
        <p><a href="mailto:asockless@outlook.com">asockless@outlook.com</a></p>
        </div>
        </>
    )
}

export {SocialList}
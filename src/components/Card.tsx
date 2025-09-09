import { Share } from "../assets/icons/share"
import { Delete } from "../assets/icons/delete"
const defaultclass = "p-2 my-3 mx-3 bg-white rounded-md shadow-md max-w-72 border-gray-200 border "
import { Twitter } from "../assets/icons/twitter";
import { Youtube } from "../assets/icons/youtube";
export interface CardsType{
    "_id" : string;
    "title" : string;
    "link" : string;
    "type" : "youtube" | "tweet";

}
const getYouTubeEmbedUrl = (url:string) => {
    let videoId = '';
    try {
        if (url.includes('youtu.be/')) {
            videoId = new URL(url).pathname.substring(1);
        } else if (url.includes('youtube.com/watch')) {
            const urlParams = new URL(url).searchParams;
            videoId = urlParams.get('v') ?? '';
        } else if (url.includes('youtube.com/embed/')){
            videoId = new URL(url).pathname.split('/embed/')[1];
        }
    } catch (error) {
        console.error("Invalid YouTube URL:", error);
        return "";
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
};
export function Card({ title, link, type }: CardsType){
    const embedLink = type === "youtube" ? getYouTubeEmbedUrl(link) : link.replace("x.com", "twitter.com");
    return <div className={`${defaultclass}`}>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                        <div className="text-gray-500">
                            {type==="tweet" &&  <Twitter size="md"/>}
                            {type==="youtube" &&  <Youtube size="md"/>}
                        </div>
                        <div className="font-semibold">
                            {title}
                        </div>
                </div>
                <div className="flex justify-center gap-3 text-gray-500 hover:cursor-pointer">
                    <div>
                        <a href={link} target="_blank">
                            <Share size="md"/>
                        </a>
                        
                    </div>
                        <Delete size="md"/>  
                </div>
 
            </div>
                <div className="flex justify-center w-full">
                {type === "tweet" && embedLink && (
                    <blockquote className="twitter-tweet" data-theme="light">
                        <a href={embedLink}></a>
                    </blockquote>
                )}
                {type === "youtube" && embedLink && (
                    <div className="w-full">
                        <iframe 
                            className="w-full h-full rounded-md" 
                            src={embedLink}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </iframe>
                    </div>
                )}
            </div>
            </div>
}
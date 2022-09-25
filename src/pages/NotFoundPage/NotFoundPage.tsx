import { Component } from "react";
import JohnTravolta from "./images/johnTravolta.gif";

interface NotFoundPageProps {}

interface NotFoundPageState {}

class NotFoundPage extends Component<NotFoundPageProps, NotFoundPageState> {
    /*readonly state: NotFoundPage = {};*/

    render() {
        return(
            <div className="container my-5 shadow">
                <div className="textContainer p-1 shadow bg-black text-center">
                    <h4 className="text" style={{color: "white"}}>[404] Hát sajnos ilyen oldal nem létezik...</h4>
                </div>
                <div className="gifContainer text-center">
                    <img src={JohnTravolta} alt="John Travolta értetlenül néz, hogy mit a fenét keresel itt"/>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
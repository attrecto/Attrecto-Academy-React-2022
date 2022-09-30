import React, {Component, useEffect} from 'react'
import Button from "../../components/button/Button";
import { useNavigate } from 'react-router-dom'


class NotFoundPage extends Component {
    render() {
        return (
            <div style={{color: "#01579B", marginLeft: "120px", paddingTop: "100px"}}>
                <div>
                    <p style={{
                        border: "1px solid #01579B",
                        borderRadius: "15px 50px",
                        width: "600px",
                        fontSize: "145px",
                        padding: "5px"
                    }}>Error 404</p>
                </div>
                <div>
                    <h5 style={{marginLeft: "10px", marginTop: "10px"}}>Ouch! Something went wrong ;(</h5>
                </div>
            </div>

        );
    };
}

export default NotFoundPage;

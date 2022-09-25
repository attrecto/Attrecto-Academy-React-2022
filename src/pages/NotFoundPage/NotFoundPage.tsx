import React from "react";
import picture from "./lolcats-dont-worry.jpg"

console.log(picture)

const NotFoundPage = () => {
    return <div><h1>404 PAGE NOT FOUND</h1><img src={picture} alt='kismacskak'/></div>;
};

export default NotFoundPage;

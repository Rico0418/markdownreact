import React from "react";
import { marked } from "marked";

const Preview = ({value}) =>{
    const getMarkdownText = () =>{
        const rawMarkup = marked(value,{sanitize: true});
        return {__html: rawMarkup};
    };
    return(
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}
        style={{border: '1px solid black', padding:'20px', width: '90%'}}>

        </div>
    );
};
export default Preview;
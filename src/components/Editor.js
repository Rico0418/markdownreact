import React from 'react';

const Editor = ({value,onChange}) =>{
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent: 'center', padding: '10px'}}>
            <textarea
                id="editor"
                value={value}
                onChange={onChange}
                style={{width:'80%',height:'300px', border: '1px solid black'}}
            />
        </div>
    );
};
export default Editor;
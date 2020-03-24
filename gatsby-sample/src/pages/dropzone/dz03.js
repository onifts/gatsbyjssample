import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const dz02 = () => {

    function Dropzone(props) {

        const onDrop = useCallback(acceptedFiles => {
            
            // Do something with the files
            console.log('====> ',acceptedFiles)
        
        }, [])

        const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
            
            // Disable click and keydown behavior
            noClick: true,
            noKeyboard: true,
            onDrop:onDrop
        });
    
        const files = acceptedFiles.map(file => (
            
            <li key={file.path}>
                {file.path} - {file.size} bytes
            </li>

        ));
    
        return (
            
            <div className="container">
                <div {...getRootProps({className: 'dropzone'})}>
                    
                    <input {...getInputProps()} />
                    
                    <p>Drag 'n' drop some files here</p>
                    
                    <button type="button" onClick={open}>
                        Open File Dialog
                    </button>

                </div>
                <aside>
                    
                    <h4>Files</h4>
                    <ul>{files}</ul>

                </aside>
            </div>

        );
    }
      
    return (
        <Dropzone />
    );

} // end dz02

export default dz02;

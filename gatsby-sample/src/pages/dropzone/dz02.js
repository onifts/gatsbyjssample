import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const dz02 = () => {

    function MyDropzone() {
        
        const onDrop = useCallback(acceptedFiles => {
          // Do something with the files
        }, [])
        
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      
        return (
          <div {...getRootProps()}>
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
            ????{isDragActive?1:0}
          </div>
        )

    }

    return (
        <MyDropzone />
    );

} // end dz02

export default dz02;

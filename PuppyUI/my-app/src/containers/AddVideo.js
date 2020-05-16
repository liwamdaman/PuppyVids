import React, { useRef } from 'react';

function AddVideo({uploadError, uploadVideo}) {
  const textInput = useRef();
  return (
    <div>
      <div className="UploadErrorMessage">
        {uploadError}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!textInput.current.value.trim()) {
            return;
          }
          uploadVideo(textInput.current.value);
          textInput.current.value = '';
        }}
      >
        <input ref={textInput} />
        <button type="submit">Add Your Own Youtube Video!</button>
      </form>
      <div className="UploadNote">
        Note: Your new video will be played after adding it.
      </div>
    </div>    
  )
}

export default AddVideo;
import React from 'react';
import previewContext from '../Context/previewContext';

const usePreview = () => {
  return (
    React.useContext(previewContext)
  )
}

export default usePreview
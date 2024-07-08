import React from 'react'

function DataPreview({data, replacer, space = 2}) {
  return (
    <pre>
        {JSON.stringify(data,replacer,2)}
    </pre>
  )
}

export default DataPreview
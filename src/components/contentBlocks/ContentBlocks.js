//Packages
import React from 'react'

//Components
import BioBlock from './BioBlock'
import CopyBlock from './CopyBlock'
// import ProcessBlock from './ProcessBlock'

const ContentBlocks = ({content}) => {
  function renderBlock(block) {
    switch (block._type) {
      case 'bioBlock':
        return <BioBlock key={block._key} content={block} />
      case 'copyBlock':
        return <CopyBlock key={block._key} content={block} />
      // case 'processBlock':
      //   return <ProcessBlock key={block._key} content={block} />
      default:
        return <span style={{
          backgroundColor: 'red',
          color: 'white',
          marginRight: '10px'
        }}>UNKNOWN TYPE: {block._type}</span>
    }
  }

  return content
    ? <>{content.map(block => renderBlock(block))}</>
    : <span style={{
      backgroundColor: 'red',
      color: 'white',
      marginRight: '10px'
    }}>MISSING: Content in ContentBlocks</span>
}

export default ContentBlocks
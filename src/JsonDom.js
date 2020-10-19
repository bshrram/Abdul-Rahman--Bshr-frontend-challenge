import React, {useState} from 'react';

const JsonDom = (props) => {
  const {data, display} = props;
  const {tagName = 'div', className = '', style = null, children = []} = data;
  
  return React.createElement(
    tagName,
    {
      className,
      style,
      onMouseOver: (e) => {
        const rect = e.target.getBoundingClientRect()
        const boxData = {
          X: rect.x,
          Y: rect.bottom
        }
        if(display)
          display(boxData)
      }
    },
    _createChildren(children),
  );

}

function _createChildren(children) {
  if (Array.isArray(children)) {
    return children.map((childData, i) => <JsonDom data={childData} key={i} />);
  } else if (typeof children === 'string') {
    return children;
  } else {
    return null;
  }
}

export default JsonDom
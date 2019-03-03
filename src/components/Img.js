import React from 'react';

const Img = props => <img {...props} src={imageResource.read(props.src)} />;

export default Img;

import PropTypes from 'prop-types';
import React from 'react';

import ImageContent from './ImageContent';

const ImageAttachment = ({ attachment }) => (
  <ImageContent alt={attachment.name} src={attachment.thumbnailUrl || attachment.contentUrl} />
);

ImageAttachment.propTypes = {
  attachment: PropTypes.shape({
    contentUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    thumbnailUrl: PropTypes.string
  }).isRequired
};

export default ImageAttachment;

import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import Copy from '@material-ui/icons/FileCopy';

class CopyUrl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    }
  }
  
  render() {
    return (
      <CopyToClipboard 
        text="/abd123"
        onCopy={() => this.setState({copied: true})}
      >
        <Button color="primary"><Copy/>Copy</Button>
      </CopyToClipboard>    )
  }

  
}

export default CopyUrl;
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React from 'react';
//&& this.deleteRound(this.state.deleteId)

class Delete extends React.Component {
    constructor(props)
    {
        super(props);
    }
render(){
    
  return(

<>
<Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={this.props.handleClose }>
                            Confirm Delete
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>

);
}
  }


  export default Delete;
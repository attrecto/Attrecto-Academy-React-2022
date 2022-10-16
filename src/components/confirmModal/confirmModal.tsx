import React from 'react'
import Modal from "react-bootstrap/Modal";
import { User } from '../../models/user.model';
import Button from '../button/button';

interface confirtmModalProps{
    show: boolean
    title:string;
    content:string;
    handleClose: (answear:boolean) => void;
    
}
function confirmModal({show,title, content, handleClose}:confirtmModalProps) {
  return (
    <Modal show={show} onHide={()=>{handleClose(false)}}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{handleClose(true)}}>Yes</Button>
        <Button onClick={()=>{handleClose(false)}}>No</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default confirmModal
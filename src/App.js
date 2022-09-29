import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Modalcomp from './components/Modalcomp/Modalcomp';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handelAddToCart = (gun) => {
    const newCart = [...cart, gun]

    setCart(newCart)
   }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])


  return (
    <div>
      <Navbar cart = {cart} openModal = {openModal}></Navbar>
     
     <div className="cards-container">
     {
        guns.map(gun =>  <Card key = {gun.id} gunData = {gun} handelAddToCart = {handelAddToCart} />)
      }
     </div>
     <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>❌</button>
        <div>
        {
        cart.map(item => <Modalcomp item ={item} ></Modalcomp>)
      }
        </div>
      </Modal>
    </div>
  );
}

export default App;
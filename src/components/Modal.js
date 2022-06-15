import { Link } from "react-router-dom";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1
  }, 
  hidden: {
    opacity: 0
  }
}

const modal = {
  visible: {
    y: "200px", 
    opacity: 1, 
    transition: {
      delay: 0.5
    }
  }, 
  hidden: {
    y: "-100vh", 
    opacity: 0
  }
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBefreEnter>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}          
          initial="hidden"
          animate="visible"
          exit="hidden" >       

          <motion.div className="modal"
            variants={modal} >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      ) }
    </AnimatePresence>
  )
}

export default Modal; 
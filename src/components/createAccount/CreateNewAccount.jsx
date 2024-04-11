import { useState } from "react"
import Modal from "../modal/Modal";

function CreateNewAccount() {
    const createBtn = {
        backgroundColor: "green",
        width: "11.5rem",
        height: "3.0625rem",
        marginTop: "1.25rem",
        color: "white"
    }

    const [modalShow, setmodalShow] = useState(false)

    const openModal = () => {
        setmodalShow(true);
    };

    const closeModal = () => {
        setmodalShow(false);
    };

    function handleClick(e) {
        console.log(e.target);
        if (e.target.id === "close") {
            closeModal()
        }
        
    }

    return (

        <>
            {modalShow && <Modal onClick={handleClick} />}


            <button style={createBtn}
                onClick={openModal}>
                Create new account</button>

        </>
    )
}

export default CreateNewAccount
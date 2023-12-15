import React, { useContext } from "react";
import ModalContext, {
    ModalContextProps
} from "../../store/context/modalContext";
import { Modal } from "../../components";

function Contact() {
    const { openModal } = useContext(ModalContext) as ModalContextProps;

    const handleClick = () => {
        openModal();
    };
    return (
        <section>
            <Modal />
        </section>
    );
}

export default Contact;

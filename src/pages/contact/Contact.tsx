import React, { useState, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import ModalContext from "../../utils/context/modalContext";

interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    // context api
    const { isModalOpen, openModal, closeModal } = useContext(
        ModalContext
    ) as ModalContextType;

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data: FormData = {
                // Initialize with the form data
                name: "exampleName",
                email: "example@example.com",
                message: "example message"
            };

            console.log(data);
            reset();
            setIsSubmitted(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setIsSubmitted(false);
            closeModal();
            toast.success("Message Successfully Sent");
        } catch (error) {
            setIsSubmitted(false);
            closeModal();
            toast.error("Error Sending Message"); // Display an error toast
        }

        setTimeout(() => {
            setIsSubmitted(false);
            closeModal();
        }, 1000);
    };

    return (
        <section id="contact">
            <div className="container flex justify-center items-center bg-red-400">
                <button className="btn hidden" onClick={openModal}>
                    Contact Us
                </button>
                <dialog
                    id="my_modal_5"
                    className={`modal modal-bottom sm:modal-middle ${
                        isModalOpen ? "modal-open" : ""
                    }`}
                >
                    <div className="modal-box py-3">
                        <div className="flex justify-between items-center">
                            <h3 className=" text-red-400 text-2xl font-normal my-0">
                                Hello
                            </h3>
                            <form method="dialog">
                                <button
                                    className="btn btn-sm"
                                    onClick={closeModal}
                                >
                                    <AiOutlineClose />
                                </button>
                            </form>
                        </div>
                        <p className="py-4">
                            If you have any questions or comments, please send
                            us a message..
                        </p>
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-col p-2">
                                <div className="form-group flex flex-col p-2 border border-gray-400 rounded-lg focus:outline-none text-sm">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        {...register("name", {
                                            required: true
                                        })}
                                    />
                                    {errors.name && (
                                        <span className="error text-sm text-red-400">
                                            Name is required
                                        </span>
                                    )}
                                </div>
                                <div className="form-group flex flex-col p-2 border border-gray-400 rounded-lg focus:outline-none text-sm">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: true
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="error apply text-sm text-red-400">
                                            Email is required
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="form-group p-2 border border-gray-400 rounded-lg focus:outline-none text-sm">
                                <textarea
                                    rows={4}
                                    placeholder="Message"
                                    className="w-full"
                                    {...register("message", { required: true })}
                                >
                                    {errors.message && (
                                        <span className="error text-sm text-red-400">
                                            Message is required
                                        </span>
                                    )}
                                </textarea>
                            </div>
                            <div className="form-group flex justify-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline px-10"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                        <div className="modal-action"></div>
                    </div>
                </dialog>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Contact;

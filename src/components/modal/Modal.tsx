import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import ModalContext, {
  ModalContextProps,
} from "../../store/context/modalContext";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Modal() {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  // context api
  const { isModalOpen, openModal, closeModal } = useContext(
    ModalContext,
  ) as ModalContextProps;

  if (!ModalContext) {
    return null;
  }

  const onSubmit = async () => {
    try {
      const data: FormData = {
        // Initialize with the form data
        name: "exampleName",
        email: "example@example.com",
        message: "example message",
      };

      console.log(data);
      reset();
      setIsSubmitted(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

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
    <>
      <button
        className="btn mr-0 hidden text-lg md:mr-2 md:mt-0 md:text-base lg:text-lg"
        onClick={openModal}
      >
        Contact Us
      </button>
      <dialog
        id="my_modal_5"
        className={`modal modal-bottom sm:modal-middle ${
          isModalOpen ? "modal-open" : ""
        }`}
      >
        <div className="modal-box pb-0 pt-3">
          <div className="flex items-center justify-between">
            <h3 className=" my-0 text-2xl font-normal text-red-400">Hello</h3>
            <form method="dialog">
              <button className="btn btn-sm" onClick={closeModal}>
                <AiOutlineClose />
              </button>
            </form>
          </div>
          <p className="px-1 py-2">
            If you have any questions or comments, please send us a message..
          </p>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col px-0 pb-2">
              <div className="form-group mb-2 flex flex-col rounded-lg border border-gray-400 p-2 text-sm focus:outline-none">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && (
                  <span className="error text-sm text-red-400">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-group flex flex-col rounded-lg border border-gray-400 p-2 text-sm focus:outline-none">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && (
                  <span className="error apply text-sm text-red-400">
                    Email is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-group rounded-lg border border-gray-400 p-2 px-1 text-sm focus:outline-none">
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
            <div className="form-group mt-4 flex justify-center">
              <button
                type="submit"
                className="btn btn-outline border-slate-400 px-10 font-poppins text-lg font-light"
              >
                Send
              </button>
            </div>
          </form>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </>
  );
}

export default Modal;

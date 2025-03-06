import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { useState } from "react";

const Modal = ({ children }: any) => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="sm:text-[2.2rem] text-[1.8rem] text-center font-[600]">Contact Us</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-[2rem]">
                    <div className="">
                        <p className="font-[600] mb-[.5rem]">Name</p>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="w-full pl-[.7rem] focus:border-none focus:outline-none bg-[#F5F5F5] py-[.5rem]"
                        />
                    </div>
                    <div className="">
                        <p className="font-[600] pl-[.7rem] mb-[.5rem]">Phone Number</p>
                        <input
                            type="text"
                            name="number"
                            onChange={handleChange}
                            className="w-full pl-[.7rem] focus:border-none focus:outline-none bg-[#F5F5F5] py-[.5rem]"
                        />
                    </div>
                    <div className="">
                        <p className="font-[600] mb-[.5rem]">Email</p>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full pl-[.7rem] focus:border-none focus:outline-none bg-[#F5F5F5] py-[.5rem]"
                        />
                    </div>
                    <div className="">
                        <p className="font-[600] mb-[.5rem]">Message</p>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            className="w-full pl-[.7rem] resize-none h-[8rem] focus:border-none focus:outline-none bg-[#F5F5F5] py-[.5rem]"
                        />
                    </div>
                </div>

                <Button className="w-full py-[1.7rem] text-[1.4rem] text-[#000000] bg-[#1B82E2]">Send</Button>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;
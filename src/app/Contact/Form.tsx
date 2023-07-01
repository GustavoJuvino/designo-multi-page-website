"use client";
import React, { useState } from 'react';
import Button from "../components/Button";
import { Error } from "../../../public/assets/svgs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from 'react-hot-toast';
import styles from "./styles/Form.module.css"

const ContactFormSchema = z.object({
    name: z.string()
        .nonempty("Can't be empty"),
    email: z.string()
        .nonempty("Can't be empty")
        .email("It must be a valid email"),
    phone: z.string()
        .nonempty("Can't be empty"),
    message: z.string()
        .nonempty("Can't be empty")
        .min(50, "At least 50 characters")
})

type ContactFormData = z.infer<typeof ContactFormSchema>

const Form = () => {
    const [characters, setCharacters] = useState(0);

    const { 
            register,
            handleSubmit,
            formState: { errors } 
        } = useForm<ContactFormData>({
            resolver: zodResolver(ContactFormSchema),
        });

    const notify = () => {
        if(
            characters === 0 ||
            characters < 50 ||
            errors.name ||
            errors.email ||
            errors.phone
        ) toast.error('Form not sent')
        else toast.success('Form sent successfully')
    };

    return (
        <form
            onSubmit={handleSubmit((data) => console.log(data))}    
            className="
                flex
                flex-col
                gap-6
                xl:pt-[54px]
                max-xl:mx-6
                max-xl:sm:w-[84%]
                max-sm:w-[55%]
                z-40
            "
        >
            <Toaster />
            <div id={styles.InputContainer}>
                <input 
                    className={styles.input}
                    placeholder="Name"
                    type="text"
                    {...register("name")} 
                />
                {errors.name &&
                    <span className={styles.error}>
                        <p>{errors.name.message}</p>
                        <Error id="IconError" />
                    </span>
                 }
            </div>

            <div id={styles.InputContainer}>
                <input 
                    className={styles.input}
                    placeholder="Email Adress"
                    type="email"
                    {...register("email")} 
                />
                {errors.email &&
                    <span className={styles.error}>
                        <p>{errors.email.message}</p>
                        <Error id="IconError" />
                    </span>
                 }
            </div>

            <div id={styles.InputContainer}>
                <input 
                    className={styles.input}
                    placeholder="Phone"
                    type="phone"
                    {...register("phone")} 
                />
                {errors.phone && 
                    <span className={styles.error}>
                        <p>{errors.phone.message}</p>
                        <Error id="IconError" />
                    </span>
                    
                 }
            </div>

            <div className="flex flex-col">
                <textarea 
                    className={styles.text_area}
                    placeholder="Your Message"
                     {...register("message")}
                    onChange={(e) => setCharacters(e.target.value.length)}
                />
                <div className="flex justify-between mt-3 relative">
                    <span className="pl-6 text-white">
                        {`${characters} / 50`}
                    </span>
                    {errors.message && 
                        <span className={styles.error}>
                            <p>{errors.message.message}</p>
                            <Error id="IconError" />
                        </span>
                    }
                </div>
            </div>
        
            <div 
                className="
                    flex
                    sm:justify-end
                    justify-center
                    xl:pb-[54px]
                    max-sm:pt-10
                    max-xl:pb-[72px]
                "
            >
                <Button 
                    click={() => setTimeout(notify, 1000)}
                    type="light"
                    value="SUBMIT" 
                />
            </div>
        </form>
    )
}

export default Form;

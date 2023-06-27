"use client";
import React, { useState } from 'react';
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import styles from "./styles/Form.module.css"

const Form = () => {
    const [output, setOutput] = useState("");
    const { register, handleSubmit } = useForm();
    
    function createUser(data: any) {
      setOutput(JSON.stringify(data, null, 2));
    }

    return (
        <form
            onSubmit={handleSubmit(createUser)}    
            className="
                flex
                flex-col
                gap-6
                max-xl:mx-6
                max-xl:sm:w-[84%]
                max-sm:w-[55%]
                z-40
            "
        >
            <input 
                className={styles.input}
                placeholder="Name"
                type="text"
                {...register("name")} 
            />

            <input 
                className={styles.input}
                placeholder="Email Adress"
                type="email"
                {...register("email")} 
            />

            <input 
                className={styles.input}
                placeholder="Phone"
                type="phone"
                {...register("phone")} 
            />

            <textarea 
                className={styles.text_area}
                placeholder="Your Message"
                {...register("message")}
            />
        
            <div className="
                    flex
                    sm:justify-end
                    justify-center
                    max-sm:pt-10
                    max-sm:pb-[72px]
                "
            >
                <Button type="light" value="SUBMIT" />
            </div>

            {output && (
                <pre>{output}</pre>
            )}
        </form>
    )
}

export default Form;

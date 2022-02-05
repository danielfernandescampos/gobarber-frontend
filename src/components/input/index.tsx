import { useField } from "@unform/core";
import React, { ComponentType, useEffect, useRef } from "react"
import { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons/lib";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: ComponentType<IconBaseProps>;
}

export default function Input({name, icon: Icon, ...rest}: InputProps) {
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const inputRef = useRef(null)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    return (
        <Container>
            { Icon && <Icon size="20" /> }
            <input defaultValue={defaultValue} ref={inputRef} {...rest}/>
        </Container> 
    )
}


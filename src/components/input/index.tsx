import { useField } from "@unform/core";
import { ComponentType, useCallback, useEffect, useRef, useState } from "react"
import { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons/lib";
import { Container, Error } from "./styles";
import { FiAlertCircle } from "react-icons/fi"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: ComponentType<IconBaseProps>;
}

export default function Input({name, icon: Icon, ...rest}: InputProps) {
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const inputRef = useRef<HTMLInputElement>(null);
    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }, []);
    
    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, []);


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);

    return (
        <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
            { Icon && <Icon size="20" /> }
            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef} {...rest}
            />
            {error && (
                <Error title={error}>
                    <FiAlertCircle size={20} color="#c53030"/>
                </Error>
            )}
        </Container> 
    )
}


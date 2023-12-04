import React from "react";
import { Link } from "react-router-dom";

const getSizeStyles = (size) => {
    const sizes = {
        sm: { width: "140px", height: "42px", fontSize: "14px" },
        md: { width: "130px", height: "40px", fontSize: "16px" },
        lg: { width: "250px", height: "62px", fontSize: "22px" },
        xl: { width: "300px", height: "72px", fontSize: "26px" },
    };

    return sizes[size] || {};
};

export const CustomButton = ({ link, text, size }) => {
    const style = {
        width: "130px",
        height: "40px",
        fontSize: "16px",
        ...getSizeStyles(size),
    };

    return (
        <>
            <Link to={link} className="custom_button" style={style}>
                {text}
            </Link>
        </>
    );
};

export const CustomAtagButton = ({ link, text, size, isBlank }) => {
    const style = {
        width: "130px",
        height: "40px",
        fontSize: "16px",
        ...getSizeStyles(size),
    };

    return (
        <>
            <a
                href={link}
                className="custom_button"
                style={style}
                target={isBlank ? "_blank" : ""}
            >
                {text}
            </a>
        </>
    );
};

export const CustomSubmitButton = ({ link, text, size, onClick }) => {
    const style = {
        width: "130px",
        height: "40px",
        fontSize: "16px",
        ...getSizeStyles(size),
    };

    return (
        <>
            <button onClick={onClick} className="custom_button" style={style}>
                {text}
            </button>
        </>
    );
};

import React from "react";

const Button = ({
    children,
    type = "button",
    variant = "primary",
    className = "",
    ...props
}) => {
    const base =
        "btn rounded-lg px-6 min-h-[40px] btn-outline hover:bg-neutral hover:text-white text-sm font-semibold transition";

    const variants = {
        primary: "black",
        secondary: "btn-secondary",
        outline: "btn-outline",
        danger: "btn-error",
    };

    return (
        <button
            type={type}
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

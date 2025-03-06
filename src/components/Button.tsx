import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
           primary: "bg-lime-400 hover:bg-lime-300 text-neutral-950 border-lime-400 transition duration-300",
            secondary: "border-white hover:font-bold text-white bg-transparent transition duration-500",
        },
        size: {
            "sm": "h-10"
        }
    },
});

const Button = (
    props: {
        variant: "primary" | "secondary";
        size?: "sm"
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { variant, className, size, ...otherProps } = props;
    return (
        <button
            className={classes({
                variant,
                size,
                className
            })}
            {...otherProps}
        />
    );
};

export default Button;

import type { ReactElement } from "react";

interface buttonprops{
    variant : "primary" | "secondary";
    text : String;
    size : "sm" | "md" | "lg";
    icononleft ?: ReactElement;
    icononright ?: ReactElement;
    onClick ?: ()=>void;
    fullWidth ?: boolean;
    loading ?:boolean;
}
const variantClasses = {
    "primary": "bg-blue-700 text-white",
    "secondary" : "bg-blue-200 text-blue-700"
}

const sizeclass={
    "sm" : "py-2 px-4 rounded-sm text-base ",
    "md" : "py-3 px-6 rounded-md text-xl ",
    "lg" : "py-4 px-8 rounded-lg text-3xl "
}
 const defaultclass = "flex items-center gap-4 hover:cursor-pointer font-light"
export function Button({variant,text,size,icononright,icononleft,onClick,fullWidth,loading}:buttonprops){
    return (<div className="flex">
        <button onClick={onClick} className={`${variantClasses[variant]} ${defaultclass} ${sizeclass[size]}${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45	" : ""}`}>
           {icononleft} {text} {icononright}
        </button>
    </div>
    );
}
import React from "react";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;


//create your first component
const SecondsCounter = ({ digito1 }) => {
    num1 += 0.5
    num1 >= 10 ? num1 = num1 - 10 : num1 = num1

    num2 += 0.05
    num2 >= 10 ? num2 = num2 - 10 : num2 = num2

    num3 += 0.005
    num3 >= 10 ? num3 = num3 - 10 : num3 = num3

    num4 += 0.0005
    num4 >= 10 ? num4 = num4 - 10 : num4 = num4

    num5 += 0.00005
    num5 >= 10 ? num5 = num5 - 10 : num5 = num5

    num6 += 0.000005
    num6 >= 10 ? num6 = num6 - 10 : num6 = num6


    return (
        <div className="text-center">
            <h1>
                <p className="badge text-bg-dark m-5">
                    <span className="border rounded px-2">{parseInt(num6)}</span>
                    <span className="border rounded px-2">{parseInt(num5)}</span>
                    <span className="border rounded px-2">{parseInt(num4)}</span>
                    <span className="border rounded px-2">{parseInt(num3)}</span>
                    <span className="border rounded px-2">{parseInt(num2)}</span>
                    <span className="border rounded px-2">{num1}</span>
                </p>
            </h1>
        </div>
    );

};

export default SecondsCounter;
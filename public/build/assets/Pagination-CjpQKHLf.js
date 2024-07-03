import{j as o,a as n}from"./app-B8sgcMSX.js";function s({links:t,additionalUrlParams:r=""}){return console.log(t),o.jsx("nav",{className:"text-center mt-4",children:t.map(e=>o.jsx(n,{href:(e.url||"")+(r!==""?"&type="+r:""),onClick:()=>handleClick(e.url),className:`
                    inline-block py-2 px-3 mx-2 rounded-lg text-gray-200 text-xs  
                    ${e.active?"bg-gray-700 font-medium cursor-default pointer-events-none":"cursor-pointer "}
                    ${e.url?"hover:bg-gray-700":"!text-gray-500 cursor-default pointer-events-none"}
                `,dangerouslySetInnerHTML:{__html:e.label}},e.label))})}export{s as P};

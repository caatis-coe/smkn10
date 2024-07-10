import{j as t,a}from"./app-BUFdCYY6.js";function s({links:r,additionalUrlParams:n=""}){return t.jsx(t.Fragment,{children:r.length>3&&t.jsx("nav",{className:"text-center mt-4",children:r.map(e=>t.jsx(a,{href:(e.url||"")+(n!==""?"&type="+n:""),onClick:()=>handleClick(e.url),className:`
                    inline-block py-2 px-3 mx-2 rounded-lg text-gray-200 text-xs  
                    ${e.active?"bg-gray-700 font-medium cursor-default pointer-events-none":"cursor-pointer "}
                    ${e.url?"hover:bg-gray-700":"!text-gray-500 cursor-default pointer-events-none"}
                `,dangerouslySetInnerHTML:{__html:e.label}},e.label))})})}export{s as P};

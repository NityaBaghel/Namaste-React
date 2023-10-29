
// const heading=React.createElement("h1",{id:"heading"},"Hello from react")
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);
//     console.log("heading");


// how to create this type of nested structure in js 
/* <div id="parent">
    <div id="child">
        <h1>I m a heading TAG</h1>
        <h2>I m headding 2 </h2>
    </div>
</div> */

// Creating using js 
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}, [React.createElement("h1",{},"I m an h1 tag"), React.createElement("h2",{},"I m heading 2")]
)
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


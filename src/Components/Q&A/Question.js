import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h3>How React Works?</h3>
                <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                </p>
            </div>
            <div>
                <h3>How useState Works?</h3>
                <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Question;
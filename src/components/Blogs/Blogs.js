import React from 'react';

const Blogs = () => {
    return (
        <section className='bg-gradient-to-r from-gray-600 to-black p-6'>
            <h1 className='font-bold text-6xl text-white text-center'>Question Answer</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen items-center gap-4 text-white'>
                <article className="border h-96 p-8 mx-4">
                    <h2 className='text-3xl font-semibold mb-3'>What is Context Api?</h2>
                    <p>The Context api is simple to use and maintain, and it shares state across the entire program. This is an example of a react hook. solving prop-drilling from the application with context api</p>
                </article>
                <article className="border h-96 p-8 mx-4">
                    <h2 className='text-3xl font-semibold mb-3'>What is Sementic Tag ?</h2>
                    <p>The purpose of a semantic element is clearly stated, and it is understandable to both developers and browsers. When you use semantic tags, you get a lot more hooks for decorating your information.</p>
                </article>

                <article className="border h-96 p-8 mx-4">
                    <h2 className='text-3xl font-semibold mb-3'>what is the difference between inline vs inline-block vs block element?</h2>
                    <p>
                        <span className='text-xl font-bold'>inline</span>: The element doesn’t start on a new line and You can’t set the width or height. <br /> <br />
                        <span className='text-xl font-bold'>inline-block</span>: It’s formatted just like the inline element, BUT, you can set width and height.
                        <br />
                        <br />
                        <span className='text-xl font-bold'>Block</span>: The element will start on a new line and take full width. And you can set width and height.
                    </p>
                </article>
            </div>

        </section>
    );
};

export default Blogs;
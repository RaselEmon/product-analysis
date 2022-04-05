import React from 'react';
import { Link } from 'react-router-dom';
import CapMan from '../../laptop.jpg';
import useReview from '../../hooks/useReview';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    const [reviews, setReviews] = useReview();
    const sliceReviews = reviews.slice(0, 3);
    // setReviews(sliceReviews);

    return (
        <>
            <section className="flex justify-center items-center bg-gradient-to-r from-gray-600 to-black  h-screen p-4  md:pt-0 ">
                <div className="flex flex-wrap justify-evenly items-center ">
                    <div className="md:w-1/2 text-white px-4 md:order-1 order-2">
                        <h3 className="md:text-4xl text-3xl font-bold">STYLISH &</h3>
                        <h1 className="md:text-7xl text-5xl font-bold my-4">GAMING LAPTOP</h1>
                        <p className=" pr-8 text-justify">
                            We are ready to give you this awesome laptop. You'll get
                            stylish laptop. if need talk to us any time .we are always free to
                            service you. Our customers have made good comments so far.
                        </p>
                        <button className="my-4 py-3 px-8 font-medium text-xl rounded transition duration-500 ease-in-out bg-gradient-to-t from-gray-500 to-indigo-800 hover:to-white hover:text-black">
                            Live Demo
                        </button>
                    </div>
                    <div className="md:w-1/2 w-96 md:order-2 order-1 md:mb-0 mb-8">
                        <img className="border-l-8 rounded-lg " src={CapMan} alt="" />
                    </div>
                </div>

            </section>

            <section className=" bg-gradient-to-r from-gray-600 to-black  p-4 pt-16">
                <h1 className='text-center my-6 pb-6 font-bold text-5xl text-white opacity-25'>CUSTOMER REVIEW</h1>
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-8 h-full">
                    {sliceReviews.map((review) => {
                        const { id, img, name, description } = review;
                        return (
                            <div
                                key={id}
                                className=" w-72 h-[320px] pt-3 pl-4 shadow-2xl rounded text-white border"
                            >
                                <div className="flex items-center mb-5">
                                    <img className="w-14 h-14 mr-3" src={img} alt="" />
                                    <h1 className="text-2xl font-bold mb-3">{name}</h1>
                                </div>
                                <p>Ratings:  <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </p>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center py-8">
                    <Link to="/review">
                        <button className="my-4 py-3 px-10 font-medium text-xl text-white rounded transition duration-500 ease-in-out bg-gradient-to-tr from-gray-500 to-indigo-800 hover:to-white hover:text-black">
                            See More
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;

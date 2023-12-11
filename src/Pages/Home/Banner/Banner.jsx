
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen w-full bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/SKpDHP7/mitchell-orr-PUY5x-Uszd3-Y-unsplash.jpg)' }}>
                <div className="hero-content text-left lg:flex lg:justify-end w-full">
                    <div className="max-w-md text-black mt-40 md:mt-0">
                        <h1 className="mb-5 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Hello Friends</h1>
                        <h1 className="text-4xl lg:text-5xl space-y-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"> Your Journey to Pet Parenthood Starts Here.</h1>
                        <button className="btn bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full font-bold border-none px-5 mt-5">See more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
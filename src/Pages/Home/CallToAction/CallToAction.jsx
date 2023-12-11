import TitleTex from '../../../../src/Shared/TitleText/TitleText'

const CallToAction = () => {
    return (
        <div>
            <TitleTex
                header={'Call to action'} />
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/0h5MgNm/vino-li-P1-Ox3-ZHLa-D8-unsplash.jpg)' }}>
                <div className=""></div>
                <div className="hero-content flex justify-center items-center">
                    <div className="max-w-xl text-center">
                        <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent">Today Is The Day</h1>
                        <p className="mb-5 text-3xl text-indigo-800">Find your new best friend and unlock a world of unconditional love. Adopt a pet today and let your heart grow a little bigger.Change a life, and let love change yours. Adopt a furry companion and experience the joy that comes with giving a pet a forever home.</p>
                        <button className="btn bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full font-bold border-none px-5 mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
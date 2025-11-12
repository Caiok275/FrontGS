import bg from '../../assets/Menu.jpg';

export default function Home() {

    return (
        <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
        <h1 className="text-6xl text-white font-bold mb-6">FrontGS</h1>
        </div>
    );
}
import bg from '../../assets/Menu.jpg';

export default function Home() {

    return (
        <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="text-6xl text-white font-bold mb-6">FrontGS</h1>

            <div className="flex flex-col justify-center items-center text-center text-4xl text-white">
                <p className="mb-4">Sua plataforma de gerenciamento de serviços</p>
                <p className="max-w-2xl text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, aut. Saepe
                    aliquid quia nulla recusandae ut, et quam voluptates minima voluptatibus
                    necessitatibus eaque est quidem sunt. Iure, iste non. Nam.
                </p>
            </div>

        </div>
    );
}
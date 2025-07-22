function Footer() {
    return (
        <footer className="bg-zinc-800 text-blue-600 py-2 px-4 rounded-xl font-bold  mt-10 mx-5 shadow-inner border border-gray-300">
            <div className="text-base text-center space-y-2">
                <p className="font-bold tracking-wide text-white">
                © {new Date().getFullYear()} J&P DEV. Todos los derechos reservados.
                </p>
                <div className="space-x-6">
                    <a href="https://portfolio-indol-mu-19.vercel.app/" className="hover:text-white transition duration-300 ease-in-out">Acerca</a>
                    <a href="https://www.linkedin.com/in/juan-pablo-moreno-due%C3%B1as-8305562a4/" className="hover:text-white transition duration-300 ease-in-out">Linkedin</a>
                    <a href="https://github.com/Juanpmodu92" className="hover:text-white transition duration-300 ease-in-out">Git-Hub</a>
                    
                </div>
            </div>
        </footer>

    );
}

export default Footer;
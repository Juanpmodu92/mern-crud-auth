
function AboutPage() {
    return (
        <section className="flex flex-col items-center justify-center flex-grow px-6 py-24 text-center text-white">
        <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-indigo-600">About Task Manager</h1>
            <p className="text-lg text-zinc-300 mb-4">
            <span className="font-semibold text-white">Tasks Manager</span> It is a web application designed to help you manage your tasks easily, quickly, and efficiently.
            </p>
            <p className="text-lg text-zinc-300 mb-4">
            With this tool, you can create, edit, and delete tasks, as well as keep track of your activities organized by date.
            </p>
            <p className="text-lg text-zinc-300 mb-4">
            Developed with <span className="text-indigo-400">React</span>, <span className="text-indigo-400">Vite</span>, <span className="text-indigo-400">TailWind CSS</span>, <span className="text-indigo-400">Node.js</span>, <span className="text-indigo-400">Express</span> y <span className="text-indigo-400">MongoDB</span>, seeks to offer a fluid, modern and adaptable experience for all users.
            </p>
            <p className="text-lg text-zinc-400 italic mt-6">
            "Organization is the first step to achieving your goals.
            </p>
        </div>
        </section>
    );
}


export default AboutPage;

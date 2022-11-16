


function Navbar() {

    return (
        <nav className="bg-slate-600 flex justify-between p-3 text-2xl items-center fixed w-full">
            <h1 className="font-bold">David Brockbank</h1>
            <div className="flex  justify-around space-x-10">
                <button>Projects</button>
                <button>Skills</button>
                <button>About</button>
            </div>

        </nav>
    );
}

export default Navbar
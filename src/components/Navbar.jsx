


function Navbar() {

    return (
        <nav className="bg-slate-600 p-3 items-center fixed w-full">
            <div className="h-full container text-2xl flex flex-wrap justify-between mx-auto">
                <h1 className="font-bold">David Brockbank</h1>
                <button>Projects</button>
                <button>Skills</button>
                <button>About</button>
            </div>

        </nav>
    );
}

export default Navbar
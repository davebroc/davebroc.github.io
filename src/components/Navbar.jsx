


function Navbar() {

    return (
        <nav className="bg-slate-600 flex justify-between md:text-2xl  p-3 items-center z-10 fixed w-full">
            <h1 className="font-bold">David Brockbank</h1>
            <div className="flex  justify-around space-x-10 mr-2">
                <a href='#projects'>Projects</a>
                {/* <a href='#skills'>Skills</a> */}
                <a href='#about'>About</a>
                <a href='#contact'>Contact</a>
            </div>

        </nav>
    );
}

export default Navbar
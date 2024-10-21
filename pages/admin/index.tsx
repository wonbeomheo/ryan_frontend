const Admin = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col text-white items-center justify-center">
            <div className="w-full h-[4rem] flex items-center justify-center text-4xl uppercase">
                Admin Page
            </div>
            <div className="flex flex-col pt-8 items-center">
                <div className="flex pb-[1rem]">
                    <div className="w-[6rem]">
                        <label htmlFor="email">Email</label>
                    </div>
                    <input className="rounded-md w-60 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-red-600" id='email' type='text'/>
                </div>
                <div className="flex pb-[1rem]">
                    <div className="w-[6rem]">
                        <label htmlFor="email">Password</label>
                    </div>
                    <input className="rounded-md w-60 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-red-600" id='password' type='text'/>
                </div>
                <button className="bg-[#AC0100] rounded-md w-[6rem] text-sm p-2 mt-2">Log In</button>
            </div>
        </div>
    )
}

export default Admin
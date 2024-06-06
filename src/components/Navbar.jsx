import Link from 'next/link'

const Navbar = () => {
    return (
        <ul className='flex items-center justify-center gap-8 bg-slate-400 py-4'>
            <li><Link href={"/"}>View Tasks</Link></li>
            <li><Link href={"/tasks/new"}>Create task</Link></li>
        </ul>
    )
}

export default Navbar
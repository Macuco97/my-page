import Link from 'next/link'

export default function Button({children, href}) {
    return (
            <>
            {
                href && 
                <Link href = {href}> 
                    <button className = {`bg-slate-200 py-2 px-4 rounded-full uppercase my-4 w-80 `}> 
                        {children} 
                    </button>
                </Link>

            }
            </>
            
    )
}
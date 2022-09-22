import Link from 'next/link'

export default function Button({children, href}) {
    return (
            <>
            {
                href && 
                <Link href = {href}> 
                    <button className = {`bg-black text-white py-2 px-4 rounded uppercase my-4 w-80 mx-8`}> 
                        {children} 
                    </button>
                </Link>

            }
            </>
            
    )
}
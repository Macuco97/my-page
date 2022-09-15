import Image from 'next/image'
import Link from 'next/link'


export default function Card({children, href}) { 
    return (    
            <div className = {`mt-10 w-64 shadow-xl bg-transparent flex flex-col`}>
                <div className = {`p-4`}>
                    <div className = {`font-bold underline underline-offset-2`}>{children[0]}</div>
                    <div>{children[1]}</div>
                </div>
                {href && 
                <Link href = {href}>
                    <div className = {`mb-2 ml-4 text-blue-500 underline underline-offset-2`}>
                        Clique aqui para acessar
                    </div>
                </Link>
                }
            </div>
    )
}
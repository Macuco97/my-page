import Image from 'next/image'
import Link from 'next/link'


export default function Card({children, href, stacks}) { 
    const style = {
        stacks: "flex flex-row px-2 gap-2 flex-wrap justify-center my-2",
        stack: "uppercase bg-black text-white p-1 rounded shadow shadow-black"
    }
    return (    
            <div className = {`mt-4 w-64 shadow-xl shadow-slate-400 bg-transparent flex flex-col py-4 bg-slate-300`}>
                <div className = {`px-4`}>
                    <div className = {`font-bold underline underline-offset-2`}>{children[0]}</div>
                    <div>{children[1]}</div>
                </div>
                <div className = {style.stacks}>
                    {
                    stacks.map((stack, index) => {
                        return(
                            <div key = {index} className = {style.stack}>{stack}</div>
                        )
                    })
                    }
                </div>
                {href && 
                <Link href = {href}>
                    <div className = {`mb-2 ml-4 text-blue-500 underline underline-offset-2 hover:cursor-pointer`}>
                        Clique aqui para acessar
                    </div>
                </Link>
                }
            </div>
    )
}
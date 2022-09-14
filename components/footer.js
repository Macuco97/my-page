import Image from 'next/image'
import Link from 'next/link'



export default function footer() {
const footer = "flex flex-row justify-center fixed bottom-4 right-8"
    return ( 
    <footer className = {footer}>
        <Link href = "http://wa.me/5521999611299">
            <span className = "animate-bounce">
                <Image className = {``} src = "/whatsapp.svg" width = "90" height = "90"/>
            </span>
        </Link>
    </footer>
    )
}
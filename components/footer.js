import Image from 'next/image'
import Link from 'next/link'



export default function footer() {
const footer = "flex flex-row justify-center"
    return ( 
    <footer className = {footer}>
        <Link href = "http://wa.me/5521999611299">
            <span className = "ml-48 mt-19 animate-bounce">
                <Image className = {``} src = "/whatsapp-logo.png" width = "50" height = "50"/>
            </span>
        </Link>
    </footer>
    )
}
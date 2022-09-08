import Image from 'next/image'

const navbarImage = {
    site: "bg-color-cyan-500"
}
const navbar = `mt-8 flex flex-col`

export default function Navbar() {
    return (
        <navbar className = {navbar}>
                <Image src ='/web-site.png' alt = 'Imagem de um site' width = '90' height = '70'  className = {`shadow`} />
                <Image src ='/sad-computer.png' alt = 'Imagem de um site' width = '90' height = '70' />
                <Image src ='/recicle-trash.png' alt = 'Imagem de um site' width = '90' height = '70' />
        </navbar>

    )
}
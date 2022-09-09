import Image from 'next/image'

const navbarImage = {
    computador: "shadow-2xl",
}
const navbar = `mt-8 flex flex-row w-screen justify-center`

export default function Navbar() {
    return (
        <navbar className = {navbar}>
                <Image className = {navbarImage.computador} src ='/computador-manutencao.png' alt = 'Imagem de um site' width = '90' height = '70' />
                <Image src ='/web-site.png' alt = 'Imagem de um site' width = '90' height = '70' />
                <Image src ='/recicle-trash.png' alt = 'Imagem de um site' width = '90' height = '70' />
        </navbar>

    )
}
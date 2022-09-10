import Image from 'next/image'
import { useState } from 'react'

export default function Navbar({activeImage, setActiveImage}) {
    const navbar = `mt-8 flex flex-row w-screen justify-center`
    const imageManutencao = activeImage === 'manutencao' ? ' duration-500 translate-y-6' : 'duration-500 translate-y-0 opacity-50'
    const imageSite = activeImage === 'site' ? 'duration-500 translate-y-6' : 'duration-500 translate-y-0 opacity-50'
    const imageDisc = activeImage === 'disc' ? 'duration-500 translate-y-6' : 'opacity-50 duration-500 translate-y-0'

    

    return (
        <navbar className = {navbar}>
                <span className = {imageManutencao} onClick = {() => setActiveImage("manutencao")}>
                    <Image className = {``} src ='/computador-manutencao.png' alt = 'Imagem de um site' width = '90' height = '70' />
                </span>
                <span className = {imageSite} onClick = {() => setActiveImage("site")}>
                    <Image src ='/web-site.png' alt = 'Imagem de um site' width = '90' height = '70' />
                </span>
                <span className = {imageDisc} onClick  ={() => setActiveImage("disc")}>
                    <Image src ='/recicle-trash.png' alt = 'Imagem de um site' width = '90' height = '70' />
                </span>
        </navbar>

    )
}
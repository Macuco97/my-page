import Image from 'next/image'
import { useState } from 'react'

export default function Navbar({activeImage, setActiveImage}) {
    const navbar = `mt-8 flex flex-row w-screen justify-center self-end`
    const imageManutencao =  activeImage === 'manutencao' ? ' duration-500 translate-y-6 shadow-2xl shadow-green-500/50 border border-5 rounded-md border-solid' : 'shadow-2xl duration-500 translate-y-0 opacity-50 border border-5 rounded-md border-solid'
    const imageSite = activeImage === 'site' ? 'duration-500 translate-y-6 shadow-2xl shadow-green-500/50 border border-5 rounded-md border-solid' : 'shadow-2xl duration-500 translate-y-0 opacity-50 border border-5 rounded-md border-solid'
    const imageDisc = activeImage === 'disc' ? 'duration-500 translate-y-6 shadow-2xl shadow-green-500/50 border border-5 rounded-md border-solid' : 'shadow-2xl opacity-50 duration-500 translate-y-0 border border-5 rounded-md border-solid'
    const hr = "border-5 border-solid"
    

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
                <hr className = {hr}/>
        </navbar>

    )
}
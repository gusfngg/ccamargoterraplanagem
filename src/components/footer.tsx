import { switzer } from '@/lib/fonts'
import { Instagram, PhoneCall } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex items-center justify-between">
      <h1
        className={`${switzer.className} text-brownAm font-regular text-base`}
      >
        <Link href={'https://instagram.com/gs.gus'}>
          Criado por Gustavo Camargo
        </Link>
        {''} | © Todos os direitos reservados
      </h1>

      <div className="flex items-center gap-4">
        <Link href="https://instagram.com/almeidaterraplenagem" target="_blank">
          <Instagram className="text-neutral-600" />
        </Link>

        <Link href="https://instagram.com/almeidaterraplenagem" target="_blank">
          <PhoneCall className="text-neutral-600" />
        </Link>
      </div>
    </div>
  )
}

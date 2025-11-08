'use client'

import { Link as ScrollLink } from 'react-scroll'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import Logo from '@/assets/logotipo.png'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BlurFade from './ui/blur-fade'

const navItems = [
  { name: 'Início', to: 'hero' },
  { name: 'Serviços', to: 'services' },
  { name: 'Nossa base', to: 'values' },
  { name: 'Sobre', to: 'about' },
]

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function handleLinkClick() {
    setTimeout(() => setIsDrawerOpen(false), 100)
  }

  if (!isMounted) {
    return null
  }

  return (
    <BlurFade inView>
      <header className="mt-7 mb-5 lg:my-4">
        <BlurFade inView>
          <div className="lg:py-2 px-4">
            <div className="flex items-center justify-between">
              <BlurFade inView>
                <Image
                  className="size-12 object-cover lg:size-[10rem] bg-transparent"
                  src={Logo}
                  height={2000}
                  width={2000}
                  alt="logo"
                />
              </BlurFade>
              <div className="hidden lg:block">
                <nav className="border rounded-lg p-4 flex items-center">
                    <ul className="flex items-center justify-center gap-10">
                      {navItems.map((item) => (
                        <li key={item.to} className='flex items-center'>
                          <ScrollLink
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            spy={true}
                            activeClass="text-primary"
                          >
                            <span className="text-lg cursor-pointer text-blueAm font-medium hover:text-blue-950 transition-">
                              {item.name}
                            </span>
                          </ScrollLink>
                        </li>
                      ))}
                    </ul>
                </nav>
              </div>

              <BlurFade inView>
                <Button className="hidden lg:block bg-blueAm text-grayAm font-semibold hover:bg-blue-900">
                  <Link href="https://api.whatsapp.com/send?phone=5515997452271&text=Quero%20solicitar%20um%20or%C3%A7amento!">
                    Entrar em contato
                  </Link>
                </Button>
              </BlurFade>
              <div className="flex justify-between min-[825px]:hidden">
                <BlurFade inView>
                  <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <DrawerTrigger asChild>
                      <button aria-label="Open menu">
                        <Menu className="h-6 w-6 text-blueAm " />
                      </button>
                    </DrawerTrigger>
                    <DrawerContent className="bg-grayAm">
                      <BlurFade inView>
                        <div className="mt-12 flex flex-col items-center justify-center space-y-3 p-4 ">
                          {navItems.map((item) => (
                            <ScrollLink
                              key={item.to}
                              to={item.to}
                              smooth={true}
                              duration={500}
                              offset={-70}
                              spy={true}
                              activeClass="border-primary"
                              onClick={handleLinkClick}
                            >
                              <BlurFade inView>
                                <Button className="bg-blueAm rounded-lg w-48 border hover:bg-blueAm/90 border-neutral-400 text-lg text-grayAm">
                                  {item.name}
                                </Button>
                              </BlurFade>
                            </ScrollLink>
                          ))}
                        </div>
                      </BlurFade>
                    </DrawerContent>
                  </Drawer>
                </BlurFade>
              </div>
            </div>
          </div>
        </BlurFade>
      </header>
    </BlurFade>
  )
}

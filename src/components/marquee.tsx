'use client'

import { jura } from '@/lib/fonts'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

import Img1 from '@/assets/marquee/1.png'
import Img2 from '@/assets/marquee/2.png'
import Img3 from '@/assets/marquee/3.png'
import Img4 from '@/assets/marquee/4.png'
import Img6 from '@/assets/marquee/6.png'
import Img7 from '@/assets/marquee/7.png'
import Img8 from '@/assets/marquee/8.png'
import Img9 from '@/assets/marquee/9.png'
import Img10 from '@/assets/marquee/10.png'
import { ButtonCta } from './ui/button-cta'
import BlurFade from './ui/blur-fade'

export default function Componnet() {
  const images = [Img1, Img2, Img3, Img4, Img6, Img7, Img8, Img9, Img10]

  return (
    <div className="w-full mt-32">
      <BlurFade inView>
        <h1
          className={`${jura.className} font-black text-brownAm text-4xl text-center mx-auto max-w-[900px]`}
        >
          OBRAS REALIZADAS
        </h1>
      </BlurFade>

      <BlurFade inView>
        <Marquee gradient={false} speed={88} className="py-4 mt-8">
          {images.map((src, index) => (
            <div key={index} className="mx-4">
              <Image
                src={src}
                alt=""
                width={1563}
                height={1156}
                className="rounded-md lg:h-[370px] lg:w-[500px] h-[260px] w-[320px]"
              />
            </div>
          ))}
        </Marquee>
      </BlurFade>

      <BlurFade inView>
        <div className="flex items-center justify-center">
          <ButtonCta message="Solicite um orçamento!" />
        </div>
      </BlurFade>
    </div>
  )
}

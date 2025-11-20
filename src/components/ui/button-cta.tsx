import Link from 'next/link'
import { Button } from './button'

interface ButtonCtaInterface {
  message: string
  className?: string
}

export function ButtonCta({ message, className }: ButtonCtaInterface) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      // dispara o evento
      // sem redirecionamento porque você já usa <Link>
      window.gtag('event', 'conversion', {
        send_to: 'AW-16626951404/1FXaCJuL9cMbEOzJrPg9',
      });
    }
  };

  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5515996593858&text=Quero%20solicitar%20um%20or%C3%A7amento!"
      target="_blank"
      onClick={handleClick}
    >
      <Button className={`${className} bg-blueAm text-grayAm font-semibold hover:bg-blue-900 `}>
        {message}
      </Button>
    </Link>
  );
}

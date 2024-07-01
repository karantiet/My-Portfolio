import { IconType } from 'react-icons'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
 
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://x.com/chhabrakaran299',
    icon: FaXTwitter,

  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/karan__chhabra_/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chhabra-karan/',
    icon: FaLinkedin,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@Karan.chhabra',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/karantiet',
    icon: FaGithub,
  },
 
]

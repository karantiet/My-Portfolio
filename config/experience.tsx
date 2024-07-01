import { Link } from '@chakra-ui/react'

export type Company = 'KVM' | 'Thapar' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  KVM: {
    name: 'KVM',
    longName: '',
    subDetail: '',
    url: 'https://kvmschool.edu.in',
    position: 'Schooling',
    duration: '2008-2021',
    logo: {
      light: '/worked_at_logos/deloitte/KVMM.png',
      dark: '/worked_at_logos/deloitte/KVMM.png',
    },
    roles: [
      <>
       Completed schooling from Kundan Vidya Mandir, CBSE School, Ludhiana
      </>,
      <>
      Consistently performed as a high achiever throughout school years
     </>,
      <>
      Served as a member of the Student Prefect Council for 4 years.
      </>,
      <>
        Actively participated in the school sports team and won a state-level table tennis competition and participated in a variety of extracurricular activities
       
      </>,
      <>
        Was a member of the school band, playing both guitar and drums.
        
      </>,
      <>
      Enthusiastically explored diverse opportunities to broaden skills and experiences
      </>,
    ],
  },
  Thapar: {
    name: 'Thapar University',
    longName: 'Thapar University',
    subDetail: '',
    url: 'https://www.thapar.edu',
    position: 'Computer Engineering',
    duration: '2021-2025',
    logo: {
      light: '/worked_at_logos/scg/Thapar.jpg',
      dark: '/worked_at_logos/scg/Thapar.jpg',
    },
    roles: [
      <>
        Joined Thapar University, Patiala and currently pursuing a degree in Computer Engineering
      </>,
      <>
        Member of Microsoft Learn Student Chapter, TIET, serving as a core member handling Event Management
      </>,
      <>
       Joined SATURNALIA Annual Techno-Cultural Festival, directing publicity endeavors for the largest techno-cultural festival in North India with a footfall of 7000+ students
      </>,
      <>
        Played an integral role in the marketing division, securing sponsorships
      </>,
      <>
        Built strong networks with seniors and juniors
      </>,
    ],
  },
  Blotocol: {
    name: '',
    longName: '',
    subDetail: undefined,
    url: '',
    position: '',
    duration: '',
    logo: {
      light: '',
      dark: undefined
    },
    roles: undefined
  }
}

export const ExperiencesList = [
  Experiences.KVM,
  Experiences.Thapar
 
]

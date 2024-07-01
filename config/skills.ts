import { IconType } from 'react-icons'
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { PiVideoCameraFill } from "react-icons/pi";
import { SiChakraui } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";

import {
  
  SiJavascript,
  SiTypescript,
 
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,

  SiRedux,
 
  SiGhost,
  
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
 
 
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    
    {
      name: 'Node',
      icon: FaNodeJs ,
    },
    {
      name: 'Javascript ',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'MongoDB',
      icon: BiLogoMongodb,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'Javascript ',
      icon: SiJavascript,
    },
    {
      name: 'NextJS',
      icon: TbBrandNextjs,
    },
    {
      name: 'HTML',
      icon: FaHtml5,
    },
    {
      name: 'CSS',
      icon: IoLogoCss3 ,
    },
  ],
  database: [
    {
      name: 'Photoshop',
      icon: SiAdobephotoshop,
    },
    
    {
      name: 'Premierepro',
      icon: SiAdobepremierepro ,
    },
  
    {
      name: 'Final Cut',
      icon: PiVideoCameraFill,
    },
    
    
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GCP',
      icon: SiGooglecloud,
    },
    {
      name: 'AWS',
      icon: FaAws,
    },
    
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
    
  ],
  'ui frameworks': [
    
  
    
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui ,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Flutter',
      icon: BiLogoFlutter ,
    },


    
    
  ],
  games: [
    {
      name: 'Powerpoint',
      icon: SiMicrosoftpowerpoint,
    },
    {
      name: 'Excel',
      icon: RiFileExcel2Line ,
    },
  ],
  desktop: [
    {
      name: 'Windows Forms, WPF',
      icon: SiMicrosoft,
    },
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}

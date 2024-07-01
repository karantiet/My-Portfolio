import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, College projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Thapar Eats"
            src="/works/thapar-eats.png"
            description="Thapar Eats is a user-friendly food ordering website developed as team Project. Built using HTML, CSS, and JavaScript, the platform lists campus food outlets and integrates with the WhatsApp API to facilitate seamless ordering, enhancing convenience for students and staff."
            height={{ base: '100px', md: '225px', '2xl': '100px' }}
            ctaUrl="https://tieteats.netlify.app/home.html"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="SMART BASKET"
            description="SMART BASKET is a cutting-edge Capstone project, designed to revolutionize the shopping experience. The innovative mobile app enables seamless and quick shopping with self-checkout capabilities, eliminating the hassle of navigating local markets and waiting in queues."
            src="/works/cart.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="COMING SOON"
            description="STAY TUNED ....."
            src="/works/agora.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="COMING SOON"
            description="STAY TUNED ....."
            src="/works/tmh.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)

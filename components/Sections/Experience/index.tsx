import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
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
      Education
    </Heading>
    <Text variant="description">
    I completed my schooling at Kundan Vidya Mandir School, Ludhiana from 2008 to 2021, and then joined Computer Engineering at Thapar University, Patiala. I am currently in my final year and will be graduating in 2025.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)

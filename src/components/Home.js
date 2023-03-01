import {
    Center,
    Heading,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
    SimpleGrid,
} from '@chakra-ui/react'
import Station from './Station';
import { colorSelector } from './colorSelector';
import { statusConverter } from './statusConverter.js'

const Home = ({lines, time}) => {

    return(
        <Center p = '20px' bg='#373737'>
            <VStack spacing={4}>
                <Heading size='xl' color='#fffdee'>Estado Red Metro</Heading>
                <Heading size='sm' color='#fffdee'>Última vez actualizado: {time}</Heading>
                <Accordion allowToggle padding='20px' colorScheme='#9e9f99'>
                    {/* Líneas del metro */}
                    {lines.map((line) => 
                        <AccordionItem key={line.id}>
                            <AccordionButton>
                                <Box
                                    w={350}
                                    color='#fffdee'
                                    padding={3}
                                    borderRadius={5}
                                    as="span"
                                    flex='1'
                                    textAlign='left'
                                    bg={colorSelector(line.id)}>
                                    <SimpleGrid columns={2} spacing={20}>
                                        <Box>
                                            <Text as='b' fontSize='lg'>
                                                {line.name}
                                            </Text>
                                        </Box>
                                        <Box>
                                            {statusConverter(line.issues)}
                                        </Box>
                                    </SimpleGrid>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <Station
                                    stations = {line.stations}>
                                </Station>
                            </AccordionPanel>
                        </AccordionItem>
                    )}
                </Accordion>
                <Box>
                    <a href='https://github.com/iwayato/estado-metro'>
                        <svg
                            stroke="white"
                            fill="white" 
                            stroke-width="0" 
                            version="1.1" 
                            viewBox="0 0 32 32" 
                            focusable="false" 
                            class="chakra-icon css-9t64xk" 
                            height="3em" 
                            width="3em" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 
                                4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 
                                0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779
                                -1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020
                                -0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 
                                1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392
                                -1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 
                                0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 
                                0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 
                                0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 
                                3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 
                                1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 
                                0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 
                                0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666
                                -10.645 0-6.195-5.023-11.219-11.219-11.219z">
                            </path>
                        </svg>
                    </a>
                </Box>
            </VStack>
        </Center>
    )
}

export default Home;
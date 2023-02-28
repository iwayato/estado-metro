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
} from '@chakra-ui/react'
import Station from './Station';
import { colorSelector } from './colorSelector';

const Home = ({lines, time}) => {

    console.log(lines);

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
                                    color='#fffdee'
                                    padding={3}
                                    borderRadius={5}
                                    as="span"
                                    flex='1'
                                    textAlign='left'
                                    bg={colorSelector(line.id)}>
                                    <Text as='b' fontSize='lg'>
                                        {line.name}
                                    </Text>
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
            </VStack>
        </Center>
    )
}

export default Home;
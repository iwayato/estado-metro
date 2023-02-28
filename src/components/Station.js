import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Text,
} from '@chakra-ui/react'
import { statusConverter } from './statusConverter.js'

const Station = ({stations}) => {

    return(
        <TableContainer>
            <Table
                borderRadius={5}
                bg='#fffdee'
                variant = 'simple'
                size = 'md'>
                <Tbody>
                    {stations.map((station) => 
                        <Tr key={station.id}>
                            <Td>
                                <Text as='b' fontSize='md'>
                                    {station.name}
                                </Text>
                            </Td>
                            <Td>{statusConverter(station.status)}</Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default Station;
import { Badge } from '@chakra-ui/react'

export function statusConverter(statusCode) {
    switch (statusCode) {
        case false:
            return <Badge colorScheme='green'>Sin problemas</Badge>
        case true:
            return <Badge colorScheme='orange'>Con problemas</Badge>
        case 0:
            return <Badge colorScheme='green'>Operativa</Badge>
        case 1:
            return <Badge colorScheme='yellow'>Temporalmente cerrada</Badge>
        case 2:
            return <Badge colorScheme='red'>No habilitada</Badge>
        case 3:
            return <Badge colorScheme='blue'>Con accesos cerrados</Badge>
        default:
            return <Badge colorScheme='gray'>Sin información</Badge>
    }
}

export default statusConverter;
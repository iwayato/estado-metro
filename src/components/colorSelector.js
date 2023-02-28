export function colorSelector(lineID) {
    switch (lineID) {
        case 'L1':
            return '#ec1d25'
        case 'L2':
            return '#f8951d'
        case 'L3':
            return '#984907'
        case 'L4':
            return '#2e3192'
        case 'L4A':
            return '#057dbc'
        case 'L5':
            return '#1b9445'
        case 'L6':
            return '#a55daf'
        default:
            return 'lightgray'
    }
}

export default colorSelector;
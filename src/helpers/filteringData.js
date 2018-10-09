import { sortToOldest, sortToNewest } from './sortArrayObjects'

export default (sortFilter, column, data) => {
    if(sortFilter === 'up') {
        return sortToNewest(data, column)
    }

    return sortToOldest(data, column)
}
export const sortToOldest = (dataPost, column) => {
    const objKeys = Object.keys(dataPost)
    const dataToOrder = objKeys.map((keys) => dataPost[keys])
    const byColumn = dataToOrder.slice(0)
    
    return byColumn.sort((a,b) => {
        return a[column] + b[column] || a[column].toString().localeCompare(b[column], undefined, {sensitivity: 'base'})})
}

export const sortToNewest = (dataPost, column) => {
    const objKeys = Object.keys(dataPost)
    const dataToOrder = objKeys.map((keys) => dataPost[keys])
    const byColumn = dataToOrder.slice(0)
    
    return byColumn.sort((a,b) => a[column] - b[column] || a[column].toString().localeCompare(b[column], undefined, {sensitivity: 'base'}))
}
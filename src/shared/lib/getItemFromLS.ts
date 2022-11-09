export const getItemFromLS = (key: string) => {
    try {
        const lsItem = localStorage.getItem(key)
        if (lsItem !== null) {
            return lsItem
        }
        return "{}"
    } catch (e) {
        console.log(e)
        return "{}"
    }
}
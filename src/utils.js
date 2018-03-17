
export const sortComparator = (left, right) => {
    if (left.rating > right.rating) {
        return 1
    } else if (left.rating < right.rating) {
        return -1
    }
    return 0
}
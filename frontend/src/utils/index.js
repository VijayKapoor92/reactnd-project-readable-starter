import { compose } from 'redux'

export const

    getFirstArrayItem = array => array[0],

    filterArrayById = (array, id) =>
        array.filter(item => item.id === id),

    filterArrayByPath = (array, path) =>
        array.filter(item => item.path === path),

    filterArrayByParentId = (array, parentId) =>
        array.filter(item => item.parentId === parentId),

    filterArrayByCategory = (array, category) =>
        array.filter(item => item.category === category),

    findById = compose(
        getFirstArrayItem,
        filterArrayById
    ),

    findByPath = compose(
        getFirstArrayItem,
        filterArrayByPath
    ),

    findByParentId = compose(
        getFirstArrayItem,
        filterArrayByParentId
    )
;
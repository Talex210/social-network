import {useState} from 'react'
import style from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    PREV
                </button>
            }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page, index) =>
                        <span className={currentPage === page ? style.selectPage : style.selectPageOff}
                              onClick={() => {
                                  onPageChanged(page)
                              }}
                              key={index}>
                    {page}_
                </span>
                )}
            {portionCount > portionNumber &&
                <button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    NEXT
                </button>
            }
        </div>
    )
}

export default Paginator

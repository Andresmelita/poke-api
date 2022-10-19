import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, pagesLength, setPage}) => {

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrev = () => {
        setPage(page-1)
    }

    const handleNext = () => {
        setPage(page+1)
    }

    const handlePage = currentPage => {
        setPage(currentPage)
    }

    return (
        <div className='pagination'>
            {
                page > 1 && 
                <div onClick={handlePrev} className='pagination_prev pagination_active'>&#60;</div>
            }
            <div>...</div>
            <ul className='pagination_container'>
                {
                    arrPages.map(e => (
                        <li 
                            className={`pagination_page ${page === e && 'pagination_active'}`}
                            onClick={() => handlePage(e)}
                            key={e}>
                                {e}
                        </li>
                    ))
                }
            </ul>
            <div>...</div>
            {
                page < pagesLength &&
                <div onClick={handleNext} className='pagination_next pagination_active'>&#62;</div>
            }

        </div>
    )
}

export default Pagination
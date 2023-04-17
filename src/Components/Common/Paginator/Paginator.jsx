import style from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) =>
                <span className={currentPage === p ? style.selectPage : style.selectPageOff}
                      onClick={() => {
                          onPageChanged(p)
                      }}
                      key={i}>
                    {p}_
                </span>
            )}
        </div>
    )
}

export default Paginator

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import './index.css'

const ListItems = props => {
  const {details, removingItems} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const deleteItems = () => {
    removingItems(id)
  }
  return (
    <div className="card">
      <div className="time-card">
        <p>{timeAccessed}</p>

        <div className="logo-card">
          <img className="logo-img" src={logoUrl} />
          <p className="title">{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>

      <img
        className="logo-img"
        onClick={deleteItems}
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
      />
    </div>
  )
}

export default ListItems

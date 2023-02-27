/* eslint-disable react/button-has-type */
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
    <li className="card">
      <div className="time-card">
        <p>{timeAccessed}</p>

        <div className="logo-card">
          <img className="logo-img" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p>{domainUrl}</p>
        </div>
      </div>

      <button onClick={deleteItems} data-testid="delete">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default ListItems


import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updatedSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="list-content-container">
      <p>{suggestion}</p>
      <button className="button" type="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

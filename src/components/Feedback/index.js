import React from 'react'
import './index.css'

const FeedbackItem = props => {
  const {id, name, imageUrl, onClickImage} = props
  return (
    <li className="feedbackEmojis" key={id}>
      <img onClick={onClickImage} src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

class Feedback extends React.Component {
  state = {formStatus: true}

  onClickImage = () => {
    const {formStatus} = this.state
    this.setState({formStatus: !formStatus})
  }

  render() {
    const {formStatus} = this.state
    console.log(formStatus)
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div>
        <div className="feedback-container">
          {formStatus ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="items">
                {emojis.map(eachItem => (
                  <FeedbackItem
                    key={eachItem.id}
                    name={eachItem.name}
                    imageUrl={eachItem.imageUrl}
                    onClickImage={this.onClickImage}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <center>
                <img
                  className="heartIcon"
                  src={loveEmojiUrl}
                  alt="love emoji"
                />
                <h1>Thank You!</h1>
                <p>We will use your feecback to improve our customer support</p>
              </center>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback

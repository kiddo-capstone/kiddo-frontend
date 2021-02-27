import React from "react";
import ModalWrapper from "../../ui/modal/ModalWrapper";

// const useStyles

const StatusForm = () => {
  const emotions = ['😊', '🙂', '😁', '🥳', '😡', '😠', '😤', '🙄', '😭', '😢', '😟', '🥴', '🥱', '😳', '😖', '😰', '😧']
  
  const determineEmotion = (emoji) => {
    let emotion;
    if (emoji === '😊' || emoji === '🙂' || emoji === '😁' || emoji === '🥳') {
      emotion = 'joy';
    } else if (emoji === '😢' || emoji === '😭' || emoji === '😖') {
      emotion = 'sadness';
    } else if (emoji === '😧' || emoji === '😰' || emoji === '😟' || emoji === '😖') {
      emotion = 'fear';
    } else if (emoji === '😡' || emoji === '😤' || emoji === '😠') {
      emotion = 'anger';
    } else if (emoji === '🥴' || emoji === '🥱' || emoji === '😳') {
      emotion = 'disgust';
    }
    return emotion
  }

  const createInputs = () => {
    return emotions.map(emotion => {
      return (
        <label>
          { emotion }
          <input
            type='radio'
            name='status'
            value={ determineEmotion(emotion) }
          />
        </label>
      )
    })
  }

  return (
    <ModalWrapper btnMessage='►'>
      <h2>Agent Status Update</h2>
      { createInputs() }
    </ModalWrapper>
  )
}

export default React.memo(StatusForm);
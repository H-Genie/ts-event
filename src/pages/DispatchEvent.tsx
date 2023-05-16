import {SyntheticEvent} from 'react'

export default function DispatchEvent() {
  const onCallDispatchEvent = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('onCallDispatchEvent', isTrusted, target, bubbles)
    document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: true}))
  }
  const onCallClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('onCallClick', isTrusted, target, bubbles)
    document.getElementById('root')?.click()
  }

  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  )
}

export default function VariousInputs() {
  return (
    <div>
      <p>Various Input</p>
      <div>
        <input type="text" placeholder="enter some texts" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" placeholder="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}

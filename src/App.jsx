import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <div className="pt-[1.75rem] lg:pt-[2.25rem] overflow-hidden">
        <Header></Header>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App

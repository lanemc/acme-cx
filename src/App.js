import ContactRecommendation from './components/ContactRecommendation'

const App = () => {
  return (
    <>
      <div className="header">
        <h1 className="app-title">ACME CX</h1>
        <p className="app-subtitle"><em>Forecasting Better Connections</em></p>
      </div>
      <ContactRecommendation />
    </>
  )
}

export default App

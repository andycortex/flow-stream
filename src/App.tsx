import { useEffect, useState } from "react"
import api, { Weather } from "./api"
import { CITIES, City } from "./cities"

function App() {
  const [status, setStatus] = useState<"pending" | "success">("pending")
  const [weather, setWeather] = useState<Weather |null >(null)
  const [city, setCity] = useState<City>(CITIES["tarija"])

  function handleChangeCity (event: React.ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value as keyof typeof CITIES
    setCity(CITIES[city])
  }

  useEffect(() => {
    api.weather.fetch( city).then(weather => {
      setWeather(weather)
      setStatus("success")
    })
  }, [city])
  if (status === "pending") {
    return <div>Cargando...</div>
  }
  if (!weather) {
    return <div>Ciudad no está en la lista...</div>
  }
  
  return (
    <main>
      <select onChange={handleChangeCity} value={city.id}>
        {Object.values(CITIES).map((city) =>(
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>
      <h1>{weather.city.name}</h1>
      <ul>
        {weather.forecast.map((forecast, index) => (
        <li key={index}>{forecast.date} - Min: {forecast.min} °C, Max: {forecast.max}°C</li>
        ))}
      </ul>
    </main>
  )
}

export default App

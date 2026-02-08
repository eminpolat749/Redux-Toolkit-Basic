import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import UserList from './UserList';

function App() {
  const sayi = useSelector((state) => state.counter.value)

  // 2. EMİR VERME YETKİSİ (useDispatch)
  const dispatch = useDispatch()
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* State'ten gelen veriyi ekrana basıyoruz */}
      <h1>Şu anki Sayı: {sayi}</h1>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        
        {/* Butona basınca dispatch ile "increment" emrini yolluyoruz */}
        <button onClick={() => dispatch(increment())}>
          Artır (+)
        </button>

        {/* Butona basınca dispatch ile "decrement" emrini yolluyoruz */}
        <button onClick={() => dispatch(decrement())}>
          Azalt (-)
        </button>
        
      </div>
      <div>
        <UserList></UserList>
      </div>
    </div>
  )
}

export default App

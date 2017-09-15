import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.jsx'

const styles = {
  main: {
    height: '100%'
  }
}

export const MainLayout = ({content}) => (
  <div style={styles.main}>
    <Navbar />
    <main style={styles.main}>
      {content}
    </main>
  </div>
)

import React from "react"
import { Helmet } from "react-helmet"

const DarkThemeScript = () => {
  return (
    <Helmet>
      <script>
        {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }       
          `}
      </script>
    </Helmet>
  )
}

export default DarkThemeScript

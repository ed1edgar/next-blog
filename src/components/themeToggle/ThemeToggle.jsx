'use client'

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const {theme,toggle} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={styles.container} onClick = {toggle}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={styles.ball} style={
        theme === 'dark' 
          ? {left:1,backgroundColor:"#fff"}
          : {right:1.1,backgroundColor:"#0f172a"}
        }
        ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle

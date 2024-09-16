import React from 'react'
import HeroSection from './components/Home/HeroSection'
import FeaturePost from './components/Home/FeaturePost'
import RecentPost from './components/Home/RecentPost'

export default function Home() {
  return (
    <div>
    <HeroSection />
    <FeaturePost />
    <RecentPost />
    </div>
  )
}

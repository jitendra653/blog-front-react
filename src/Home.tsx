import React from 'react'
import HeroSection from './components/HeroSection.tsx'
import FeaturePost from './components/FeaturePost.tsx'
import RecentPost from './components/RecentPost.tsx'
import PostSection from './components/PostSection.tsx'

export default function Home() {
  return (
    <div>
            {/* <Header /> */}
    {/* <Hero />
      <Posts /> */}


    <HeroSection />
    <FeaturePost />
    <RecentPost />
    <PostSection />



    </div>
  )
}

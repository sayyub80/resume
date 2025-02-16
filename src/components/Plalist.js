import React from 'react'
import PlaylistCard from '../components/PlalistCard'
import {playlists} from '@/lib/common'
function Plalist() {
  return (
    <>
       <section className="relative z-10 max-w-4xl mx-auto mb-20">
        <h2 className=" text-2xl md:text-3xl font-bold mb-8 ">My Playlist</h2>

        <div className="relative ">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 w-[0.2rem] h-full bg-gray-700" />

          {/* Education Items */}
          <div className=" space-y-12  pl-8">
            {playlists.map((p) => (
              <PlaylistCard
                key={p.id}
                title={p.title}
                description={p.description}
                link={p.spotifyLink}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Plalist

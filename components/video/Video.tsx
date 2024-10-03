import { VideoCard } from "./VideoCard";

import videos from "@/mockups/videos.json";

export const Video = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-wrap justify-center gap-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

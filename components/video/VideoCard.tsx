type Props = {
  video: VideoType;
};

export const VideoCard = ({ video }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-[280px] p-4  bg-bg3">
      <img className="w-[248px] h-[140px]" src={video.card} />
      <div className="text-sm font-medium text-white">{video.name}</div>
      <div className="flex justify-between text-[10px] text-white">
        <div className="text-[#A5A5A5]">{video.createdat}</div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4">
            <use href="/icons/tools-sprite.svg#icon-viewers"></use>
          </svg>
          {video.viewcount}
        </div>
      </div>
    </div>
  );
};

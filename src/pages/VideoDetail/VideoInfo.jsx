import { millify } from 'millify';
import { useState } from 'react';


const VideoInfo = ({ video }) => {
  // Metnin tamamı gösterilecek mi state 'i
const [isFull, setIsFull] = useState(false);

// Tarih formatlama
  const date = new Date(video.publishDate).toDateString('tr', {
    day: 'numeric',
    mount: 'short',
    year: 'numeric'
  });

  // Metnin Karakter sınırı
  const text = isFull 
  ? video.description
  : video.description.slice(0,150) + '...daha fazla';

  return (
    <div onClick={() => setIsFull(!isFull)}
     className="bg-zinc-700 rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80">
      <div className="flex gap-4 mb-2">
        <p>{millify(video.viewCount)}Görüntülenme</p>
        <p>{date}</p>
        </div>
        <p>{text.split('\n').map((line, key) => (
        <span key={key}>
          {line}  <br />
        </span>
      ))}
      </p>
      
    </div>
  );
};

export default VideoInfo;

import { Play } from "lucide-react";

export default function UGCSection() {
  const videos = [
    { id: 1, title: "Sarah's Story", thumbnail: "/images/marketing-1.png", duration: "0:45" },
    { id: 2, title: "Mike's Experience", thumbnail: "/images/marketing-2.png", duration: "1:12" },
    { id: 3, title: "Family Peace of Mind", thumbnail: "/images/marketing-3.png", duration: "0:58" },
    { id: 4, title: "Senior Independence", thumbnail: "/images/marketing-4.png", duration: "1:05" }
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Real Stories</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
            Community Stories
          </h2>
          <p className="text-xl text-gray-400">
            See how MySentry is changing lives every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

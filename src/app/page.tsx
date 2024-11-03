import BackgroundSlider from '@/components/home/BackgroundSlider';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundSlider />
      <div className="relative z-10 pt-20 px-4 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-heading text-text-light mb-4">
          Restaurant Name
        </h1>
        <p className="text-xl md:text-2xl font-body text-text-light max-w-2xl">
          Une expérience culinaire unique au cœur de Paris
        </p>
      </div>
    </div>
  );
}

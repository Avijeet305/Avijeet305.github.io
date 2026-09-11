import BackgroundOrbs from "./components/BackgroundOrbs";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <BackgroundOrbs />
      <div className="container-card relative z-[1] mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_24px_60px_rgba(28,36,52,0.08)]">
        <div className="top-accent" />
        <div className="grid grid-cols-[0.9fr_2fr] max-[780px]:grid-cols-1">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
}

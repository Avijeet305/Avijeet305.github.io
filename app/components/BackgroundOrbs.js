export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <span className="orb top-[8%] left-[-60px] h-[280px] w-[280px] bg-coral" />
      <span className="orb top-[40%] right-[-50px] h-[240px] w-[240px] bg-accent [animation-delay:-4s]" />
      <span className="orb bottom-[4%] left-[30%] h-[200px] w-[200px] bg-teal [animation-delay:-8s]" />
    </div>
  );
}

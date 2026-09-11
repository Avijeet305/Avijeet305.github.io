import Image from "next/image";
import { contacts, languages, tools } from "@/lib/data";
import CvActions from "./CvActions";

export default function Sidebar() {
  return (
    <aside className="border-r border-[#f3e7df] bg-gradient-to-b from-[#fff8f4] from-[0%] to-white to-[38%] px-[1.8rem] py-8 max-[780px]:border-r-0 max-[780px]:border-b max-[780px]:border-[#f3e7df]">
      <div className="mb-8 flex flex-col items-center reveal">
        <div className="avatar-wrapper">
          <span className="avatar-ring" aria-hidden="true" />
          <Image src="/image/Avijeet.jpeg" alt="Avijeet Shah" width={140} height={140} />
        </div>
      </div>

      <h2 className="mt-2 text-center text-[1.6rem] font-semibold tracking-[-0.3px] text-ink reveal delay-1">
        Avijeet Shah
      </h2>
      <div className="mb-8 text-center text-[0.9rem] text-muted reveal delay-1">
        I am a Full-stack Developer
      </div>

      <div className="my-[1.8rem] reveal delay-2">
        <h3 className="section-title">
          <i className="fas fa-code" /> language
        </h3>
        <div>
          {languages.map((item) => (
            <span key={item} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="my-[1.8rem] reveal delay-3">
        <h3 className="section-title">
          <i className="fas fa-tools" /> Tools
        </h3>
        <div>
          {tools.map((item) => (
            <span key={item} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="my-[1.8rem] reveal delay-4">
        <h3 className="section-title">
          <i className="fas fa-address-card" /> Contact
        </h3>
        {contacts.map((item) => (
          <div key={item.label} className="contact-item">
            <i className={item.icon} /> {item.label}
          </div>
        ))}
      </div>

      <CvActions />
    </aside>
  );
}

import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { useWindowSize } from "../../hooks/window";

function Manifesto({ isOpen, setIsOpen, isScrolled }) {
  const { width } = useWindowSize();

  return (
    <>
      <button
        className="button-manifesto"
        onClick={() => setIsOpen(true)}
      >
        <div className={`pointer p-[2px] transition duration-500 ease-in-out hover:scale-[120%] grayscale ${isScrolled ? "opacity-0" : ""}`}>
          <Image src="/book.svg" height={width > 900 ? 110 : 90} width={width > 900 ? 140 : 100} />
        </div>
      </button>

      <div
        className={`bg-[#f3f5f4] flex justify-center overflow-x-hidden transition-all duration-500 ease-in-out
          ${isOpen
            ? "opacity-100 h-screen w-screen absolute left-0 top-0"
            : "opacity-0 absolute"
          }
          ${width > 1000 ? "items-center" : ""}
        `}
        onClick={() => setIsOpen(false)}
        id={`manifesto-${isOpen ? "open" : "closed"}`}
      >
        <div
          className={`px-[2rem] md:px-[5rem] lg:px-[10rem] max-w-7xl py-[2rem] h-fit ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between">
            <h1 className="text-4xl font-medium">A Tale of Two Worlds</h1>
            <AiOutlineClose
              size="32px"
              className="cursor-pointer transition duration-200 hover:text-themeLightOrange"
            />
          </div>
          <br />

          <p>
            Our journey begins through the eyes of Bonan, a misguided soul
            trapped in the confines of his cubicle. Slaving away on wearisome
            tasks, that get him no closer to his life goals. Tick tock, tick
            tock. Minutes die a way at the clock. Minutes have turned into days
            and days turned to years. Bonan tires of these mundane
            responsibilities. The only change that has come is the amount of
            time he spends in his work-tailored cell, slowly losing touch with
            the outside world. Doubts seep in about his current occupation, and
            realizations of a better life began to flood his thoughts. “Life is
            more than this.” He once exclaimed to his boss. “What do you mean?”
            he asked. In that moment Bonan knew he was meant for more, and
            instantaneously said, "Fuck This Shit." and quit. Breaking the
            chains of employment that society had bonded him to.
          </p>
          <br />
          <p>
            A few steps after leaving his place of work, the worry sank in. What
            will his friends and family think? For a moment excitement and
            dreams turned to woe and fear. Deciding a walk was the best way to
            cope, Bonan wanders off into the woods not far from his job.
            Thoughtless steps turned into reflective thinking. This is a new
            world we live in. A world where possibilities are endless. A digital
            ecosystem where imagination is the only tool necessary to create
            your own utopia. Bonan starts to worry less about his current
            financial situation and begins to salivate over the opportunity at
            hand.
          </p>
          <br />
          <p>
            As Bonan continues his journey through the woods, the environment
            around him slowly begins to change. The area was beautiful and vast,
            yet surprisingly quiet and undisturbed. Straight ahead was a
            worn-down bridge over a reflective creek. The land beyond the bridge
            looked unknown to Bonan. Curious, he mustered up the courage to
            cross. His first steps were unsettling, not knowing if the bridge
            would hold. Careful steps quickly broke into a mindless sprint,
            leading Bonan to an unknown world filled with possibilities.
          </p>
          <br />
          <p style={{ fontStyle: "italic" }}>Would you cross the Bridge?</p>
          <br />
          <div className="h[50px]">
            <Image
              src="/logos/bonanza-official-min.png"
              alt="Bonanza"
              height="32px"
              width="140px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manifesto;

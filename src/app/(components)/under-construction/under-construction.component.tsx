import Image from "next/image";

export const UnderConstruction = () => {
  return (
    <Image
        src="/images/under-construction.webp"
        width={1024}
        height={775}
        alt="Work on Progress"
        className="w-full h-auto rounded saturate-70"
      />
  );
};

export default UnderConstruction;
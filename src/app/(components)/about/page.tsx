import { FC } from "react";
import Image from "next/image";

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen">
      <Image
        src="/images/work-on-progress.webp"
        width={1024}
        height={1024}
        alt="Work on Progress"
        className="rounded saturate-70"
      />
    </div>
  );
};

export default ContactPage;

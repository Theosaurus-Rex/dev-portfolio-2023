import { SocialIcon } from "react-social-icons";

const PageFooter = () => {
  return (
    <footer>
      <div className="border-t-4 bg-blue border-black py-6 text-center text-black flex flex-col-reverse md:flex-row items-center md:justify-between font-kanit font-bold text-lg uppercase italic tracking-wider px-4">
        <p aria-label="Developed with love by Theo Harris">
          Developed with ♡ by Theo Harris
        </p>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <SocialIcon
            label="See Theo on LinkedIn"
            url="https://www.linkedin.com/in/theo-harris-coder/"
            bgColor="white"
            fgColor="black"
            target="_blank"
            style={{ border: "3px solid black", borderRadius: "50%" }}
          ></SocialIcon>
          <SocialIcon
            label="See Theo's profile on GitHub"
            url="https://github.com/Theosaurus-Rex"
            bgColor="white"
            fgColor="black"
            target="_blank"
            style={{ border: "3px solid black", borderRadius: "50%" }}
          ></SocialIcon>
          <SocialIcon
            label="See Theo's design work on Dribbble"
            url="https://dribbble.com/Theosaurus-Rex"
            bgColor="white"
            fgColor="black"
            target="_blank"
            style={{ border: "3px solid black", borderRadius: "50%" }}
          ></SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;

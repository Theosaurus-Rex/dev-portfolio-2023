import { SocialIcon } from "react-social-icons";

const PageFooter = () => {
  return (
    <footer>
      <div className="border-t border-gray-500 mt-6 py-6 text-center text-gray-600 flex flex-col space-y-4 items-center">
        <div className="flex space-x-4">
          <SocialIcon
            url="https://www.linkedin.com/in/theo-harris-coder/"
            bgColor="#9333ea"
            target="_blank"
          ></SocialIcon>
          <SocialIcon
            url="https://github.com/Theosaurus-Rex"
            bgColor="#9333ea"
            target="_blank"
          ></SocialIcon>
          <SocialIcon
            url="https://dribbble.com/Theosaurus-Rex"
            bgColor="#9333ea"
            target="_blank"
          ></SocialIcon>
        </div>
        <p>Developed with 💜 by Theo Harris</p>
      </div>
    </footer>
  );
};

export default PageFooter;

import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/3-Folder-Network.svg"
            fill
            className="object-contain dark:hidden"
            alt="3-Folder-Network"
          />
          <Image
             src="/009-storage.svg"
             fill
             className="object-contain dark:block"
             alt="storage"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/friendship.png"
            fill
            className="object-contain dark:hidden"
            alt="Friendship"
          />
          <Image
            src="/friendship.png"
            fill
            className="object-contain hidden dark:block"
            alt="Friendship"
          />
        </div>
      </div>
    </div>
  );
};

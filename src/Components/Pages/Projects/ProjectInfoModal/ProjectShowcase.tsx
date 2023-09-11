import { useState } from 'react';

const ProjectShowcase = ({ images }) => {
  const [imageSelected, setImageSelected] = useState<string>(
    images[0] ?? 'https://picsum.photos/500'
  );

  const updateImageSelected = (image: string) => {
    setImageSelected(image);
  };

  return (
    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {/* main main */}
      <div className="mt-4">
        <figure className="">
          <img
            src={imageSelected}
            alt="project image"
            width={500}
            height={500}
            loading="lazy"
            className="w-full md:h-[50vh] h-[50vw] rounded-md shadow"
          />
        </figure>
      </div>

      {/* project images */}
      <div className="flex flex-wrap gap-2 mt-2">
        {images.map((image: string, index: number) => (
          <img
            key={index}
            onClick={() => updateImageSelected(image)}
            src={image}
            alt="project image"
            width={100}
            height={100}
            loading="lazy"
            className={`
                   md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] bg-gray-300 rounded-md cursor-pointer hover:opacity-100 shadow ${imageSelected === image ? 'opacity-100' : 'opacity-40'}`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;

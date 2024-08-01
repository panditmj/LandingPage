import React from 'react';

const expertsData = [
  {
    id: 1,
    title: 'LEARN FROM EXPERTS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.',
    buttonText: 'Get Started',
    img: '/student/Blog_Img.jpeg',
  },
  // Add more objects here if needed
];

function Experts() {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10">
      {expertsData.map((expert) => (
        <div key={expert.id} className="md:grid grid-cols-2 gap-4 mb-10">
          <div className="col-span-1 md:w-[60%] text-center mx-auto">
            <img src={expert.img} alt="Expert" className="inline" />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-[#00ff40] font-bold my-2">{expert.title}</h1>
            <p className="my-2 text-justify">{expert.description}</p>
            <button className="w-[30%] bg-black text-white p-3 rounded">{expert.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experts;

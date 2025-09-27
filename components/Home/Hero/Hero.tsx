"use client"

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

function Hero() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageGenerate = async () => {

    setLoading(true);

    const options = {
  method: 'POST',
  url: 'https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php',
  headers: {
    'x-rapidapi-key': 'e1cadccb18msh8d0437124b2b945p1e46a7jsne05abf0ef24b',
    'x-rapidapi-host': 'ai-text-to-image-generator-flux-free-api.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
   prompt: prompt,
    style_id: 4,
    size: '1-1'
  }
};


    try {
      const response = await axios.request(options);
      console.log(response.data);
      setImage(response.data.url);
      toast.success("Image generated successfully");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handledownloadimage = () =>{
    const link = document.createElement("a");
    link.target="_blank";
    link.href=image;
    link.download="generated-img.jpg";
    link.click();
  }

  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      <div className="relative z-10 text-white flex flex-col items-center justify-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center
        bg-gradient-to-r from-orange-400 to-cyan-300 bg-clip-text text-transparent">
          Create Beautiful Image <br /> AI
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm text-center text-gray-300 md:text-base font-semibold">
          Start creating unique, high-quality images in seconds with the power of AI.
        </p>

        {/* Input + Generate Button */}
        <div className="h-12 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Generate your thoughts into image"
            className="h-full rounded-lg outline-none w-full text-black flex-1 placeholder:text-xs sm:placeholder:text-base text-center"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            onClick={handleImageGenerate}
            variant="default"
            size="lg"
            className="ml-2"
            disabled={loading}
          >
            {loading ? "Generating..." : "Create"}
          </Button>
        </div>

        {/* Display Generated Image */}
        {image && (
          <img
            src={image}
            alt="Generated"
            className="mt-6 w-[80%] max-w-xl rounded-lg shadow-lg"
          />
        )}

        {/* Popular Tags */}
        <div className="flex items-center mt-6 space-x-2 flex-wrap justify-center">
          <p className="font-semibold">Popular Tags :</p>
          <Button variant="secondary">Creative</Button>
          <Button variant="secondary">Fantasy</Button>
          <Button variant="secondary">Portrait</Button>
          <Button variant="secondary">Art</Button>
          <Button variant="secondary">AI</Button>

          
        </div>
            { loading &&(
            <div>
                <Loader className='animate-spin mt-6'/>
            </div>
        )} 
         
     {image && (
  <div className="mt-8 flex flex-col items-center">
    <img
      src={image}
      alt="Generated AI"
      className="max-w-full h-[500px] rounded-lg shadow-lg"
      loading="lazy"
    />
    <Button
      onClick={handledownloadimage}
      className="mt-4 mb-4 bg-orange-500 hover:bg-orange-600"
    >
      Download
    </Button>
  </div>
)} 


         {/* <div className="mt-8 flex flex-col ">
            <img
              src={image}
              alt="Generated AI"
              className="max-w-full h-[500px] rounded-lg shadow-lg"
              loading="lazy"
            />
            <Button
              onClick={handledownloadimage}
              className="mt-4 mb-4 bg-orange-500 hover:bg-orange-600"
            >
              Download
            </Button>
          </div>  */}
        
      </div>
    </div>
  );
}

export default Hero;

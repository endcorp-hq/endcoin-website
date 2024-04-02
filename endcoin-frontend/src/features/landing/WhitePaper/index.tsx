import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkEmoji from 'remark-emoji';
import rehypeHighlight from 'rehype-highlight';
import 'github-markdown-css';
import './whitepaper.css';

type Props = {};

const WhitePaper = (props: Props) => {
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/alvr-org/ALVR/readme',
        );
        if (response.ok) {
          const readmeInfo = await response.json();
          const readmeContent = atob(readmeInfo.content);

          // Update state or do something with the README content

          setReadmeContent(readmeContent);
        } else {
          console.error('Failed to fetch README');
        }
      } catch (error) {
        console.error('Error fetching README:', error);
      }
    };

    fetchReadme();
  }, []);

  return (
    <div
      id="whitepaper"
      className="flex flex-col text-left justify-center font-endcoin pt-[72px] endcoin-xl:pt-[130px] !text-end-hover-gold w-full bg gap-y-2 endcoin-md:gap-y-10"
    >
      <div className="text-end-hover-gold text-[20px] endcoin-lg:text-[24px] endcoin-xl:text-[36px] mt-[20px] endcoin-xl:pb-5">
        <p>WHITE PAPER</p>
      </div>
      {!readmeContent ? (
        <p>Loading</p>
      ) : (
        <Markdown
          className="markdown-body !max-w-[90vw] p-4 rounded bg-shadow  endcoin-md:!max-w-full !max-h-fit !overflow-x-scroll w-full"
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          remarkPlugins={[remarkGfm, remarkEmoji]}
        >
          {readmeContent}
        </Markdown>
      )}
    </div>
  );
};

export default WhitePaper;

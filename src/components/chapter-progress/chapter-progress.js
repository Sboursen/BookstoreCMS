import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';

export default function ChapterProgress(props) {
  const { chapter } = props;
  const [currentChapter, setCurrentChapter] = useState(50);
  useEffect(() => {
    setCurrentChapter(currentChapter);
  }, [chapter]);

  return (
    <div className="flex flex-col gap-2 justify-center items-start w-64 ">
      <span className="text-black-two font-roboto font-light text-sm opacity-50">
        CURRENT CHAPTER
      </span>
      <span className="text-black-two font-roboto font-light">
        {chapter}
      </span>
      <Button text="UPDATE PROGRESS" />
    </div>
  );
}

ChapterProgress.propTypes = {
  chapter: PropTypes.string.isRequired,
};

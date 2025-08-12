"use client";

import { Fragment, useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
      <div className="bg-blue-900/20 p-5">
        <p className="text-lg text-white/70 text-center">{`©Silki ${year}. All Rights Reserved.`}</p>
      </div>
    </Fragment>
  );
};

export default Footer;
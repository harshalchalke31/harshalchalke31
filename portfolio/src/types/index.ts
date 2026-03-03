
export type ProjectType = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
  courses: string[];
};


export type ToolsType = {
  imgSrc: React.ElementType;
  label: string;
};


export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};
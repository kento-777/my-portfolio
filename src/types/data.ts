/*Top*/
type topItems = {
  id: string;
  to: string;
  class: string;
  mouseover: any;
};
export type TopDataType = {
  text1: string;
  text2: string;
  neverHover: boolean;
  hoverAbout: boolean;
  hoverWorks: boolean;
  hoverSkills: boolean;
  items: Array<topItems>;
};
/*About*/
type aboutItems = {
  id: number;
  year: string;
  title: string;
  explain: string;
  isActive: boolean;
  delay: number;
};
export type AboutDataType = {
  explainText1: string;
  explainText2: string;
  explainText3: string;
  explainText4: string;
  explainText5: string;
  items: Array<aboutItems>;
};
/*Skills*/
type skillItems = {
  img: string;
  title: string;
  percent: string;
  explain: string;
  animation: string;
};
export type SkillDataType = {
  items: Array<skillItems>;
};
/*Works*/
type workItems = {
  title: string;
  id: number;
  src: string;
  alt: string;
  explain1: string;
  explain2: string;
  href: string;
  urlTitle: string;
};
export type WorkDataType = {
  items: Array<workItems>;
};

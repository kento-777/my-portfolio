/*=====TOP.vue=====*/
/*data*/

export const 
  text1: string = "This guy is a frontend engineer.",
  text2: string = "This guy makes you happy through engineering.",
  neverHover: boolean = true,
  hoverAbout: boolean = false,
  hoverWorks: boolean = false,
  hoverSkills: boolean = false,
  topItems: {
    title: string;
    to: string;
    class: string;
    mouseover: string;
  }[] = [
    {
      title: "about",
      to: "/about",
      class: "link__about",
      mouseover: "overAbout",
    },
    {
      title: "works",
      to: "/works",
      class: "link__works",
      mouseover: "overWorks",
    },
    {
      title: "skills",
      to: "/skills",
      class: "link__skills",
      mouseover: "overSkills",
    },
  ];

/*methods*/
export const reset = ():void => {
  neverHover = false;
  hoverAbout = false;
  hoverWorks = false;
  hoverSkills = false;
}
function overAbout(): void {
  reset();
  hoverAbout = true;
}
function overWorks(): void {
  reset();
  hoverWorks = true;
}
function overSkills(): void {
  reset();
  hoverSkills = true;
}
function mouseLeaveAction(): void {
  reset();
  neverHover = true;
}
/*=====About.vue=====*/
/*data*/

/*=====Skills.vue=====*/
/*=====Works.vue=====*/



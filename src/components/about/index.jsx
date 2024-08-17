import { ItemLayout} from './ItemLayout'

export const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 md:gap-8 xs:gap-6 gap-4 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Architect Of Enchantment
          </h2>
          <p className="font-light sm:text-sm md:text-base text-xs">
            I am a front-end developer. My journey began when I realized I
            wanted to work using my intellect and with my mind rather than
            through physical presence at a job. I appreciate the ability to
            create from anywhere in the world. Adding new elements to projects,
            learning current technologies, and continuous self-development are
            my main motivators.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6  lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            B1 <sub className="font-semibold text-base">English</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6  lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            B1 <sub className="font-semibold text-base">German</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=gonanig&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Gonanig"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=gonanig&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Gonanig"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,wasm,babel,bitbucket,bootstrap,discord,docker,figma,git,github,gitlab,gmail,gulp,ai,jenkins,jest,less,mongodb,mysql,nextjs,nodejs,npm,postgres,postman,react,redux,sass,stackoverflow,tailwind,svg,threejs,ts,visualstudio,vscode,vite,webpack,webstorm,yarn"
            alt="Gonanig"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=gonanig&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakNum=FEFE5B"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=gonanig&repo=apple_website&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="Gonanig"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

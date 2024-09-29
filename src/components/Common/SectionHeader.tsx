type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <div className="animate_top mx-auto text-center">
      <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
        <span className="text-sectiontitle font-medium text-black dark:text-white">
          {title}
        </span>
      </div>
      <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
        {subtitle}
      </h2>
      <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
    </div>
  );
};

export default SectionHeader;

import { profile, sections } from "../data/simplePortfolio";

function SimplePortfolio() {
  return (
    <div className="simple-portfolio min-h-screen">
      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="flex flex-col-reverse gap-10 min-[720px]:flex-row min-[720px]:gap-16 lg:gap-24">
          <main className="min-w-0 flex-1">
            <div className="flex flex-col gap-10 sm:gap-14">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="simple-serif mb-4 text-[15px] italic leading-none text-[#1a1a1a] sm:mb-6 sm:text-[17px]">
                    {section.title}
                  </h2>
                  <ul className="flex flex-col gap-3 sm:gap-5">
                    {section.items.map((item) => {
                      const TitleTag = item.href ? "a" : "span";
                      const titleProps = item.href
                        ? {
                            href: item.href,
                            target: "_blank",
                            rel: "noreferrer",
                          }
                        : {};

                      return (
                        <li
                          key={`${section.title}-${item.title}`}
                          className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-baseline gap-x-2 sm:grid-cols-[minmax(0,1.5fr)_auto_minmax(7rem,0.9fr)] sm:gap-x-8"
                        >
                          <p
                            className="truncate text-[11px] leading-snug text-[#6e6e6e] sm:overflow-visible sm:whitespace-normal sm:text-[14px]"
                            style={{ fontFamily: "Switzer, sans-serif" }}
                          >
                            {item.description}
                          </p>
                          <p className="simple-meta shrink-0 whitespace-nowrap text-[8px] sm:min-w-[7.5rem] sm:text-left sm:text-[10px]">
                            {item.category}
                          </p>
                          <TitleTag
                            {...titleProps}
                            className={`simple-serif shrink-0 whitespace-nowrap text-[12px] leading-snug italic text-[#2a2a2a] sm:text-right sm:text-[16px] ${
                              item.href
                                ? "hover:text-black transition-colors"
                                : ""
                            }`}
                          >
                            {item.title}
                          </TitleTag>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
          </main>

          <aside className="flex w-full shrink-0 flex-col min-[720px]:sticky min-[720px]:top-16 min-[720px]:w-[240px] min-[720px]:self-start lg:w-[260px]">
            <img
              src={profile.photo}
              alt="Andrew Hwang"
              className="w-3/4 h-auto"
            />
            <p className="simple-serif mt-5 text-[13px] leading-[1.7] text-[#3d3d3d] sm:mt-6 sm:text-[15px]">
              <em className="italic text-[#1a1a1a]">{profile.name}</em>{" "}
              {profile.bio}
            </p>
            <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 sm:mt-10">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="simple-meta hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default SimplePortfolio;

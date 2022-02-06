import Link from "next/link"

const Footer = ({ footer }) => {
  const { socialFooter } = require("./app-config/social.json");
  return (
    <footer className="bg-primary">
      <div className="container flex flex-col md:flex-row md:justify-between">
        <div className='px-6 py-2 md:p-6 font-semi-bold text-sm md:text-xl'>
          <Link href="/">
            <img src="/assets/home.svg" className="w-12 hover:bg-secondary rounded" />
          </Link>
        </div>
        <div className="flex flex-row text-sm px-6 py-2 md:p-6 text-gray-700 gap-6 justify-end">
          <div className="flex flex-row gap-6 ">
            { socialFooter.map((social) => (
            <div key={social.id}>
              <a href={social.url} target="_blank">
              { social.icon && (
                <img src={social.icon} className="w-12 hover:bg-orange-300 rounded" />
              )
              }
              </a>
            </div>
            ))
          }
          </div>
        </div>
        </div>
   </footer>
  );
};

export default Footer;

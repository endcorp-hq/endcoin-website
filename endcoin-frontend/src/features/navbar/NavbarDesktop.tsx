import { EndLogo } from '../../icons/logo.icon';
import { NAVBAR_LINKS } from '../../constants/navbar-items';
import './navbar.css';

const SidebarDesktop = (): JSX.Element => {
  const scrollToDiv = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <>
      <header
        className={`top-0 h-[120px] w-full left-1/2 -translate-x-1/2 flex items-center z-50 fixed bg`}
      >
        {
          <div
            className={
              'w-full flex items-center justify-center m-auto relative'
            }
          >
            <div
              className={
                'max-w-[1300px] flex px-[20px] items-center w-full justify-between'
              }
            >
              <EndLogo />

              {
                <ul className={`flex gap-x-24`}>
                  {NAVBAR_LINKS.map((navTag: any, index: any) => {
                    return (
                      <>
                        <div key={index}>
                          <button
                            className={
                              'w-full text-[#868472] hover:text-[#D3B280]'
                            }
                            onClick={() => scrollToDiv(navTag.link)}
                          >
                            {navTag.name}
                          </button>
                          {/*!isLandingPage && renderShader(navTag)*/}
                        </div>
                      </>
                    );
                  })}
                </ul>
              }
            </div>
          </div>
        }
      </header>
    </>
  );
};

export default SidebarDesktop;

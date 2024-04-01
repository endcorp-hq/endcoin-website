import { EndLogo } from '../../icons/logo.icon';
import { NAVBAR_LINKS } from '../../constants/navbar-items';
import { scrollToDiv } from '../../constants/scrollFunction';
import './navbar.css';

const SidebarDesktop = (): JSX.Element => {
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
              <button
                onClick={() => {
                  scrollToDiv('coin');
                }}
              >
                <EndLogo />
              </button>

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

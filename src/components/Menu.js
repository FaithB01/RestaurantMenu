import React from 'react'
import Button from './Button'
import MainMenu from './MainMenu'
import PropTypes from 'prop-types'

import Video from './Video'


function Menu({menuItems}) {
  return (
    <>
     <section className="card-section">
    <div className="card">
        <div className="flip-card">
            <div className="flip-card__container">
                <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      <img src="data:image/jpeg;base64,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sw6MzMVQH8owWPyPSW+zoCoVbGmkg00VAwAAMa8dPy+AkdV9l7wlarbO11TUopA7rZyAw3xjdt8bajI+PWOp/Kvk3lu/w6eHWC26U6FM4p24UueRqVDvlvrrPqPCVb+I07Hit092WRaqAo4VmyCE5aQT90j1WXyhb9zS+5YHV4MzfF8t8DyAkZVo11wrUqVdV+F2xqXwzq6+YlXHcmvpMut7+1U7T8VrXVo/utB0tEUFnYaWrKCMCmvPQPiLdceRzE9n+LUGWkb12q+xAWha06bMCyj42AGl3PTJ8T1wPRjTu/j10yeXs8d3T+r8X+8z4UKdZSfZWlCix5vhfr3dz+8m+O272qZyTWlU7V8O4leqjew00ySVoh11ry0tVLEAsfAfDjxkseBNQsa4Qe1u2ohHIwWAYaQieCKurAGM4z1k7/CHPea6q6z8RU6VPkAOQmTwfSAaVR0cZy57xfP4x15Svjm7We91pSuBXV3Ss1tbSyrrXJctUdNFNdTHDKXxqbTpG/LHWa8F4Dfmg1Cqy2tBmZqrkg16mrAYEhiMEDGTj58jdjY3DbPdED8qBW+oxiE4MCQa1R6uOQYnSPlJnj/NPe86is8T4IiULduHUParQuFqOoOKlU0wcFmIyd/Lk2wxOng9K49s1/fFqXdKUrcMTseQI6n1GSTk4wBLFc8My2ulUak2ADpHdYDllduUWvDdLa6lRqjjkW5L+lehlek3tntdad6E4GRg4GR4HrMxEtJERAREQEREBERAREQEREBERAwy5BB5EEfWRa2Vd8JWqq1Mc8DDOByDbbDx8ZKxAAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==" />

                   <h2 className="card-front__heading">
                    RESTAURANT MENU
                </h2>
                <p className="card-front__text-price">
                Say yes to more cheese!
                </p>
                    </div>

                    <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--city">
                            View Menu
                        </p>
                    </div>
                </div>
                {/*video */}
            </div>
        </div>

        <div className="inside-page">
            <div className="inside-page__container">
                <h1 className="inside-page__heading inside-page__heading--city">
                Bon Appétit  😋
                </h1>
                <p className="inside-page__text">
                    <div className="content" role="main">
      
                    <div className="menu">
            {menuItems.map((item) => (
                <MainMenu key={item.name} menu={item} />
            ))}
        </div>
                    </div>
        
                    <Button />
                    </p>
        </div>
    </div>
</div>
                    </section>
    </>
  )
}
Menu.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default Menu;
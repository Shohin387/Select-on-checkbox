import React from "react";
import style from './css/style.module.css'

const SideBar = React.memo(({children, update, projects}) => {

    return(
        <section className={style.main}>
            <section className={style.sideBar}>
                <input checked={projects[0].isActive} type="checkbox" name="vue" onClick={() => {update("Vue")}}  /> <label htmlFor="vue">Vue</label> <br />
                <input checked={projects[1].isActive} type="checkbox" name="react" onClick={() => {update("React")}}/> <label htmlFor="React">React</label><br />
                <input checked={projects[2].isActive} type="checkbox" name="angular" onClick={() => {update("Angular")}} /> <label htmlFor="Angular">Angular</label>
            </section>
            
            <section className={style.container}>
                {children}
            </section>
        </section>
    )
})


export default SideBar